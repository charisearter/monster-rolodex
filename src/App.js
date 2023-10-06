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
				this.setState(() => {
					return { monsters };
				});
			});
	}

	// Search handler
	onSearchChange = (e) => {
		const searchField = e.target.value.toLowerCase();

		this.setState(() => {
			return { searchField };
		});
	};

	render() {
		// destructuring
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		// filter functionality
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className='container'>
				<h1 className='title'>Monster Rolodex</h1>
				{/* Search Field */}
				<input
					type='text'
					className='search-box'
					placeholder='Search Monsters'
					onChange={onSearchChange}
				/>
				{/* List of Monsters */}
				{filteredMonsters.map((monster) => {
					return <h2 key={monster.id}>{monster.name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
