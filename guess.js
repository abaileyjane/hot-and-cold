import React from 'react';

import './guess.css';

export default function Guess(props){
	

	return(
		<div className="guess">
			<form onSubmit={function(event){event.preventDefault(); 
											props.onSubmit(document.getElementById("currentguess").value)}} >
				<input id="currentguess" type="number"  placeholder="Enter Guess Here"  />
				<button type="submit" >Guess</button>
			</form>
		</div>
		)
}