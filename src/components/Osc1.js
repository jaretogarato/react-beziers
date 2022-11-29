import React from 'react'

const Osc1 = ({ changeFreq }) => {
	return (
		<div>
			<input onChange={changeFreq} type='range' id='frequency'></input>
		</div>
	)
}

export default Osc1
