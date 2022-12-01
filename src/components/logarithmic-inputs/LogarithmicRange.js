import { calculateNewValue } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'
import Log from './log'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

const LogarithmicRange = ({
	onChange,
	defaultValue = 100,
	minpos = 0,
	maxpos = 100,
	minval = 20,
	maxval = 10000,
}) => {
	const [position, setPosition] = useState(defaultValue)

	const log = new Log({
		minpos,
		maxpos,
		minval,
		maxval,
	})

	const calculateValue = (position) => {
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
			value: calculateValue(newPosition),
		}
		onChange(newValues)
	}

	return (
		<div>
			<input
				type='range'
				min={minpos}
				max={maxpos}
				value={position}
				onChange={handleChange}
			/>
		</div>
	)
}

export default LogarithmicRange
