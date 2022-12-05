import React, { useContext } from 'react'
import { ThemeContext } from './themeContext'

export default function Footer() {
	const { theme } = useContext(ThemeContext)

	return (
		<footer className={theme}>
			{/* Night mode functionality thanks to Ismael Tovar: https://github.com/ismaeltovar */}
			<h2 id='author-txt' className={theme}>
				Talking About{' '}
				<a className={theme} href='http://www.jaredgallardo.com'>
					AmberWord
				</a>
			</h2>
			<h3 id='license-txt' className={theme}>
				Placeholder{' '}
				<a className={theme} href='#'>
					link
				</a>
			</h3>
			<p id='notice-txt' className={theme}>
				NOTICE: placeholder notice
			</p>
		</footer>
	)
}
