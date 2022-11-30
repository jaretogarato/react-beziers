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
	return (
		<>
			<div>
				<h1>WebAudioApiHoc</h1>
				<WebAudioOscillator oscillator={osc1} />
			</div>
		</>
	)
}
