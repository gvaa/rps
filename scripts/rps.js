"use strict";

let playerChoice;
let computerChoice;
let numberGames = 5;
let playerScore = 0;
let computerScore = 0;
let result;

function getComputerChoice() {
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

function getPlayerChoice() {
    while (playerChoice != "rock" &&
        playerChoice != "scissors" &&
        playerChoice != "paper") {
            playerChoice = prompt("Please enter Rock, Paper or Scissors: ").toLowerCase();
        } 
    return playerChoice;
}

function playRound(playerChoice, computerChoice) {
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

function playGame(numberGames) {
    for (let i = 0; i < numberGames; i++) {
        console.log(`Round Number ${i+1}`)
        computerChoice = getComputerChoice();
        playerChoice = getPlayerChoice();
        result = playRound(playerChoice, computerChoice);
        console.log(`You said ${playerChoice}, computer said ${computerChoice}: ${result}!`);
        if (result == "Player wins") {
            playerScore++;
        }
        if (result == "Computer wins") {
            computerScore++;
        }
        playerChoice = null;
      }
      if (computerScore > playerScore) {
        return `Computer wins ${computerScore} / ${playerScore}!`;
      }
      if (playerScore > computerScore) {
        return `Player wins ${playerScore} / ${computerScore}!`;
      } else {
        return `It's a ${playerScore} / ${computerScore} draw!`; // nb! only back tick ` works for inserting variable into string...
      }
}

console.log(`Rounds to be played: ${numberGames}`);
console.log(playGame(numberGames));

