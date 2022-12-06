import React, { useState } from 'react'
import { Grid } from 'semantic-ui-react'
import WebAudioOscillator from './WebAudioOscillator'
// import WebAudioFileIn from './WebAudioFileIn'
// import WebAudioFileIn02 from './WebAudioFileIn02'
// import WebAudioFileIn03 from './WebAudioFileIn03'
import WebAudioFileIn04 from './WebAudioFileIn04'
import WebAudioFileInP5 from './WebAudioFileInP5'
import WebAudioFileIn06 from './WebAudioFileIn06'
// import FourChords from '../audio/4-chords-mono.wav'
// import FourChords from '../audio/4-chords.aif'
import FourChords from '../audio/4-chords-mono-signed-16.aiff'
import FourChordsMp3 from '../audio/4-chords-mono.mp3'

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
				<Grid celled>
					<Grid.Row>
						<Grid.Column width={16}>
							<WebAudioOscillator
								oscillator={osc1}
								audioContext={actx}
								output={out}
								gain={gain1}
							/>
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column width={16}>
							<WebAudioFileIn04 actx={actx} soundFile={FourChords} />
						</Grid.Column>
						<Grid.Column width={16}>
							<WebAudioFileIn06 actx={actx} soundFile={FourChordsMp3} />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</>
	)
}

// const source = actx.createBufferSource()

// 	let analyser = actx.createAnalyser()
// 	analyser.fftSize = 2048
// 	let bufferLength = analyser.fftSize
// 	let dataArray = new Uint8Array(bufferLength)

// useEffect(() => {
//   fetchData(sound)
//     .then((res) => {
//       setSoundBuffer(res)
//     })
//     .then(() => {
//       analyser.getByteTimeDomainData(soundBuffer)
//       setFftData(analyser)
//     })
//     .catch((e) => {
//       console.log(e.message)
//     })
// }, [])
