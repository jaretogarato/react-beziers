import React, { useState, useEffect } from 'react'
// import Fantasy from '../audio/fantasy.mp3'
// import AHarmonic from '../audio/a-5th-fret-harmonic.wav'
// import FourChords from '../audio/4-chords.ogg'
import axios from 'axios'

export default function WebAudioFileIn02({ actx, sound }) {
	const [song, setSong] = useState(sound)
	const [audioContext, setAudioContext] = useState(actx)
	// const [audioElement, setAudioElement] = useState()
	const [audBuffer, setAudBuffer] = useState(0)

	let audioBuffer = null

	const onError = () => {
		console.log('There has been an error')
	}

	// const LoadDogSound = (url) => {
	// 	url = `http://localhost:3000${url.url}`
	// 	// url = url.url
	// 	console.log('url: ', url)

	// 	let request = new XMLHttpRequest()
	// 	request.open('GET', url, true)
	// 	request.responseType = 'ArrayBuffer'
	// 	console.log('request::::: ', request)

	// 	console.log('request: ', request)
	// 	// Decode asynchronously
	// 	request.onload = function () {
	// 		console.log('*****request.response: ', request.response)
	// 		actx.decodeAudioData(
	// 			request.response,
	// 			function (buffer) {
	// 				audioBuffer = buffer
	// 				setAudBuffer(audioBuffer)
	// 				console.log('-----audioBuffer: ', audioBuffer)
	// 			},
	// 			onError
	// 		)

	// 		request.send()
	// 	}
	// }

	const LoadSoundWithAxios = (url) => {
		let myFftData
		let myBuffer
		let source
		url = url.url
		// console.log(url)
		source = audioContext.createBufferSource()

		axios
			.get(url, {
				responseType: 'arraybuffer',
			})
			.then((resp) => {
				// myBuffer = resp.request.response
				myBuffer = resp.data
				setAudBuffer(myBuffer)
			})
			.then(() => {
				// console.log('AUD BUFFER: ', audBuffer)
				myFftData = audioContext.decodeAudioData(audBuffer, (buffer) => {
					source.buffer = buffer
					source.connect(audioContext.destination)
					source.loop = false
				})
			})
			.catch((err) => {
				console.log('there was an error:')
				console.log(err)
			})
		// console.log('-----audioBuffer: ', audioBuffer)
		// console.log('+++++myFftData: ', myFftData)
	}
	const handleClick = () => {
		// console.log('audioBuffer: ', audioBuffer)
		// console.log('audBuffer: ', audBuffer)
	}

	const LoadSoundWithFetch = (url) => {
		let myFftData
		let myBuffer
		let source
		url = url.url
		console.log(url)
		myBuffer = async (url) => {
			const response = await fetch(url)
			return response.arrayBuffer()
		}
		console.log(myBuffer)
	}

	return (
		<>
			<h3>Web Audio File In 02</h3>
			{/* <audio src={song}></audio> */}
			{/* <LoadSoundWithAxios url={sound} /> */}
			<LoadSoundWithFetch url={sound} />
			<button onClick={handleClick}>Log audBuffer</button>
		</>
	)
}
