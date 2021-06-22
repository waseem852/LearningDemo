"use strict";

// Selecting Elements
// const score1Element = document.querySelector("#score--0");
const score0Element = document.getElementById("score--0");
const score1Element = document.getElementById("score--1");
const diceElement = document.querySelector(".dice");
const rollDiceButton = document.querySelector(".btn--roll");
const holdDiceButton = document.querySelector(".btn--hold");
const newGameButton = document.querySelector(".btn--new");
const current0Element = document.getElementById("current--0");
const current1Element = document.getElementById("current--1");
const player0Element = document.querySelector(".player--0");
const player1Element = document.querySelector(".player--1");

const winningPoints = 100;
let scores, activePlayer, currentScore, playing;

const init = function () {
	scores = [0, 0];
	activePlayer = 0;
	currentScore = 0;
	playing = true;

	score0Element.textContent = 0;
	score1Element.textContent = 0;
	current0Element.textContent = 0;
	current1Element.textContent = 0;

	player0Element.classList.remove("player--winner");
	player1Element.classList.remove("player--winner");

	player0Element.classList.add("player--active");
	player1Element.classList.remove("player--active");

	diceElement.classList.add("hidden");
};

init();

const switchPlayer = function () {
	currentScore = 0;
	document.getElementById(`current--${activePlayer}`).textContent = currentScore;
	activePlayer = activePlayer === 0 ? 1 : 0;

	player0Element.classList.toggle("player--active");
	player1Element.classList.toggle("player--active");
};

rollDiceButton.addEventListener("click", function () {
	if (playing) {
		const dice = Math.trunc(Math.random() * 6) + 1;

		diceElement.classList.remove("hidden");
		diceElement.src = `dice-${dice}.png`;

		if (dice != 1) {
			currentScore += dice;
			document.getElementById(`current--${activePlayer}`).textContent = currentScore;
			// current0Element.textContent = currentScore;
		} else {
			switchPlayer();
		}
	}
});

holdDiceButton.addEventListener("click", function () {
	if (playing) {
		scores[activePlayer] += currentScore;
		document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

		if (scores[activePlayer] >= winningPoints) {
			playing = false;

			document.querySelector(`.player--${activePlayer}`).classList.add("player--winner");
			document.querySelector(`.player--${activePlayer}`).classList.remove("player--active");

			diceElement.classList.add("hidden");
		} else {
			switchPlayer();
		}
	}
});

newGameButton.addEventListener("click", init);
