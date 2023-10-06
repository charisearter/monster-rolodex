import { Component } from 'react';
import Header from './components/header/header.component';
import CardList from './components/cardList/cardList.component';
import SearchBox from './components/searchBox/searchBox.component';
import './App.css';

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
				<Header title='Monster Rolodex' className='app-title' />

				<SearchBox
					onChangeHandler={onSearchChange}
					placeholder='Search Monsters'
					className='monsters-search-box'
				/>

				<CardList monsters={filteredMonsters} />
			</div>
		);
	}
}

export default App;
