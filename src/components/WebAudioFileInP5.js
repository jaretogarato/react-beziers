import React, { useState, useEffect } from 'react'
// import P5 from 'p5'
import fftjs from 'fft-js'

// import { loadSound } from 'p5/lib/addons/p5.sound.js'

// import FourChords from '../audio/4-chords.wav'

export default function WebAudioFileInP5({ actx, soundFile }) {
	const [sound, setSound] = useState(soundFile)
	const [soundBuffer, setSoundBuffer] = useState([])
	const [soundBufferView, setSoundBufferView] = useState([])
	const [fftData, setFftData] = useState([])
	const [p5Sound, setP5Sound] = useState()

	const source = actx.createBufferSource()

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

	console.log('soundsound: ', sound)
	console.log(soundBuffer)
	console.log(soundBufferView)
	console.log(soundBufferView[500])
	console.log(soundBufferView[5000])
	console.log(soundBufferView[15000])

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
	console.log('firstTwentieth: ', firstTwentieth)
	console.log(firstTwentieth.length)

	let phasors = fftjs.fft(firstTwentieth)
	console.log('phasors:')
	console.log(phasors)
	console.log(phasors.length)

	// const graphFft = (fftData) => {
	//   fftData.map((point, yy) => {
	//     //canvas. point at x, yy is height
	//   }
	// }

	return (
		<div>
			<h2>Audio File In P5</h2>
		</div>
	)
}
