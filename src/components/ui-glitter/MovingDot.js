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
	const [both, setBoth] = useState([])
	// const [fftData, setFftData] = useState([])
	// const [p5Sound, setP5Sound] = useState()
	// const source = actx.createBufferSource()

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

	// console.log('soundsound: ', sound)
	// console.log(soundBuffer)
	// console.log(soundBufferView)
	// console.log(soundBufferView[500])
	// console.log(soundBufferView[5000])
	// console.log(soundBufferView[15000])

	const normalizeArray = (sixteenBitArray) => {
		let normalizedArray = []
		sixteenBitArray.map((point) => {
			normalizedArray.push(parseFloat((point / 65535).toFixed(4)))
		})
		return normalizedArray
	}

	const normalizedArray = normalizeArray(soundBufferView)
	console.log(normalizedArray)
	let firstTwentieth = []

	for (let x = 0; x < 2048; x++) {
		firstTwentieth.push(normalizedArray[x])
	}

	// console.log('firstTwentieth: ', firstTwentieth)
	// console.log(firstTwentieth.length)

	let phasors = fftjs.fft(firstTwentieth)
	// console.log('phasors:')
	// console.log(phasors)
	// console.log(phasors.length)

	let frequencies = fftUtil.fftFreq(phasors, 8000), // Sample rate and coef is just used for length, and frequency step
		magnitudes = fftUtil.fftMag(phasors)

	var theBoth = frequencies.map(function (f, ix) {
		return { frequency: f, magnitude: magnitudes[ix] }
	})

	// setBoth(theBoth)

	// console.log('state both: ')
	// console.log(both)

	// ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI)

	let x, y
	const draw = (ctx, frameCount) => {
		if (frameCount === 0 || frameCount % 10 === 0) {
			x = 100 + Math.random() * 500
			y = 100 + Math.random() * 500
		}
		x = frameCount
		// y =
		// console.log('frameCount: ', frameCount)
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
		ctx.fillStyle = '#ff00dd'
		ctx.beginPath()
		// arc params: x, y, r, sAngle, eAngle (in rads)
		// ctx.arc(
		// 	x,
		// 	y,
		// 	20 * Math.sin(frameCount * 0.05) ** 2,
		// 	0,
		// 	2 * Math.PI * Math.sin(frameCount * 0.05) ** 2
		// )
		ctx.arc(x, y, 2, 0, 2 * Math.PI)
		ctx.fill()
	}

	// const graphFft = (fftData) => {
	//   fftData.map((point, yy) => {
	//     //canvas. point at x, yy is height
	//   }
	// }

	return (
		<div>
			<h2>Audio File In P5</h2>
			<Canvas
				draw={draw}
				width={window.innerWidth}
				height={window.innerHeight}
			/>
		</div>
	)
}
