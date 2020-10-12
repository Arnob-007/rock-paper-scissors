import React from "react";
import "./Header.css";

const Header = ({ score }) => {
	return (
		<div className='header'>
			<div className='title'>
				<p className='title__part'>ROCK</p>
				<p className='title__part'>PAPER</p>
				<p className='title__part'>SCISSORS</p>
			</div>

			<div className='scorecard'>
				<p className='score__title'>SCORE</p>
				<p className='score'>{score}</p>
			</div>
		</div>
	);
};

export default Header;
