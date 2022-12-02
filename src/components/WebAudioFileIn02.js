import React, { useState, useEffect } from 'react'
import Fantasy from '../audio/fantasy.mp3'
import AHarmonic from '../audio/a-5th-fret-harmonic.wav'
import FourChords from '../audio/4-chords.ogg'
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

	const LoadDogSound = (url) => {
		url = `http://localhost:3000${url.url}`
		// url = url.url
		console.log('url: ', url)

		let request = new XMLHttpRequest()
		request.open('GET', url, true)
		request.responseType = 'ArrayBuffer'
		console.log('request::::: ', request)

		console.log('request: ', request)
		// Decode asynchronously
		request.onload = function () {
			console.log('*****request.response: ', request.response)
			actx.decodeAudioData(
				request.response,
				function (buffer) {
					audioBuffer = buffer
					setAudBuffer(audioBuffer)
					console.log('-----audioBuffer: ', audioBuffer)
				},
				onError
			)

			request.send()
		}
	}

	const LoadSoundWithAxios = (url) => {
		url = url.url
		console.log(url)
		axios
			.get(url, {
				responseType: 'arraybuffer',
				// headers: {
				//   'Accept': 'application/pdf'
				// }
			})
			// .then((resp) => resp.request.arrayBuffer())
			.then((resp) => {
				// 	resp.request.arrayBuffer()
				console.log('resp: ', resp)

				// 	// resp.request.responseType = 'arraybuffer'

				// 	// createBuffer(numOfChannels, length, sampleRate)
				// 	// To determine the length to use for a specific number of seconds of audio, use numSeconds * sampleRate.
				// 	// 10 seconds vvv
				// 	let buffer = audioContext.createBuffer(1, 441000, 44100)
				// 	console.log(buffer)

				// 	audioContext.decodeAudioData(resp, function (buffer) {
				// 		audioBuffer = buffer
				// 		setAudBuffer(audioBuffer)
				// 		console.log('-----audioBuffer: ', audioBuffer)
				// 	})
			})
			.catch((err) => {
				console.log('there was an error:')
				console.log(err)
			})
		// this.props.dispatch(getUser(id))
	}

	// const asyncFunction(asyncTask(url)) {
	//   //do something
	//   {
	//     url: {url},
	//     method: 'POST',
	//     responseType: 'arraybuffer',
	//     data: query
	//   }
	// }

	// const LoadSoundWithAwait = async (url) => {
	//   url = url.url
	//   const response = await asyncTask(url)
	//   .catch(error => console.error(error))

	//     ;
	// }

	const handleClick = () => {
		console.log('audioBuffer: ', audioBuffer)
		console.log('audBuffer: ', audBuffer)
	}

	return (
		<>
			<h3>Web Audio File In 02</h3>
			{/* <audio src={song}></audio> */}
			<LoadSoundWithAxios url={sound} />
			<button onClick={handleClick}>Log audBuffer</button>
			{/* <button onClick={handleClick(true)}>Start</button>
			<button onClick={handleClick(false)}>Stop</button> */}
		</>
	)
}
