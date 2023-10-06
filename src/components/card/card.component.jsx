import { Component } from 'react';

class Card extends Component {
	render() {
		const { name, email, id } = this.props.monster;
		return (
			<div className='card' key={id}>
				<div className='card-image'>
					<img
						src={`https://robohash.org/${id}?set=set2&size=180x180`}
						alt={`monster ${name}`}
					/>
				</div>
				<div className='card-content'>
					<div className='content'>
						<h2> {name} </h2>
						<p> {email} </p>
					</div>
				</div>
			</div>
		);
	}
}

export default Card;
