import React from 'react'
import { fft, util } from 'fft-js'
import Plot from 'react-plotly.js'

class Fft01 extends React.Component {
	render() {
		var hann = require('window-function/hann')
		var applyWindow = require('window-function/apply')

		const SAMPLE_RATE = 2048
		const STFT_BLOCK_SIZE = 512
		const partial = (f, phase, a = 0.5) =>
			Math.sin(Math.PI * 2 * (phase / SAMPLE_RATE) * f) * a

		const samples = []
		for (let i = 0; i <= SAMPLE_RATE; i++) {
			samples.push(
				[
					partial(80, i, 1),
					partial(160, i, 0.5),
					partial(240, i, 0.25),
					partial(320, i, 0.125),
					partial(400, i, 0.06),
					partial(480, i, 0.012),
					partial(560, i, 0.006),
					partial(640, i, 0.0012),
					partial(720, i, 0.0006),
				].reduce((a, c) => a + c, 0)
			)
		}

		const shortTimeSamples = samples.slice(0, STFT_BLOCK_SIZE)
		const windowedSamples = [...shortTimeSamples]
		applyWindow(windowedSamples, hann)
		const nullFill = (samples) => [...samples, ...Array(samples.length).fill(0)]
		const dbRef = 1
		const toDB = (samples) => samples.map((s) => 20 * Math.log10(s / dbRef))

		const phasors0 = fft(nullFill(windowedSamples))
		const phasors = fft(shortTimeSamples)
		const phasors2 = fft(windowedSamples)

		var frequencies = util.fftFreq(phasors, SAMPLE_RATE), // Sample rate and coef is just used for length, and frequency step
			magnitudes = util.fftMag(phasors)

		console.log(STFT_BLOCK_SIZE, frequencies.length)

		var trace0 = {
			x: util.fftFreq(phasors0, SAMPLE_RATE),
			y: toDB(util.fftMag(phasors0).map((x) => x / (STFT_BLOCK_SIZE / 2))),
			mode: 'lines+markers',
			//type: 'scatter',
			name: 'Without Hann window and DB scale',
		}

		var trace1 = {
			x: frequencies,
			y: toDB(magnitudes),
			mode: 'markers',
			//type: 'scatter',
			name: 'Without Hann window',
		}

		var trace2 = {
			y: samples,
			mode: 'markers',
			//type: 'scatter',
		}

		var trace3 = {
			y: shortTimeSamples,
			mode: 'lines+markers',
			//type: 'scatter',
			name: 'Short Time samples',
		}

		var trace4 = {
			y: windowedSamples,
			mode: 'lines+markers',
			//type: 'scatter',
			name: 'With Hann window',
		}

		var trace5 = {
			y: toDB(util.fftMag(phasors2)),
			x: util.fftFreq(phasors2, SAMPLE_RATE),
			//mode: 'markers',
			type: 'scatter',
			name: 'With Hann window',
		}

		return (
			// Plotly.newPlot('plot1', [trace0])
			// <Plot
			// 	data={[
			// 		{
			// 			x: [1, 2, 3],
			// 			y: [2, 6, 3],
			// 			type: 'scatter',
			// 			mode: 'lines+markers',
			// 			marker: { color: 'red' },
			// 		},
			// 		{ type: 'bar', x: [1, 2, 3], y: [2, 5, 3] },
			// 	]}
			// 	layout={{ width: 320, height: 240, title: 'A Fancy Plot' }}
			// />
			<>
				<div
					style={{
						// border: '1px solid red',
						// marginBottom: '300px',
						minHeight: '200px',
						position: 'relative',
					}}
				>
					<Plot
						data={[trace0]}
						layout={{ width: 640, height: 480, title: 'Trace0' }}
					/>
				</div>
				<div>
					<Plot
						data={[trace1]}
						layout={{ width: 640, height: 480, title: 'Trace0' }}
					/>
				</div>
			</>

			// Plotly.newPlot(
			//   'plot2',
			//   [trace2],
			//   { title: 'Samples (1s, 44100 sample rate)' },
			//   { staticPlot: true }
			// );
			// Plotly.newPlot('plot3', [trace3, trace4], {
			// 	title: 'Sample block multiplied by the window function',
			// })
			// }
		)
	}
}

export default Fft01
