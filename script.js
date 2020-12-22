'use strict';


// Selecting elements
const scoreZeroEl = document.getElementById('score--0');
const scoreOneEl = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const currentScoreZero = document.getElementById('current--0');
const currentScoreOne = document.getElementById('current--1');
const playerZeroEl = document.querySelector('.player--0');
const playerOneEl = document.querySelector('.player--1');


/* Begin Helpers funcs */

// Generates a random number
const diceRandomizer = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Performs an addition on two strings
const addCurrent = function (curr, rand) {
    return Number(curr) + Number(rand);
}

const showCurrentPlayerZero = function (n) {
    currentScoreZero.textContent = n;
}

const showCurrentPlayerOne = function (n) {
    currentScoreOne.textContent = n;
}

const setToZero = function (i) {
    i.textContent = 0;
}

/* End Helpers funcs */


// Starting conditions
scoreZeroEl.textContent = 0;
scoreOneEl.textContent = 0;
diceEl.classList.add('hidden');


let turn = 0;
let playerCurrentScore = 0;
let playerScore = 0;

//while (currentScoreZero !== 100 && currentScoreOne !== 100)
// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    let randomNumber = diceRandomizer(1, 7);
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${randomNumber}.png`;
    if (randomNumber !== 1) {
        playerCurrentScore += randomNumber;
        document.getElementById(`current--${turn}`).textContent = playerCurrentScore;
    } else {
        playerCurrentScore = 0;
        document.getElementById(`current--${turn}`).textContent = playerCurrentScore;
        playerZeroEl.classList.toggle('player--active');
        playerOneEl.classList.toggle('player--active');
        turn = (turn === 0) ? 1 : 0;
    }
});

btnHold.addEventListener('click', function () {
    playerZeroEl.classList.toggle('player--active');
    playerOneEl.classList.toggle('player--active');
    playerScore += playerCurrentScore;
    playerCurrentScore = 0;
    document.getElementById(`score--${turn}`).textContent = playerScore;
    document.getElementById(`current--${turn}`).textContent = 0;
    turn = (turn === 0) ? 1 : 0;
});