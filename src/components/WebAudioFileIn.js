import React, { useState } from 'react'
import Osc1 from './Osc1'

let actx = new AudioContext()
let out = actx.destination
let osc1 = actx.createOscillator()
let gain1 = actx.createGain()

osc1.connect(gain1)
gain1.connect(out)

function WebAudioFileIn() {
	const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value)

	const changeOsc1Freq = (e) => {
		let { value } = e.target
		setOsc1Freq(value)
		osc1.frequency.value = value
	}

	return (
		<>
			<h1>WebAudioFileIn</h1>
			<button onClick={() => osc1.start()}>Start</button>
			<button onClick={() => osc1.stop()}>Stop</button>
			<Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq} />
		</>
	)
}

export default WebAudioFileIn
