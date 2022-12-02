import React, { useState } from 'react'
import FreqControl from './FreqControl'
import LogarithmicRange from './logarithmic-inputs/LogarithmicRange'
import LogarithmicSlider from './logarithmic-inputs/LogarithmicSlider'

// let actx = new AudioContext()
// let out = actx.destination
// let osc1 = actx.createOscillator()
// let gain1 = actx.createGain()

// osc1.connect(gain1)
// gain1.connect(out)

function WebAudioOscillator({ oscillator, audioContext, output, gain }) {
	let [oscFreq, setOscFreq] = useState(oscillator.frequency.value)

	// let surrogateOscillator = oscillator

	// const changeOscFreq = (e) => {
	// 	console.log(e)
	// 	let { value } = e.target
	// 	setOscFreq(value)
	// 	oscillator.frequency.value = value
	// }
	// linear ^^

	const handleChange = (newValues) => {
		// console.log(newValues)
		// console.log(newValues.value)
		let value = newValues.value
		setOscFreq(value)
		oscillator.frequency.value = value
	}

	// function startOsc(bool) {
	// 	if (bool === undefined) bool = true

	// 	if (bool === true) {
	// 		oscillator = surrogateOscillator
	// 		oscillator.start(audioContext.currentTime)
	// 		oscillator.connect(gain)
	// 		gain.connect(output)
	// 	} else {
	// 		oscillator.stop(audioContext.currentTime)
	// 		oscillator.disconnect(gain)
	// 		gain.disconnect(output)
	// 		oscillator = null
	// 	}
	// }

	return (
		<>
			<div>
				<h3>WebAudioOscillator</h3>

				<button onClick={() => oscillator.start()}>Start</button>
				{/* <button onClick={() => startOsc()}>Start</button> */}
				<button onClick={() => oscillator.stop()}>Stop</button>
				{/* <button onClick={() => startOsc(false)}>Stop</button> */}
				{/* <FreqControl changeFreq={changeOscFreq} freq={oscFreq} /> */}
				{/* linear ^^ */}
				<LogarithmicRange onChange={handleChange} defaultValue={oscFreq} />
			</div>
		</>
	)
}

export default WebAudioOscillator
