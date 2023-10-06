import { Component, Fragment } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {
	render() {
		const { onChangeHandler, placeholder } = this.props;
		return (
			<Fragment>
				<input
					type='text'
					className='search-box'
					placeholder={placeholder}
					onChange={onChangeHandler}
				/>
			</Fragment>
		);
	}
}

export default SearchBox;
