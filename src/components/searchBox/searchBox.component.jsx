import { Component } from 'react';

class SearchBox extends Component {
	render() {
		return (
			<div className='search-box'>
				<input
					type='text'
					className='search-box'
					placeholder='Search Monsters'
					onChange={this.props.onSearchChange}
				/>
			</div>
		);
	}
}

export default SearchBox;
