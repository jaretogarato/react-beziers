import React, { useState } from 'react'
import WebAudioOscillator from './WebAudioOscillator'
// import WebAudioFileIn from './WebAudioFileIn'
// import WebAudioFileIn02 from './WebAudioFileIn02'
import WebAudioFileIn03 from './WebAudioFileIn03'
import FourChords from '../audio/4-chords-mono.mp3'

//Main: AudioContext and output
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
				<h1>Web Audio API HOC</h1>

				<WebAudioOscillator
					oscillator={osc1}
					audioContext={actx}
					output={out}
					gain={gain1}
				/>
				<WebAudioFileIn03 actx={actx} soundFile={FourChords} />
			</div>
		</>
	)
}
