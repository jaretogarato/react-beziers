import React, { Component } from 'react'
import DrawSpectrum from './DrawSpectrum'
class Bezier05 extends Component {
	spectrumFirst = [200, 150, 275, 100, 25, 200, 125, 175, 250, 200, 250]

	spectrumLast = [100, 150, 25, 200, 275, 100, 175, 125, 50, 100, 50]

	totalSpectra = 16
	pointsPerSpectrum = 11
	spectrumHeight = 300
	spectrumWidth = 1000
	hSpaceBetweenPoints = 100
	// ^^ spectrumWidth / (pointsPerSpectrum - 1);
	colWidth = 50
	// ^^ half of hSpaceBetweenPoints

	colors = [
		250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320,
		325,
	]

	bezierPoints = (points) => {
		let cubicPoints = ''
		let cp1x, cp1y, cp2x, cp2y, ptx, pty, colWidth

		points.forEach((point, i) => {
			// point is the y coord
			if (i === 0) {
				cubicPoints += 'M ' + i + ',' + point + ' '
			} else {
				cp1x = i * this.hSpaceBetweenPoints - this.colWidth
				cp1y = points[i - 1]
				cp2x = i * this.hSpaceBetweenPoints - this.colWidth
				cp2y = point
				ptx = i * this.hSpaceBetweenPoints
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
		console.log('()() ', cubicPoints)
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

	makeTimeSlice(spectrumId) {
		// we are going through 16 spectra
		let newYIncrement
		let newY
		let frequencyId

		console.log('---spectrumId: ', spectrumId)
		// make sure not to call this function on the first or last spectra
		for (frequencyId = 0; frequencyId < this.pointsPerSpectrum; frequencyId++) {
			// we are going through 11 frequencies per spectra
			if (spectrumId === 0) {
				// use spectrumFirst
				this.spectrumWorking[frequencyId] = this.spectrumFirst[frequencyId]
				// console.log('specId, freqId: ', spectrumId, " ", frequencyId);
			} else if (spectrumId === this.totalSpectra - 1) {
				// use spectrumLast
				// console.log('last spectrum specId, freqId: ', spectrumId, " ", frequencyId);
				this.spectrumWorking[frequencyId] = this.spectrumLast[frequencyId]
			} else {
				// main interpolations for all the other spectra
				newYIncrement =
					Math.abs(
						this.spectrumFirst[frequencyId] - this.spectrumLast[frequencyId]
					) / this.pointsPerSpectrum
				console.log('main newYincrement: ', newYIncrement)

				if (this.spectrumFirst[frequencyId] > this.spectrumLast[frequencyId]) {
					newY = Math.round(this.spectrumFirst[frequencyId] - newYIncrement)
					console.log('first is greater')
					this.spectrumWorking[frequencyId] = newY
				} else if (
					this.spectrumFirst[frequencyId] < this.spectrumLast[frequencyId]
				) {
					newY = Math.round(this.spectrumFirst[frequencyId] + newYIncrement)
					console.log('last is greater')
					this.spectrumWorking[frequencyId] = newY
				} else {
					// they are equal -- set to first
					this.spectrumWorking[frequencyId] = this.spectrumFirst[frequencyId]
					console.log('they are equal')
				}
				console.log('newY: ', newY)
				// this.spectrumWorking[frequencyId] =
			}
		}
		console.log('============')
		console.log('spectrumId: ', spectrumId)
		console.log('this.spectrumWorking: ')
		console.log(this.spectrumWorking)
		console.log('============')
		console.log('\n')
	}

	render() {
		let spectrumWorking = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

		console.log('spectrumWorking: ', spectrumWorking)
		return (
			<div
				id='lakka'
				style={{
					backgroundColor: 'none',
					// border: 'gray 10px solid',
					padding: '10px',
					height: '320px',
					minHeight: '320px',
					width: '1020px',
				}}
			>
				{/* TODO: get rid of colors array and just iterate the number of timeSlices */}
				{this.colors.map((point, spectrumId) => {
					console.log('*-*spectrumId: ', spectrumId)

					let repeatingSpectrum = this.bezierPoints(this.spectrumFirst)

					//                       this.totalSpectra, i vv
					// let sliceInfo = this.makeTimeSlice(spectrumId)

					// return <DrawSpectrum spectrum={spectrumWorking}  />
					return (
						<div key={`key-${spectrumId}`}>
							<svg viewBox='0 0 1000 300'>
								<path
									d={repeatingSpectrum}
									// this.totalSpectra, sliceIndex, startHue, endHue vv
									// TODO: "globalize" the number of slices, etc
									style={this.makeSpectraStyles(spectrumId, 200, 300)}
								/>
							</svg>
						</div>
					)
				})}
			</div>
		)
	}
}

// const baseStyles = {
//   pathinator: {
//     strokeWidth: '4',
//     strokeOpacity: ".9",
//     fill: "none",
//     // stroke: "hsl(350, 76%, 72%)"
//   }
// }
// const styles ={
//   strokeColor: {
//     ...baseStyles.pathinator,
//     stroke: "hsl(350, 76%, 72%)",
//   },
// }

export default Bezier05
