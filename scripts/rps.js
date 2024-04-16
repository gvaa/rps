"use strict";

let playerChoice;
let computerChoice;
let numberGames = 5;
let playerScore = 0;
let computerScore = 0;
let result;
let winner;

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
    } else {;
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
    let playerChoice = e.target.id;
    let computerChoice = getComputerChoice();
    let gameResult = getGameResult(playerChoice, computerChoice);
    if (playerScore == 0 && computerScore == 0) {finalDiv.textContent = "";}
    if (gameResult == "Player wins") {
        playerScore++;
    } else if (gameResult == "Computer wins") {
        computerScore++;
    }
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

const buttonsDiv = document.createElement("div");
buttonsDiv.setAttribute("id", "buttons");
const resultsDiv = document.createElement("div");
resultsDiv.setAttribute("id", "results");
const finalDiv = document.createElement("div");
finalDiv.setAttribute("id", "final");

buttonsDiv.appendChild(createButton("rock"));
buttonsDiv.appendChild(createButton("paper"));
buttonsDiv.appendChild(createButton("scissors"));
// createButton("rock");
// createButton("paper");
// createButton("scissors");
myBody.appendChild(buttonsDiv);
myBody.appendChild(resultsDiv);
myBody.appendChild(finalDiv);


// some old code preserved for myself
//
// function getPlayerChoice() {
//     while (playerChoice != "rock" &&
//         playerChoice != "scissors" &&
//         playerChoice != "paper") {
//             playerChoice = prompt("Please enter Rock, Paper or Scissors: ").toLowerCase();
//         } 
//     return playerChoice;
// }
//
// function playGame(numberGames) {
//     for (let i = 0; i < numberGames; i++) {
//         console.log(`Round Number ${i+1}`)
//         computerChoice = getComputerChoice();
//         playerChoice = getPlayerChoice();
//         result = playRound(playerChoice, computerChoice);
//         console.log(`You said ${playerChoice}, computer said ${computerChoice}: ${result}!`);
//         if (result == "Player wins") {
//             playerScore++;
//         }
//         if (result == "Computer wins") {
//             computerScore++;
//         }
//         playerChoice = null;
//       }
//       if (computerScore > playerScore) {
//         return `Computer wins ${computerScore} / ${playerScore}!`;
//       }
//       if (playerScore > computerScore) {
//         return `Player wins ${playerScore} / ${computerScore}!`;
//       } else {
//         return `It's a ${playerScore} / ${computerScore} draw!`; // nb! only back tick ` works for inserting variable into string...
//       }
// }
//
// console.log(`Rounds to be played: ${numberGames}`);
// console.log(playGame(numberGames));