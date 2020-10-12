import React, { useState } from "react";
import "./Rules.css";

const Rules = () => {
	const [openRules, setOpenrules] = useState(false);

	const handleRules = () => {
		if (openRules) {
			document.getElementById("rules").classList.add("rules__disappear");
			setTimeout(() => setOpenrules(false), 350);
		} else setOpenrules(true);
	};

	return (
		<div className='bottom'>
			<button onClick={handleRules} className='rules__btn'>
				RULES
			</button>
			{openRules && (
				<div className='rules__container'>
					<div id='rules' className='rules'>
						<div className='rules__top'>
							<h2>RULES</h2>
							<span onClick={handleRules}>&times;</span>
						</div>
						<img src={require("../../Icons/image-rules.svg")} alt='' />
					</div>
				</div>
			)}
		</div>
	);
};

export default Rules;
