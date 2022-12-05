import React, { useState, useEffect } from 'react'
// import P5 from 'p5'
import fftjs from 'fft-js'
import fftUtil from 'fft-js/src/fftutil'
import Canvas from './Canvas'
// import { loadSound } from 'p5/lib/addons/p5.sound.js'
// import FourChords from '../audio/4-chords.wav'

export default function WebAudioFileInP5({ actx, soundFile }) {
	const [sound, setSound] = useState(soundFile)
	const [soundBuffer, setSoundBuffer] = useState([])
	const [soundBufferView, setSoundBufferView] = useState([])

	const fetchData = async (sound) => {
		const response = await fetch(sound)
		if (!response.ok) {
			throw new Error('Data coud not be fetched!')
		} else {
			return response.arrayBuffer(16)
		}
	}

	useEffect(() => {
		fetchData(sound)
			.then((res) => {
				setSoundBuffer(res)
				setSoundBufferView(new Uint16Array(res))
				console.log('res: ', res)
			})
			.catch((e) => {
				console.log(e.message)
			})
	}, [])

	const normalizeArray = (sixteenBitArray) => {
		let normalizedArray = []
		sixteenBitArray.map((point) => {
			normalizedArray.push(parseFloat((point / 65535).toFixed(4)))
		})
		return normalizedArray
	}

	const normalizedArray = normalizeArray(soundBufferView)
	let firstTwentieth = []

	for (let x = 0; x < 2048; x++) {
		firstTwentieth.push(normalizedArray[x])
	}

	let phasors = fftjs.fft(firstTwentieth)
	let frequencies = fftUtil.fftFreq(phasors, 8000),
		magnitudes = fftUtil.fftMag(phasors)

	var both = frequencies.map(function (f, ix) {
		return { frequency: f, magnitude: magnitudes[ix] }
	})

	let x, y
	const draw = (ctx, frameCount) => {
		x = frameCount
		y = ctx.canvas.height - both[frameCount].magnitude * 3
		ctx.fillStyle = '#00fff0'
		ctx.strokeStyle = '#ff00dd'
		ctx.beginPath()

		if (frameCount === 1) {
			ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
			ctx.moveTo(x, y)
		} else {
			ctx.arc(x, y, 2, 0, 2 * Math.PI)
			ctx.fill()
			ctx.moveTo(
				frameCount - 1,
				ctx.canvas.height - both[frameCount - 1].magnitude * 3
			)
			ctx.lineTo(x, y)
			ctx.stroke()
		}
	}

	return (
		<div>
			<h2>Audio File In P5</h2>
			<Canvas draw={draw} width={window.innerWidth} height={300} />
		</div>
	)
}
