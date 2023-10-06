import { Component } from 'react';

class Header extends Component {
	render() {
		const {
			title = 'Title goes here',
			className = 'header-class',
		} = this.props;
		return (
			<div className={className}>
				<h1 className='title is-1'>{title}</h1>
			</div>
		);
	}
}

export default Header;
