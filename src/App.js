import Beziers from './components/Beziers'
import BezierCurve from './components/BezierCurve'
import ComeauBezier from './components/ComeauBezier'
import Bezier03 from './components/Bezier03'
import Bezier04 from './components/Bezier04'
import Bezier05 from './components/Bezier05'
import logo from './logo.svg'
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

	const pathCubic04 = (
		<path
			d={`
        M 25,25
        C 100,50 25,75 25,100
        C 25,125 300,150 25,175
      `}
			fill='none'
			stroke='#ff37ea'
			strokeWidth={15}
		/>
	)

	return (
		<div className='App'>
			{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header> */}

			{/* <Bezier03 /> */}
			<Bezier04 />
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
