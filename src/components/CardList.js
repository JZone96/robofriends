import React from 'react';
import Card from './Card.js'

//creates an array of cards
const CardList = ({robots}) => {//PROPS in this case is ROBOTS, that points to filteredRobot Function
	return (
		<div>
			{
				robots.map((user,i)=>{
					return(
						<Card
							key = {robots[i].id}//every single component must have a key
							id = {robots[i].id}
							username = {robots[i].username}
							email = {robots[i].email}
							/>);
				})
			}
		</div>
		)
}

export default CardList;