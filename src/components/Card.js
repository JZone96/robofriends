import React from 'react';

//creates a card
const Card = ({username, email, id}) =>{//takes PROPS, in this case they are username, email, id
	return (
		<div>
			<img src ={`https://robohash.org/${id}?size=200x200`}/>
			<div>
				<h2>{username}</h2>
				<h2>{email}</h2>
			</div>
		</div>

		);
}

export default Card;