import React from 'react'

// implicit return - no "return" and no curly brackets vv
const DrawSpectrum = (props) => (
	// give this a key: vv
	// <div key={`key-${spectrumId}`}>

	<div>
		<svg viewBox='0 0 1000 300'>
			{/* <path
        d={repeatingSpectrum}
        style={this.makeSpectraStyles(spectrumId, 200, 300)}
      /> */}
		</svg>
	</div>
)

export default DrawSpectrum
