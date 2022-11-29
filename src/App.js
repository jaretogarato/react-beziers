import React, { useContext, useState } from 'react'
import ConsoleHelper from './ConsoleHelper'
import 'semantic-ui-css/semantic.min.css'
import { ThemeContext } from './components/themeContext'
import { Header, Footer, Error404, Home } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Osc1 from './components/Osc1'
import './styles/styles.js'

let actx = new AudioContext()
let out = actx.destination
let osc1 = actx.createOscillator()
let gain1 = actx.createGain()

osc1.connect(gain1)
gain1.connect(out)

function App() {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme_key') !== null
			? localStorage.getItem('theme_key')
			: 'light'
	)
	// const [toggleTheme, setToggleTheme] = useState(toggleThemer())

	// toggleTheme: this.toggleTheme

	// state = {
	// 	theme:
	// 		localStorage.getItem('theme_key') !== null
	// 			? localStorage.getItem('theme_key')
	// 			: 'light',
	// 	toggleTheme: this.toggleTheme,
	// }

	const changeOsc1Freq = (e) => {
		console.log(e.target.value)
	}

	const toggleTheme = () => {
		localStorage.setItem('theme_key', theme === 'light' ? 'dark' : 'light')

		setTheme(theme === 'light' ? 'dark' : 'light')

		ConsoleHelper('Current theme: ' + theme)
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<AppContent />
		</ThemeContext.Provider>
	)
}

// class App extends React.Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			theme:
// 				localStorage.getItem('theme_key') !== null
// 					? localStorage.getItem('theme_key')
// 					: 'light',
// 			toggleTheme: this.toggleTheme,
// 		}
// 	}

// 	toggleTheme = () => {
// 		localStorage.setItem(
// 			'theme_key',
// 			this.state.theme === 'light' ? 'dark' : 'light'
// 		)

// 		this.setState((state) => ({
// 			theme: state.theme === 'light' ? 'dark' : 'light',
// 		}))

// 		ConsoleHelper('Current theme: ' + this.state.theme)
// 	}

// 	changeOsc1Freq = (e) => {
// 		console.log(e.target.value)
// 	}

// 	render() {
// 		return (
// 			<ThemeContext.Provider value={this.state}>
// 				<AppContent />
// 			</ThemeContext.Provider>
// 		)
// 	}
// }

const AppContent = () => {
	const { theme } = useContext(ThemeContext)

	return (
		<div id='App' className={theme}>
			<Router>
				<Header />
				<button onClick={() => osc1.start()}>Start</button>
				<button onClick={() => osc1.stop()}>Stop</button>
				{/* <Osc1 changeFreq={this.changeOsc1Freq} /> */}
				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='/scales' element={<Scales />} />
					<Route path='/semester-exam' element={<SemesterExam />} />
					<Route path='/test-grade' element={<TestGrade />} />
					<Route path='/gpa' element={<GPACalc />} />
					<Route path='/gpa/weighted' element={<GPAWeightedCalc />} />
					<Route path='/gpa/un-weighted' element={<GPAUnWeightedCalc />} />
					<Route path='/gpa/custom' element={<GPACustomCalc />} /> */}
					<Route path='*' element={<Error404 />} />
				</Routes>
			</Router>
			<Footer />
		</div>
	)
}

export default App
