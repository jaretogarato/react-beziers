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
	// console.log(new Uint8Array(soundBuffer))
	// console.log('fft: ', fftData)
	// console.log('p5Sound: ', p5Sound)

	return (
		<div>
			<h2>Audio File In P5</h2>
		</div>
	)
}
