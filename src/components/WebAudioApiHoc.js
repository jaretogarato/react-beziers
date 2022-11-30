import React, { useState } from 'react'
// import Osc1 from './Osc1'

import WebAudioOscillator from './WebAudioOscillator'

let actx = new AudioContext()
let out = actx.destination

//WebAudioOscillator (01) vvv
let osc1 = actx.createOscillator()
let gain1 = actx.createGain()
osc1.connect(gain1)
gain1.connect(out)

export default function WebAudioApiHoc() {
	// const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value)

	// const changeOsc1Freq = (e) => {
	// 	let { value } = e.target
	// 	setOsc1Freq(value)
	// 	osc1.frequency.value = value
	// }

	console.log('oscillator: ', osc1)
	console.log('oscillator.frequency.value: ', osc1.frequency.value)

	return (
		<>
			<div>
				<h1>WebAudioApiHoc</h1>
				<WebAudioOscillator
					audioContext={actx}
					output={out}
					oscillator={osc1}
					gain={gain1}
				/>
				{/* <button onClick={() => osc1.start()}>Start</button>
				<button onClick={() => osc1.stop()}>Stop</button>
				<Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq} /> */}
			</div>
		</>
	)
}
