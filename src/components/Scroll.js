import React from 'react';
import './Scroll.css'

const Scroll = (props) =>{
	return (
		<div style = {{ overflowY:'scroll', height:'800px', border: '10px solid transparent'}} className = "example">
			{props.children}
		</div>
		);
}

export default Scroll;