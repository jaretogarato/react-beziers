import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Log from './log'

const LogarithmicRange = ({
	onChange,
	defaultValue = 0,
	minpos = 0,
	maxpos = 100,
	minval = 5,
	maxval = 1600,
}) => {
	const [position, setPosition] = useState(defaultValue)

	const log = new Log({
		minpos,
		maxpos,
		minval,
		maxval,
	})

	const calculateNewValue = (position) => {
		if (position === 0) return 0
		const value = log.value(position)
		if (value > 1000) return Math.round(value / 100) * 100
		if (value > 500) return Math.round(value / 10) * 10
		return Math.round(value)
	}
	const handleChange = (e) => {
		const newPosition = e.target.value
		setPosition(newPosition)
		if (!onChange) {
			return console.log('Pass an onChange function to <LogarithmicRange />')
		}
		const newValues = {
			position: newPosition,
			value: calculateNewValue(newPosition),
		}
		onChange(newValues)
	}
	return (
		<input
			type='range'
			min={minpos}
			max={maxpos}
			value={position}
			onChange={handleChange}
		/>
	)
}

export default LogarithmicRange
