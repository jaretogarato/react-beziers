import React from 'react'

const Osc1 = ({ changeFreq, freq }) => {
	return (
		<div>
			<input
				value={freq}
				max='5000'
				onChange={changeFreq}
				type='range'
				id='frequency'
			></input>
		</div>
	)
}

export default Osc1
