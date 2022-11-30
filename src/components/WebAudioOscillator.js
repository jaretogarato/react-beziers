import React, { useState } from 'react'
import Osc1 from './Osc1'

// let actx = new AudioContext()
// let out = actx.destination
// let osc1 = actx.createOscillator()
// let gain1 = actx.createGain()

// osc1.connect(gain1)
// gain1.connect(out)

function WebAudioOscillator({ audioContext, output, oscillator, gain }) {
	let [oscFreq, setOscFreq] = useState(oscillator.frequency.value)

	const changeOscFreq = (e) => {
		let { value } = e.target
		setOscFreq(value)
		oscillator.frequency.value = value
	}

	console.log('oooscillator: ', oscillator)
	console.log('oooscillator.frequency.value: ', oscillator.frequency.value)

	return (
		<>
			<div>
				<h1>WebAudioFileIn</h1>
				<button onClick={() => oscillator.start()}>Start</button>
				<button onClick={() => oscillator.stop()}>Stop</button>
				<Osc1 changeFreq={changeOscFreq} freq={oscFreq} />
			</div>
		</>
	)
}

export default WebAudioOscillator
