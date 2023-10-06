import { Component } from 'react';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';

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
		// destructuring state and methods
		const { monsters, searchField } = this.state;
		const { onSearchChange } = this;

		// filter functionality
		const filteredMonsters = monsters.filter((monster) => {
			return monster.name.toLowerCase().includes(searchField);
		});

		return (
			<div className='container'>
				<h1 className='title'>Monster Rolodex</h1>

				<SearchBox onSearchChange={onSearchChange} />
				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
