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
				<h1 className='title'>Monster Rolodex</h1>
				{/* Search Field */}

				{/* List of Monsters */}
				{monsters.map((monster) => {
					return <h2 key={monster.id}>{monster.name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
