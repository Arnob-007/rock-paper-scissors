import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Gameplay from "./Components/Gameplay/Gameplay";
import Rules from "./Components/Footer/Rules";
import Playing from "./Components/Playing/Playing";
import "./App.css";

const App = () => {
	const [played, setPlayed] = useState("");
	const [score, setScore] = useState(0)

	return (
		<div className='app'>
			<Header score = {score} />
			{!played && <Gameplay setPlayed={setPlayed} />}
			{played && <Playing played={played} setPlayed = {setPlayed} setScore = {setScore} />}
			<Rules />
		</div>
	);
};

export default App;
