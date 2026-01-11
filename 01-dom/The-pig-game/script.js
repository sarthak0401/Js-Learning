"use strict";

const score0EL = document.querySelector("#score--0");
const score1EL = document.getElementById("score--1");
const diceEL = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const current0EL = document.getElementById("current--0");
const current1EL = document.getElementById("current--1");

const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");

// Defining global variables
let currentScore, activePlayer, score, playing;

//Initial setting
const initialSetting = function () {
  // Current score be zero
  currentScore = 0;

  // Player 0 is active initially
  activePlayer = 0;

  // Final scores of the players
  score = [0, 0];

  // Defining a state variable for making the buttons not working when some of the player won!
  playing = true;
  // We'll run all the logic of button click only when playing is true

  // Starting condition
  score0EL.textContent = 0;
  score1EL.textContent = 0;

  current0EL.textContent = 0;
  current1EL.textContent = 0;

  player0EL.classList.remove("player--winner");
  player1EL.classList.remove("player--winner");
  player0EL.classList.add("player--active");
  player1EL.classList.remove("player--active");
};

// calling the intial setting function for initial settings
initialSetting();

const switchPlayer = function () {
  // switch to the next player
  currentScore = 0;

  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;

  // THis will remove the background of the player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove("player--active");

  // Here we are changing the players
  activePlayer = activePlayer === 0 ? 1 : 0;

  // THis will put the background on the active player
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add("player--active");
};

diceEL.classList.add("hidden");

// Roll dice button's eventListener
btnRoll.addEventListener("click", function () {
  if (playing) {
    diceEL.classList.remove("hidden");

    // Random diceNo
    const dice = Math.trunc(Math.random() * 6 + 1);
    // random no. between 1 to 6

    // Displaying the dice
    diceEL.src = `dice-${dice}.png`;

    // Check if random number = 1, if true switch to the next player, else add to the current score
    if (dice !== 1) {
      // keep adding the score to the current player's score
      currentScore += dice;

      // dynamically selecting the player's score tag
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Adding eventHandler to the hold button
btnHold.addEventListener("click", function () {
  if (playing) {
    score[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      score[activePlayer];

    if (score[activePlayer] >= 100) {
      playing = false;

      diceEL.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      switchPlayer();
    }
  }
});

// Adding the reset button's logic
btnNew.addEventListener("click", initialSetting);

// Remember we are not calling the function here(in btnNew) using (), that function will be called automatically by the js, when the eventhandler is called
