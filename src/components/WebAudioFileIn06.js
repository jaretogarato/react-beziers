import React, { useState } from 'react'
import VisualDemo from './VisualDemo'
// import soundFile from '../audio/GummyBearz.mp3'
import soundFile from '../audio/4-chords-mono.mp3'
// import soundFile from '../audio/4-chords-mono-signed-16.aiff'

class WebAudioFileIn06 extends React.Component {
	state = {}
	frequencyBandArray = [...Array(26).keys()]
	// {actx, soundFile} = this.props

	initializeAudioAnalyser = () => {
		console.log('Initialising audioContext')
		const audioFile = new Audio()
		const audioContext = new AudioContext()
		const source = audioContext.createMediaElementSource(audioFile)
		const analyser = audioContext.createAnalyser()
		// audioFile.src = soundFile
		audioFile.src = this.props.soundFile
		// console.log(audioFile)
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

	render() {
		// console.log(this.props.actx)
		// console.log(this.props.soundFile)

		return (
			<div>
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
