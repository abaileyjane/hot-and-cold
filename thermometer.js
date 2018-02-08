import React from 'react';

import './thermometer.css';

export default function Thermometer(props){

	return (
		<div className="thermometer">
			<h1>{props.temperature}</h1>
			<h1>{props.number}</h1>
		</div>

		);
}