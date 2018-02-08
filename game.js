import React from 'react';

import Thermometer from './thermometer';
import Guess from './guess';
import History from './history';
import Counter from './counter';



export default class Game extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			temp:"Make your guess!",
			count:"",
			prevGuesses:"",
			guess:"0",
			number: Math.floor(Math.random() * 100)

		}
	}

	

	setTemp(guess){
		if (Math.abs(this.state.number-guess)===0){
			return("You guessed the right number!")
		}
		else if (Math.abs(this.state.number-guess)<10){
			return("hot")
		}
		else {
			return("cold")
		}
	}

	registerGuess(guess){
				this.setState({
					guess:guess,
					prevGuesses: (this.prevGuesses += guess),
					temp: this.setTemp(guess)
			});
		}
	render(){
	
		return (
			<div className="game">
				<Thermometer temperature={this.state.temp} number={this.state.number}/>
				<Guess onSubmit={guess=>this.registerGuess(guess)}/>
				<Counter count={this.state.count}/>
				<History guess={this.state.guess} prevGuesses={this.state.prevGuesses}/>
			</div>
			)
	}
}