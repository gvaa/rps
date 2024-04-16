"use strict";

let playerChoice;
let computerChoice = "click blue";
let numberGames = 5;
let playerScore = 0;
let computerScore = 0;
let result;
let winner;
// let selectedButton = document.getElementById(playerChoice);

let getComputerChoice = function () {
    let computerChoice = Math.floor(Math.random() * 3);
    switch(computerChoice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let getGameResult = function (playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return "It's a Draw";
    }
    if (playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "scissors" && computerChoice == "paper" ||
        playerChoice == "paper" && computerChoice == "rock") {
        return "Player wins";
    } else {
        return "Computer wins";
    }
}

let createButton = function (id) {
    const gameButton = document.createElement("button");
    gameButton.setAttribute("id", id);
    gameButton.textContent = id;
    gameButton.addEventListener("click", displayResult); 
    // divButtons.appendChild(gameButton);
    return gameButton;
}

let displayResult = function (e) {
    // selectedButton.setAttribute("class", "selected");
    
    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.setAttribute("class", "unselected");
    });

    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let gameResult = getGameResult(playerChoice, computerChoice);
    let selectedButton = document.getElementById(playerChoice);
    selectedButton.setAttribute("class", "selected");
    if (playerScore == 0 && computerScore == 0) {finalDiv.textContent = "";}
    if (gameResult == "Player wins") {
        playerScore++;
    } else if (gameResult == "Computer wins") {
        computerScore++;
    }
    computerButton.textContent = computerChoice;
    resultsDiv.textContent = gameResult + `. Current score: player: ${playerScore} / computer: ${computerScore}`;
      if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            winner = "Player";
            } else {winner = "Computer"};
        finalDiv.textContent = `Game Over! ${winner} wins!`;
        playerScore = 0;
        computerScore = 0;
        winner = "";
    }
}

const myBody = document.body;
// const buttonsDiv = document.createElement("div");
// buttonsDiv.setAttribute("id", "buttons");
const buttonsDiv = document.querySelector('#buttons');
// const computerDiv = document.createElement("div");
// computerDiv.setAttribute("id", "computer");
const computerDiv = document.querySelector('#computer');
const computerButton = document.createElement("button");
computerButton.setAttribute("id", "ai");
computerButton.textContent = computerChoice;
// const resultsDiv = document.createElement("div");
// resultsDiv.setAttribute("id", "results");
const resultsDiv = document.querySelector('#results');
// const finalDiv = document.createElement("div");
// finalDiv.setAttribute("id", "final");
const finalDiv = document.querySelector('#final');

buttonsDiv.appendChild(createButton("rock"));
buttonsDiv.appendChild(createButton("paper"));
buttonsDiv.appendChild(createButton("scissors"));
// createButton("rock");
// createButton("paper");
// createButton("scissors");
computerDiv.appendChild(computerButton);
// myBody.appendChild(buttonsDiv);
// myBody.appendChild(computerDiv);
// myBody.appendChild(resultsDiv);
// myBody.appendChild(finalDiv);

// js blinker, used css instead
// const blink = document.querySelector("p");
// setInterval(function() {
//     blink.style.opacity = (blink.style.opacity == 0 ? 1 : 0);
// }, 1500);