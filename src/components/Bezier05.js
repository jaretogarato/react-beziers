import React, { Component } from 'react'
import DrawSpectrum from './DrawSpectrum'
class Bezier05 extends Component {
	spectrumFirst = [200, 150, 275, 100, 25, 200, 125, 175, 250, 200, 250]
	spectrumLast = [100, 150, 25, 200, 275, 100, 175, 125, 50, 100, 50]
	totalSpectra = 16
	pointsPerSpectrum = 11
	spectrumHeight = 300
	spectrumWidth = 1000
	colWidth = 100
	// ^^ spectrumWidth / (pointsPerSpectrum - 1);
	bezierHStretch = 50
	// ^^ half of colWidth
	colors = [
		250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320,
		325,
	]

	bezierPoints = (points) => {
		let cubicPoints = ''
		let cp1x, cp1y, cp2x, cp2y, ptx, pty, bezierHStretch

		points.forEach((point, i) => {
			// point is the y coord
			if (i === 0) {
				cubicPoints += 'M ' + i + ',' + point + ' '
			} else {
				cp1x = i * this.colWidth - this.bezierHStretch
				cp1y = points[i - 1]
				cp2x = i * this.colWidth - this.bezierHStretch
				cp2y = point
				ptx = i * this.colWidth
				pty = point
				cubicPoints +=
					'C ' +
					cp1x +
					',' +
					cp1y +
					' ' +
					cp2x +
					',' +
					cp2y +
					' ' +
					ptx +
					',' +
					pty +
					' '
			}
		})
		return cubicPoints
	}

	makeSpectraStyles(spectrumId, startHue, endHue) {
		let range = Math.abs(startHue - endHue)
		let sliceSize = range / this.totalSpectra
		let currentHue = Math.round(spectrumId * sliceSize + startHue)
		let outputCss = {
			strokeWidth: '4',
			strokeOpacity: '.9',
			fill: 'none',
			stroke: 'hsl(' + currentHue + ', 76%, 72%)',
		}
		return outputCss
	}

	makeTimeSlice(spectrumId, spectrumWorking) {
		// we are going through 16 spectra
		let newYIncrement
		let newY
		let frequencyId
		// TODO: this should automatically match length of start array

		for (frequencyId = 0; frequencyId < this.pointsPerSpectrum; frequencyId++) {
			// we are going through 11 frequencies per spectra
			if (spectrumId === 0) {
				spectrumWorking[frequencyId] = this.spectrumFirst[frequencyId]
			} else {
				newYIncrement =
					Math.abs(
						this.spectrumFirst[frequencyId] - this.spectrumLast[frequencyId]
					) / this.totalSpectra

				if (this.spectrumFirst[frequencyId] > this.spectrumLast[frequencyId]) {
					newY = spectrumWorking[frequencyId] - newYIncrement
					spectrumWorking[frequencyId] = newY
				} else if (
					this.spectrumFirst[frequencyId] < this.spectrumLast[frequencyId]
				) {
					newY = spectrumWorking[frequencyId] + newYIncrement
					spectrumWorking[frequencyId] = newY
				} else {
					spectrumWorking[frequencyId] = this.spectrumFirst[frequencyId]
				}
			}
		}

		return spectrumWorking
	}

	render() {
		let spectrumWorking = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		let sliceData
		let thisSlice
		let sliceKey

		return (
			<div
				id='lakka'
				style={{
					backgroundColor: 'none',
					padding: '10px',
					height: '320px',
					minHeight: '320px',
					width: '1020px',
					position: 'relative',
				}}
			>
				{/* TODO: this should automatically match length of start array */}
				{this.colors.map((point, spectrumId) => {
					sliceData = this.makeTimeSlice(spectrumId, spectrumWorking)
					thisSlice = this.bezierPoints(sliceData)
					sliceKey = `spectrumKey-${point}`

					return (
						<DrawSpectrum
							spectrum={thisSlice}
							spectrumId={spectrumId}
							spectrumStyle={this.makeSpectraStyles(spectrumId, 200, 300)}
							key={sliceKey}
						/>
					)
				})}
			</div>
		)
	}
}

export default Bezier05
