"use strict";

/******************** VARIÁVEIS **********************/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//TESTE

/******************** FUNCTIONS **********************/
function DecreaseScore() {
  score -= 1;

  if (score <= 0) {
    score = 0;
    GAMEOVER();
  } else {
    document.querySelector(".score").textContent = score;
  }
}

function GAMEOVER() {
  document.querySelector("body").style.backgroundColor = "red";
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = "VOCÊ PERDEU !!!!";
  document.querySelector(".number").textContent = secretNumber;

  EndGame();
}

function EndGame() {
  //remover o evento do botão para o jogador não clicar nele
  document.querySelector(".check").removeEventListener("click", clickEVENT);
}

function DisplayMessage(guess) {
  if (!guess) {
    document.querySelector(".message").textContent = "NÚMERO INVÁLIDO";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "VOCÊ ACERTOU !!!";
    Vencer();
    EndGame();
  } else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "É MAIOR";
    DecreaseScore();
  } else if (guess > secretNumber) {
    document.querySelector(".message").textContent = "É MENOR";
    DecreaseScore();
  }
}

function clickEVENT() {
  const guess = Number(document.querySelector(".guess").value);

  DisplayMessage(guess);
}

function Vencer() {
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  document.querySelector(".number").textContent = secretNumber;
  HighScore();
}

function HighScore() {
  if (score > highScore) {
    highScore = score;
    document.querySelector(".highscore").textContent = highScore;
  }
}

function Reset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";

  document.querySelector(".message").textContent = "Tente adivinhar...";
  document.querySelector(".score").textContent = "20";
  score = 20;

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".guess").value = " ";

  document.querySelector(".check").addEventListener("click", clickEVENT);
}

/******************** APP **********************/
document.querySelector(".check").addEventListener("click", clickEVENT);
document.querySelector(".again").addEventListener("click", Reset);
