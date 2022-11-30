import React, { useState } from 'react'
import ConsoleHelper from './ConsoleHelper'
import 'semantic-ui-css/semantic.min.css'
import { ThemeContext } from './components/themeContext'
import { Header, Footer, Error404, Home } from './components'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/styles.js'

function App() {
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

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			<div id='App' className={theme}>
				<Router>
					<Header />
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
