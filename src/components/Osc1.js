import React from 'react'

const Osc1 = ({ changeFreq, freq }) => {
	return (
		<div>
			<input
				value={freq}
				// min='20'
				max='5000'
				onChange={changeFreq}
				type='range'
				id='frequency'
			></input>
		</div>
	)
}

export default Osc1
