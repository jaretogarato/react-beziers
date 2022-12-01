import React, { useState } from 'react'
import Slider from 'rc-slider'
import Log from './log'
import 'rc-slider/assets/index.css'

const LogarithmicSlider = ({
	defaultHighPosition = 50,
	defaultLowPosition = 0,
	minpos = 0,
	maxpos = 100,
	minval = 5,
	maxval = 1600,
	onChange,
}) => {
	const [lowPosition, setLowPosition] = useState(defaultLowPosition)
	const [highPosition, setHighPosition] = useState(defaultHighPosition)

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

	const handleChange = ([newLowPosition, newHighPosition]) => {
		setLowPosition(newLowPosition)
		setHighPosition(newHighPosition)

		if (!onChange) {
			return console.error('Please pass onChange to <Logarithmic Slider />')
		}

		const newValues = {
			lowPosition: newLowPosition,
			highPosition: newHighPosition,
			lowValue: calculateValue(newLowPosition),
			highValue: calculateValue(newHighPosition),
		}
		onChange(newValues)
	}

	return (
		<Slider
			range
			value={[lowPosition, highPosition]}
			onChange={handleChange}
			maxValue={maxpos}
			minValue={minpos}
			allowCross={false}
		/>
	)
}

export default LogarithmicSlider
