import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon, Checkbox } from 'semantic-ui-react'

class ButtonToggle extends React.Component {
	state = {}
	handleClick = () =>
		this.setState((prevState) => ({ active: !prevState.active }))

	render() {
		const { active } = this.state

		return (
			// <Button toggle active={active} onClick={this.handleClick}>
			// 	Dark Mode
			// </Button>
			<>
				<Icon className='sun' />
				<Checkbox toggle />
				<Icon className='moon' />
			</>
		)
	}
}

export default ButtonToggle
