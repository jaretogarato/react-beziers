import React from 'react'

// implicit return - no "return" and no curly brackets vv
const DrawSpectrum = (props) => (
	// give this a key: vv
	// <div key={`key-${spectrumId}`}>

	<div key={`key-${props.spectrumId}`}>
		<svg viewBox='0 0 1000 300'>
			<path
				d={props.spectrum}
				// style={this.makeSpectraStyles(props.spectrumId, 200, 300)}
				style={props.spectrumStyle}
			/>
		</svg>
	</div>
)

export default DrawSpectrum
