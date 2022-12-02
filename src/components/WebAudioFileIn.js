import React, { useState, useEffect } from 'react'
import Fantasy from '../audio/fantasy.mp3'
import AHarmonic from '../audio/a-5th-fret-harmonic.wav'
import FourChords from '../audio/4-chords.ogg'

export default function WebAudioFileIn({ actx, sound }) {
	const [song, setSong] = useState(sound)
	const [audioContext, setAudioContext] = useState(actx)
	const [audioElement, setAudioElement] = useState()

	useEffect(() => {
		// const AudioContext = window.AudioContext ||      window.webkitAudioContext;
		// const audioContext = new AudioContext();
		// this.setState({audioContext: audioContext})
		setAudioContext(actx)
		console.log('vvv')
		console.log(actx)
		console.log(audioContext)
		console.log('^^^')
		setSong(sound)
		// const audioElement = document.querySelector('audio')
		// this.setState({audioElement:audioElement})
		// setAudioElement(audioEl)
		console.log('song: ', song)
		const nsong = new Audio(song)
		console.log('nsong: ', nsong)
		setAudioElement(nsong)
		console.log('audioElement: ', audioElement)

		// const track = audioContext.createMediaElementSource(audioElement)
		// console.log('track: ', track)
		// track.connect(audioContext.destination)
	}, [])

	// const changeOsc1Freq = (e) => {
	// 	let { value } = e.target
	// 	setOsc1Freq(value)
	// 	osc1.frequency.value = value
	// }
	// const audioEl = document.querySelector('audio')
	// setAudioElement(audioEl)

	console.log('zzaudioElement: ', audioElement)

	// const handleClick = (action) => {
	// 	console.log('action: ', action)
	// 	action === true ? audioElement.play() : audioElement.pause()
	// }

	return (
		<>
			<h1>Web Audio File In</h1>
			<audio src={song}></audio>
			{/* <button onClick={handleClick(true)}>Start</button>
			<button onClick={handleClick(false)}>Stop</button> */}
		</>
	)
}
