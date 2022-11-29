import React, { Component } from 'react'

class Bezier04 extends Component {
	refPoints = [
		[0, 200],
		[100, 150],
		[200, 275],
		[300, 100],
		[400, 25],
		[500, 200],
		[600, 125],
		[700, 175],
		[800, 250],
		[900, 200],
		[1000, 250],
	]

	colors = [
		250, 255, 260, 265, 270, 275, 280, 285, 290, 295, 300, 305, 310, 315, 320,
		325,
	]

	bezierPoints = (points) => {
		let cubicPoints = ''
		let cp1x, cp1y, cp2x, cp2y, ptx, pty, colWidth

		// console.log("points: ", points);

		colWidth = Math.round((points[0][0] + points[1][0]) / 2)
		// console.log('colWidth: ', colWidth);
		points.forEach((point, i) => {
			// console.log('point: ', point);
			if (i === 0) {
				cubicPoints += 'M ' + point[0] + ',' + point[1] + ' '
			} else {
				cp1x = point[0] - colWidth
				cp1y = points[i - 1][1]
				cp2x = point[0] - colWidth
				cp2y = point[1]
				ptx = point[0]
				pty = point[1]
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
		// console.log("cubicPoints::: ",cubicPoints);

		return cubicPoints
	}

	makeSpectraStyles(totalSlices, sliceIndex, startHue, endHue) {
		// console.log("totalSlices: ", totalSlices);
		// console.log("sliceIndex: ", sliceIndex);
		// console.log("startHue: ", startHue);
		// console.log("endHue: ", endHue);

		let range = Math.abs(startHue - endHue)
		// console.log("range: ", range);
		let sliceSize = range / totalSlices
		// console.log ('sliceSize: ', sliceSize);
		let currentHue = Math.round(sliceIndex * sliceSize + startHue)
		// console.log('currentHue: ', currentHue);
		let outputCss = {
			strokeWidth: '4',
			strokeOpacity: '.9',
			fill: 'none',
			stroke: 'hsl(' + currentHue + ', 76%, 72%)',
		}
		// console.log('outputCss: ', outputCss);

		return outputCss
	}

	makeTimeSlice(i, totalSlices) {
		let spectrumHeight = 300
		const refPoints = [
			[0, 200],
			[100, 150],
			[200, 275],
			[300, 100],
			[400, 25],
			[500, 200],
			[600, 125],
			[700, 175],
			[800, 250],
			[900, 200],
			[1000, 250],
		]
		let outputArray = refPoints
		let newY

		if (i > 0) {
			for (let j = 0; j < 11; j++) {
				if (outputArray[j][1] > spectrumHeight / 2) {
					newY =
						outputArray[j][1] -
						(spectrumHeight - outputArray[j][1]) / totalSlices
					outputArray[j][1] = newY
				} else if (outputArray[j][1] < spectrumHeight / 2) {
					newY =
						outputArray[j][1] +
						(spectrumHeight - outputArray[j][1]) / totalSlices
					outputArray[j][1] = newY
				}
				return outputArray
				// ^^ if equal to spectrumHeight / 2, leave it alone
			}
		}
		return outputArray

		// pointsAtLastIteration = [
		//   [0, (300-refPoints[15][1])]
		// ]

		// pointsAt
	}

	render() {
		return (
			<div
				id='chaka'
				style={{
					padding: '10px',
					height: '320px',
					minHeight: '320px',
					width: '1020px',
					position: 'relative',
				}}
			>
				{/* TODO: get rid of colors array and just iterate the number of timeSlices */}
				{this.colors.map((point, i) => {
					let spectrum = this.bezierPoints(this.refPoints)

					//                       totalSlices, i vv
					// let sliceInfo = this.makeTimeSlice(16, i);
					// console.log('sliceInfo: ', sliceInfo);

					return (
						<div key={`key-${i}`} style={{ height: '20px' }}>
							<svg viewBox='0 0 1000 300'>
								<path
									d={spectrum}
									// TODO: "globalize" the number of slices, etc
									style={this.makeSpectraStyles(16, i, 200, 300)}
								/>
							</svg>
						</div>
					)
				})}
			</div>
		)
	}
}

export default Bezier04
