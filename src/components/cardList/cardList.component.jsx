import { Component } from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

class CardList extends Component {
	render() {
		const { monsters } = this.props;
		return (
			<div className='card-list'>
				{/* List of Monsters - not worried about filtered monsters so just named it monsters but filtered monsters array is passed as props */}
				{monsters.map((monster) => {
					return <Card monster={monster} />;
				})}
			</div>
		);
	}
}

export default CardList;
