import React from 'react'
import '../styles/App.scss'

function VisualDemo(props) {
	function adjustFreqBandStyle(newAmplitudeData) {
		// console.log('newAmplitudeData: ')
		// console.log(newAmplitudeData)
		let domElements = props.frequencyBandArray.map((num) =>
			document.getElementById(num)
		)
		for (let num of props.frequencyBandArray) {
			domElements[num].style.height = `${newAmplitudeData[num]}px`
		}
	}

	function animateOneFrame() {
		props.withFrequencyData(adjustFreqBandStyle)
		requestAnimationFrame(animateOneFrame)
	}

	function handleStartButtonClick() {
		props.initializeAudioAnalyser()
		requestAnimationFrame(animateOneFrame)
	}

	return (
		<div>
			<div>
				<button
					id='startButton'
					onClick={() => handleStartButtonClick()}
					disabled={!!props.audioAnalyser}
				>
					{' '}
					Start!
				</button>
			</div>

			<div className='eq'>
				{props.frequencyBandArray.map((num) => (
					<div id={num} className='frequencyBand' key={num}>
						{num}
					</div>
				))}
			</div>
		</div>
	)
}

export default VisualDemo
