import { Component } from 'react';

class SearchBox extends Component {
	render() {
		const { onSearchChange } = this.props;
		return (
			<div className='search-box'>
				<input
					type='text'
					className='search-box'
					placeholder='Search Monsters'
					onChange={onSearchChange}
				/>
			</div>
		);
	}
}

export default SearchBox;
