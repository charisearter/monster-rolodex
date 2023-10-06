import { Component } from 'react';

class SearchBox extends Component {
	render() {
		const { onChangeHandler, placeholder } = this.props;
		return (
			<div className='search-box'>
				<input
					type='text'
					className='search-box'
					placeholder={placeholder}
					onChange={onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
