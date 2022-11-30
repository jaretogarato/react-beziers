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
	const [osc1Freq, setOsc1Freq] = useState(osc1.frequency.value)
	const [theme, setTheme] = useState(
		localStorage.getItem('theme_key') !== null
			? localStorage.getItem('theme_key')
			: 'light'
	)

	const toggleTheme = () => {
		localStorage.setItem('theme_key', theme === 'light' ? 'dark' : 'light')
		setTheme(theme === 'light' ? 'dark' : 'light')
		ConsoleHelper('Current theme: ' + theme)
	}

	const changeOsc1Freq = (e) => {
		let { value } = e.target
		setOsc1Freq(value)
		osc1.frequency.value = value
	}

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div id='App' className={theme}>
				<Router>
					<Header />
					<button onClick={() => osc1.start()}>Start</button>
					<button onClick={() => osc1.stop()}>Stop</button>
					<Osc1 changeFreq={changeOsc1Freq} freq={osc1Freq} />
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='*' element={<Error404 />} />
					</Routes>
				</Router>
				<Footer />
			</div>
		</ThemeContext.Provider>
	)
}

export default App
