import React from 'react';

import './history.css';

export default function History(props){
	return(
		<div className="history">
			<h3>Guess: {props.guess}</h3>
			<h3> Previous Guesses: {props.prevGuesses}</h3>
		</div>
		)
}