import { Component } from 'react';


class SearchBox extends Component {
	render() {
		const { onChangeHandler, placeholder, className } = this.props;
		return (
			<div className={`search-box ${className}`}>
				<input
					type='text'
					className={className}
					placeholder={placeholder}
					onChange={onChangeHandler}
				/>
			</div>
		);
	}
}

export default SearchBox;
