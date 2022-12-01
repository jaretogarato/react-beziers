import React from 'react'

const FreqControl = ({ changeFreq, freq }) => {
	return (
		<div>
			<input
				value={freq}
				max='10000'
				onChange={changeFreq}
				type='range'
				id='frequency'
			></input>
		</div>
	)
}

export default FreqControl
