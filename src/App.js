import Bezier04 from './components/Bezier04'
import Bezier05 from './components/Bezier05'
import Fft01 from './components/Fft01'
import ReactWebAudio from './components/ReactWebAudio'
import 'semantic-ui-css/semantic.min.css'
import { Grid, Image } from 'semantic-ui-react'

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
			{/* <ReactWebAudio /> */}

			<Grid columns={1}>
				{/* <Grid.Row>
					<Grid.Column>
						<h1>YOYOYO</h1>
						<div id='plot1'></div>
					</Grid.Column>
				</Grid.Row> */}

				<Grid.Row>
					<Grid.Column>
						<Fft01 />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Bezier04 />
					</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>————————————————————————————————————</Grid.Column>
				</Grid.Row>

				<Grid.Row>
					<Grid.Column>
						<Bezier05 />
					</Grid.Column>
				</Grid.Row>

				{/* <Grid.Row>
					<Grid.Column>
						<div
							style={{
								minHeight: '200px',
								position: 'relative',
							}}
						>
							<svg viewBox='0 0 200 700' style={{ maxHeight: 400 }}>
								{pathA01}
								{pathA02}
							</svg>
						</div>
					</Grid.Column>
				</Grid.Row> */}
			</Grid>

			{/* <ComeauBezier viewBoxWidth={2500} viewBoxHeight={2500} /> */}
		</div>
	)
}

export default App
