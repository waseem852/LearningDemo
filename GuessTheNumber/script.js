"use strict";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number! π";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 40;
// document.querySelector(".guess").value = 10;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = (message) => {
	document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
	const guess = Number(document.querySelector(".guess").value);

	//No Number
	if (!guess) {
		// document.querySelector(".message").textContent = `No Number! β`;
		displayMessage(`No Number! β`);

		//Correct Number
	} else if (guess === secretNumber) {
		// document.querySelector(".message").textContent = `Correct Number! π`;
		displayMessage(`Correct Number! π`);

		document.querySelector(".number").textContent = secretNumber;

		document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "30rem";

		if (score > highScore) {
			highScore = score;
			document.querySelector(".highscore").textContent = highScore;
		}

		//Guess is Wrong
	} else if (guess !== secretNumber) {
		if (score > 1) {
			// document.querySelector(".message").textContent = guess > secretNumber ? `Too high! π` : `Too Low! π`;
			displayMessage(guess > secretNumber ? `Too high! π` : `Too Low! π`);
			score--;
			document.querySelector(".score").textContent = score;
		} else {
			// document.querySelector(".message").textContent = `π₯You lost the Gameπ₯`;
			displayMessage(`π₯You lost the Gameπ₯`);
		}
	}
	// //Guess is high
	// else if (guess > secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = `Too high! π`;
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".message").textContent = `π₯You lost the Gameπ₯`;
	// 	}

	// 	//Guess is low
	// } else if (guess < secretNumber) {
	// 	if (score > 1) {
	// 		document.querySelector(".message").textContent = `Too Low! π`;
	// 		score--;
	// 		document.querySelector(".score").textContent = score;
	// 	} else {
	// 		document.querySelector(".message").textContent = "π₯You lost the Gameπ₯";
	// 	}
	// }
});

document.querySelector(".again").addEventListener("click", function () {
	secretNumber = Math.trunc(Math.random() * 20) + 1;
	score = 20;
	document.querySelector(".score").textContent = score;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".guess").value = "";

	document.querySelector("body").style.backgroundColor = "#222";
	document.querySelector(".number").style.width = "15rem";
	// document.querySelector(".message").textContent = `Start guessing...`;
	displayMessage(`Start guessing...`);
});
