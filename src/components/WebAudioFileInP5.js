import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'

import fftjs from 'fft-js'
import fftUtil from 'fft-js/src/fftutil'
import Canvas from './Canvas'
import P5 from 'p5'
// import Sketch from '@react-p5/core'
import Sketch from 'react-p5'
import 'p5/lib/addons/p5.sound'
// import { createGrain, createOverlay } from "@react-p5/utils"
// import type { FC } from "react"
// import type { Graphics } from "p5"
// import type { P5 } from "@react-p5/core"

// import { loadSound } from 'p5/lib/addons/p5.sound.js'
import FourChords from '../audio/4-chords.wav'

export default function WebAudioFileInP5({ actx, soundFile }) {
	const [sound, setSound] = useState(soundFile)
	const [soundBuffer, setSoundBuffer] = useState([])
	const [soundBufferView, setSoundBufferView] = useState([])
	const [p5, setP5] = useState()

	let song
	let fft
	let button

	useEffect(() => {
		fetchData(sound)
			.then((res) => {
				setSoundBuffer(res)
				setSoundBufferView(new Uint16Array(res))
				console.log('res: ', res)
			})
			.then(() => {
				window.addEventListener('resize', windowResized)
				return () => window.removeEventListener('resize', windowResized)
			})
			.catch((e) => {
				console.log(e.message)
			})
	}, [])

	function windowResized() {
		// keep in mind, `p5` can be `undefined`
		// so check it before using
		if (p5) {
			p5.resizeCanvas(window.innerWidth, window.innerHeight)
		}
	}

	const fetchData = async (sound) => {
		const response = await fetch(sound)
		if (!response.ok) {
			throw new Error('Data coud not be fetched!')
		} else {
			return response.arrayBuffer(16)
		}
	}

	const toggleSound = () => {
		if (sound.isPlaying()) {
			sound.pause()
		} else {
			sound.play()
		}
	}

	const preload = () => {
		song = P5.sound.loadSound(FourChords)
	}

	// const setup = (p5, canvasParentRef) => {
	// 	// set to state
	// 	setP5(p5)
	// 	p5.createCanvas(window.innerWidth, window.innerHeight).parent(
	// 		canvasParentRef
	// 	)
	// }

	const setup = (p5, canvasParentRef) => {
		setP5(p5)
		// Sketch.createCanvas(256, 256)
		p5.createCanvas(window.innerWidth, window.innerHeight).parent(
			canvasParentRef
		)
		p5.colorMode(p5.HSB)
		p5.angleMode(p5.DEGREES)
		button = p5.createButton('toggle')
		button.mousePressed(toggleSound)
		song.p5.sound.play()
		fft = new P5.FFT(0.9, 128)
	}

	return (
		<div>
			<h2>Audio File In P5</h2>
			{/* <Canvas draw={draw} width={window.innerWidth} height={300} /> */}
			<Sketch preload={preload} setup={setup} />
		</div>
	)
}
