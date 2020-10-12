import React, { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import "./Playing.css";

const Playing = ({ played, setPlayed, setScore }) => {
	const [housePlayed, setHousePlayed] = useState("");
	const [result, setResult] = useState("");

	const playAgain = () => {
		setHousePlayed("");
		setPlayed("");
		setResult("");
	};

	useEffect(() => {
		const housePlay = () => {
			const randomnumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
			switch (randomnumber) {
				case 1:
					setHousePlayed("paper");
					break;
				case 2:
					setHousePlayed("scsr");
					break;
				case 3:
					setHousePlayed("rock");
					break;
				default:
					setHousePlayed("");
			}
		};
		setTimeout(() => housePlay(), 3000);
	}, []);

	useEffect(() => {
		if (housePlayed === "") return;
		if (played === housePlayed) {
			setResult("TIED");
		} else if (played === "paper") {
			housePlayed === "scsr" ? setResult("LOSE") : setResult("WIN");
		} else if (played === "scsr") {
			housePlayed === "rock" ? setResult("LOSE") : setResult("WIN");
		} else if (played === "rock") {
			housePlayed === "paper" ? setResult("LOSE") : setResult("WIN");
		}
	}, [housePlayed, played]);

	useEffect(() => {
		if (result === "WIN") setScore((prevScore) => prevScore + 1);
		else if (result === "LOSE") setScore((prevScore) => prevScore - 1);
	}, [result, setScore]);

	return (
		<div className={`playing ${housePlayed && "isresult"}`}>
			<div className='played'>
				<h3>You Picked</h3>
				{played === "paper" && (
					<div className='rps paper'>
						<img src={require("../../Icons/icon-paper.svg")} alt='' />
					</div>
				)}
				{played === "scsr" && (
					<div className='rps scsr'>
						<img src={require("../../Icons/icon-scissors.svg")} alt='' />
					</div>
				)}
				{played === "rock" && (
					<div className='rps rock'>
						<img src={require("../../Icons/icon-rock.svg")} alt='' />
					</div>
				)}
			</div>
			{housePlayed && (
				<div className='result desktop'>
					<h1>
						YOU{" "}
						<span
							className={`${result === "WIN" && "win__color"} ${
								result === "LOSE" && "lose__color"
							}`}
						>
							{result}
						</span>
					</h1>
					<button onClick={playAgain} className='play__again'>
						PLAY AGAIN
					</button>
				</div>
			)}
			<div className='played'>
				<h3>The House Picked</h3>
				{housePlayed === "" && (
					<div className='rps thinking'>
						<Loading />
					</div>
				)}
				{housePlayed === "paper" && (
					<div className='rps paper'>
						<img src={require("../../Icons/icon-paper.svg")} alt='' />
					</div>
				)}
				{housePlayed === "scsr" && (
					<div className='rps scsr'>
						<img src={require("../../Icons/icon-scissors.svg")} alt='' />
					</div>
				)}
				{housePlayed === "rock" && (
					<div className='rps rock'>
						<img src={require("../../Icons/icon-rock.svg")} alt='' />
					</div>
				)}
			</div>
			{housePlayed && (
				<div className='result mobile'>
					<h1>
						YOU{" "}
						<span
							className={`${result === "WIN" && "win__color"} ${
								result === "LOSE" && "lose__color"
							}`}
						>
							{result}
						</span>
					</h1>
					<button onClick={playAgain} className='play__again'>
						PLAY AGAIN
					</button>
				</div>
			)}
		</div>
	);
};

export default Playing;
