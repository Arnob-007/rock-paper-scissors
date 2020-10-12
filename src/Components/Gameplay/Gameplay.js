import React from "react";
import "./Gameplay.css";

const Gameplay = ({setPlayed}) => {

	return (
		<div className="body">
			<div className="rps__top">
				<div onClick = {() => setPlayed('paper')} className="rps paper">
					<img src={require("../../Icons/icon-paper.svg")} alt="" />
				</div>
				<div onClick = {() => setPlayed('scsr')} className="rps scsr">
					<img src={require("../../Icons/icon-scissors.svg")} alt="" />
				</div>
			</div>
			<div onClick = {() => setPlayed('rock')} className="rps rock">
				<img src={require("../../Icons/icon-rock.svg")} alt="" />
			</div>
			<img
				className="bg__triangle"
				src={require("../../Icons/bg-triangle.svg")}
				alt=""
			/>
		</div>
	);
};

export default Gameplay;
