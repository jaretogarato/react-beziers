import React, { useState, useRef } from 'react'
import ReactAudioPlayer from 'react-audio-player'

import VisualDemo from './VisualDemo'
// import soundFile from '../audio/GummyBearz.mp3'
import soundFile from '../audio/4-chords-mono.mp3'
// import soundFile from '../audio/4-chords-mono-signed-16.aiff'

function AAudio(audioFile) {
	const audioRef = useRef()

	const onLoadedMetadata = () => {
		if (audioRef.current) {
			console.log('audioRef.current.duration:')
			console.log(audioRef.current.duration)
		}
	}

	return (
		<audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
			<p>lalala</p>
			<source src={audioFile} type='audio/x-wav' />
		</audio>
	)
}

// document.getElementById('fileinput').addEventListener(
// 	'change',
// 	function () {
// 		// Obtain the uploaded file, you can change the logic if you are working with multiupload
// 		var file = this.files[0]

// 		// Create instance of FileReader
// 		var reader = new FileReader()

// 		// When the file has been succesfully read
// 		reader.onload = function (event) {
// 			// Create an instance of AudioContext
// 			var audioContext = new (window.AudioContext ||
// 				window.webkitAudioContext)()

// 			// Asynchronously decode audio file data contained in an ArrayBuffer.
// 			audioContext.decodeAudioData(event.target.result, function (buffer) {
// 				// Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
// 				var duration = buffer.duration

// 				// example 12.3234 seconds
// 				console.log('The duration of the song is of: ' + duration + ' seconds')
// 				// Alternatively, just display the integer value with
// 				// parseInt(duration)
// 				// 12 seconds
// 			})
// 		}

// 		// In case that the file couldn't be read
// 		reader.onerror = function (event) {
// 			console.error('An error ocurred reading the file: ', event)
// 		}

// 		// Read file as an ArrayBuffer, important !
// 		reader.readAsArrayBuffer(file)
// 	},
// 	false
// )

class WebAudioFileIn06 extends React.Component {
	state = {}
	frequencyBandArray = [...Array(26).keys()]
	// {actx, soundFile} = this.props

	initializeAudioAnalyser = () => {
		console.log('Initialising audioContext')
		// const audioRef = useRef()
		const audioFile = new Audio()
		// const audioContext = new AudioContext()
		const audioContext = this.props.actx
		const source = audioContext.createMediaElementSource(audioFile)
		const analyser = audioContext.createAnalyser()
		console.log('source: ')
		console.log(source)
		// audioFile.src = soundFile

		// var reader = new FileReader();

		// const audioDecoded = this.props.actx.decodeAudioData(
		// 	source,
		// 	function (buffer) {
		// 		// Obtain the duration in seconds of the audio file (with milliseconds as well, a float value)
		// 		var duration = buffer.duration

		// 		// example 12.3234 seconds
		// 		console.log('The duration of the song is of: ' + duration + ' seconds')
		// 		// Alternatively, just display the integer value with
		// 		// parseInt(duration)
		// 		// 12 seconds
		// 	}
		// )
		// console.log('audioDecoded')
		// console.log(audioDecoded)

		audioFile.src = this.props.soundFile
		analyser.fftSize = 2048
		source.connect(audioContext.destination)
		source.connect(analyser)
		audioFile.play()
		this.setState({
			audioAnalyser: analyser,
		})
	}

	withFrequencyData = (callbackFn) => {
		const bufferLength = this.state.audioAnalyser.frequencyBinCount
		const amplitudeArray = new Uint8Array(bufferLength)
		this.state.audioAnalyser.getByteFrequencyData(amplitudeArray)
		callbackFn(amplitudeArray)
	}

	handleLoadMetadata = (meta) => {
		const { duration } = meta.target
		console.log(duration)
	}

	render() {
		console.log(this.props.actx)
		// console.log(this.props.soundFile)

		return (
			<div>
				{/* <AAudio audioFile={this.props.audioFile}></AAudio> */}
				{/* <input id='fileinput'>input file</input> */}

				<ReactAudioPlayer
					src={this.props.soundFile}
					autoPlay
					controls
					onLoadedMetadata={this.handleLoadMetadata}
				/>

				<VisualDemo
					initializeAudioAnalyser={this.initializeAudioAnalyser}
					frequencyBandArray={this.frequencyBandArray}
					withFrequencyData={this.withFrequencyData}
					audioAnalyser={this.state.audioAnalyser}
				/>
			</div>
		)
	}
}

export default WebAudioFileIn06
