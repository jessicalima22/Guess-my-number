'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; //importante deixar do lado de fora como um state, não apenas como projeção no DOM
let highscore = 0; //manipular as variáveis e depois assinalar o valor ao textcontent é mais razoável do que pegar o valor do textcontent e trabalhar com ele

const checkButton = document.querySelector('.check');
let bodySelector = document.querySelector('body');
//colocar na variável o estilo e o nome bacground não funciona!!!!
let numberSelector = document.querySelector('.number');
let highscoreSelector = document.querySelector('.highscore');
let scoreSelector = document.querySelector('.score');
let guessSelector = document.querySelector('.guess');

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

checkButton.addEventListener(
  'click',
  /*event handler*/ function () {
    const guess = Number(guessSelector.value);
    //When there's no input
    if (!guess /*false value*/) {
      displayMessage('⛔ No number!');
      //When player wins
    } else if (guess === secretNumber) {
      displayMessage('😀 Correct Number!');
      bodySelector.style.backgroundColor = '#60b347';
      numberSelector.style.width = '30rem';
      numberSelector.textContent = secretNumber;

      if (score > highscore) {
        highscore = score;
        highscoreSelector.textContent = highscore;
      }

      //When player digit a diferent number
    } else if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        scoreSelector.textContent = score;
      } else {
        scoreSelector.textContent = 0;
        displayMessage('😿 You lost the game!');
      }
    }
  }
);

const againButton = document.querySelector('.again');

againButton.addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  guessSelector.value = '';
  scoreSelector.textContent = score;
  bodySelector.style.backgroundColor = '#222';
  numberSelector.style.width = '15rem';
  numberSelector.textContent = '?';
  displayMessage('Start guessing...');
});
