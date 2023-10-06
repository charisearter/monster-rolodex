import { Component } from 'react';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div>
				{/* List of Monsters - not worried about filtered monsters so just named it monsters but filtered monsters array is passed as props */}
				{monsters.map((monster) => {
					return <h2 key={monster.id}>{monster.name} </h2>;
				})}
			</div>
		);
	}
}

export default CardList;
