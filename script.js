'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}

const displayScore = (score) => {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value); //every value from prompt will be string

    if (!guess) { // When there's no input
        displayMessage('⛔ No number!');
    } else if (guess === secretNumber) { //When player wins the game
        displayMessage('🎉Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    } else if (guess !== secretNumber) { //When guess is worng
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
            score -= 1;
            displayScore(score);
        } else {
            displayMessage('💥 You  lost the game!');
            displayScore(0);
        }
    }
})

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;

    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    displayScore(score);
    displayMessage('Start guessing...');
})