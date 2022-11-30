import React, { useContext } from 'react'
// import { NavLink } from 'react-router-dom'
// import { Container } from '.'
import { ThemeContext } from './themeContext'
import { Grid } from 'semantic-ui-react'
import Fft01 from './Fft01'
import AudioSpectrumDemo from './AudioSpectrumDemo'
import Bezier04 from './Bezier04'
import Bezier05 from './Bezier05'
import WebAudioFileIn from './WebAudioFileIn'
import WebAudioApiHoc from './WebAudioApiHoc'

export default function Home() {
	const { theme } = useContext(ThemeContext)

	return (
		<div id='init-q-body' className={theme}>
			<div id='init-q-els' className={theme}>
				<Grid celled columns={2}>
					{/* <Grid.Row>
						<Grid.Column>
							<Fft01 dataName='trace0' />
						</Grid.Column>
						<Grid.Column>
							<Fft01 dataName='trace1' />
						</Grid.Column>
					</Grid.Row> */}

					<Grid.Row>
						<Grid.Column>
							{/* <WebAudioFileIn /> */}
							<WebAudioApiHoc />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<Fft01 dataName='trace2' />
						</Grid.Column>
						<Grid.Column>
							<Fft01 dataName='trace3' />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<Fft01 dataName='trace4' />
						</Grid.Column>
						<Grid.Column>
							<Fft01 dataName='trace5' />
						</Grid.Column>
					</Grid.Row>

					<Grid.Row>
						<Grid.Column>
							<AudioSpectrumDemo />
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
				</Grid>

				{/* <h2 id='init-q-head' className={theme}>
					Select Calculator Type:
				</h2>
				<Container id='calc-types'>
					<NavLink id='calc-option' className={theme} to='/semester-exam'>
						Semester Exam
					</NavLink>
					<NavLink id='calc-option' className={theme} to='/test-grade'>
						Test Grade
					</NavLink>
					<NavLink id='calc-option' className={theme} to='/gpa'>
						GPA Calc
					</NavLink>
				</Container> */}
			</div>
		</div>
	)
}
