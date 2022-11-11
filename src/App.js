import Bezier04 from './components/Bezier04'
import Bezier05 from './components/Bezier05'
import Fft01 from './components/Fft01'

import './App.css'

function App() {
	const startPoint = [25, 25]
	const controlPoint = [300, 275]
	const endPoint = [25, 325]

	const startPointA02 = [25, 325]
	const controlPointA02 = [300, 575]
	const endPointA02 = [25, 650]

	const pathA01 = (
		<path
			d={`
        M ${startPoint}
        Q ${controlPoint} ${endPoint}
      `}
			fill='none'
			stroke='hotpink'
			strokeWidth={5}
		/>
	)

	const pathA02 = (
		<path
			d={`
        M ${startPointA02}
        Q ${controlPointA02} ${endPointA02}
      `}
			fill='none'
			stroke='hotpink'
			strokeWidth={5}
		/>
	)

	return (
		<div className='App'>
			<div id='plot1'></div>
			<Fft01 />

			<Bezier04 />
			<h3>&nbsp;</h3>
			<Bezier05 />

			<svg viewBox='0 0 200 700' style={{ maxHeight: 400 }}>
				{pathA01}
				{pathA02}
			</svg>

			{/* <ComeauBezier viewBoxWidth={2500} viewBoxHeight={2500} /> */}
		</div>
	)
}

export default App
