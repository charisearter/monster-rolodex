import { Component } from 'react';

class Header extends Component {
	render() {
		const { title = 'Title goes here' } = this.props;
		return (
			<div className='app-title'>
				<h1>{title}</h1>
			</div>
		);
	}
}

export default Header;
