import { Component } from 'react';

class App extends Component {
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchField: '',
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((monsters) => {
				this.setState(
					() => {
						return { monsters };
					},
					() => {
						console.log(this.state);
					}
				);
			});
	}

	render() {
		// destructuring from state
		const { monsters, searchField } = this.state;
		return (
			<div className='container'>
				<h1>Monster Rolodex</h1>
			</div>
		);
	}
}

export default App;
