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
