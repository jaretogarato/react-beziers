import React, { useState } from 'react'
import FreqControl from './FreqControl'
import LogarithmicRange from './logarithmic-inputs/LogarithmicRange'

// let actx = new AudioContext()
// let out = actx.destination
// let osc1 = actx.createOscillator()
// let gain1 = actx.createGain()

// osc1.connect(gain1)
// gain1.connect(out)

function WebAudioOscillator({ oscillator }) {
	let [oscFreq, setOscFreq] = useState(oscillator.frequency.value)

	const changeOscFreq = (e) => {
		let { value } = e.target
		setOscFreq(value)
		oscillator.frequency.value = value
	}

	const handleChange = (newValues) => {
		console.log(newValues)
	}

	return (
		<>
			<div>
				<h1>WebAudioFileIn</h1>
				<h3>log input</h3>
				<LogarithmicRange onChange={handleChange} />
				<h5>---------------------</h5>
				<button onClick={() => oscillator.start()}>Start</button>
				<button onClick={() => oscillator.stop()}>Stop</button>
				<FreqControl changeFreq={changeOscFreq} freq={oscFreq} />
			</div>
		</>
	)
}

export default WebAudioOscillator
