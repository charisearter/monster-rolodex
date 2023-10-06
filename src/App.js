import { Component } from 'react';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
		};
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((monsterData) => {
				this.setState(
					() => {
						return { monsters: monsterData };
					},
					() => {
						console.log('Data: ', this.state.monsters);
					}
				);
			});
	}

	render() {
		//destructure from state
		const { monsters } = this.state;
		return (
			<div className='App'>
				<h1>Hello</h1>
				{/* Add Search component and filter*/}
				<input
					className='search-box'
					type='text'
					placeholder='Search for Monster'
					// add OnChange functionality
					onChange={(e) => {
						console.log('Searchbox: ', e.target.value);
						const searchString = e.target.value.toLowerCase();
						// filter gives new array
						const filteredMonsters = monsters.filter((monster) =>
							monster.name.toLowerCase().includes(searchString)
						);
						// set state of filtered monsters
						this.setState(() => {
							return { monsters: filteredMonsters };
						});
					}}
				/>
				{/* Map over array to display names */}
				{monsters.map((monster) => {
					return <h2 key={monster.id}> {monster.name} </h2>;
				})}
			</div>
		);
	}
}

export default App;
