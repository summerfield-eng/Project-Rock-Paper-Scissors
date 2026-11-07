let humanScore = 0;
let computerScore = 0;
let numberOfRounds = 0;

const scoreboard = document.querySelector(".scoreboard");
const btnContainer = document.querySelector(".btn-container");
const display = document.querySelector(".display");
console.log(scoreboard);

function showScore() {
  scoreboard.querySelector(".userScore").textContent = humanScore || 0;
  scoreboard.querySelector(".computerScore").textContent = computerScore || 0;
  scoreboard.querySelector(".total-games").textContent = numberOfRounds || 0;
}

btnContainer.addEventListener("click", (e) => {
  let rockBtn = e.target.closest(".rock");
  let paperBtn = e.target.closest(".paper");
  let scissorBtn = e.target.closest(".scissors");

  if (!rockBtn && !paperBtn && !scissorBtn) return;

  let userMove = e.target.textContent.toLowerCase();
  let computerChoice = getComputerChoice();

  display.querySelector(".user-move-container").textContent =
    e.target.textContent;
  display.querySelector(".computer-move-container").textContent =
    computerChoice;
  display.querySelector(".result-container").textContent = playRound(
    userMove,
    computerChoice,
  );

  showScore();
});

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 0) return "Rock";
  else if (compChoice === 1) return "Paper";
  else if (compChoice === 2) return "Scissors";
}

function playRound(humanChoice, computerMove) {
  let computerChoice = computerMove.toLowerCase();
  numberOfRounds++;
  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        return "It's a tie!";

      case "paper":
        computerScore++;
        return "You lost, Paper beats Rock";

      case "scissors":
        humanScore++;
        return "You won! Rock beats Scissors";
    }
  } else if (humanChoice === "paper") {
    switch (computerChoice) {
      case "rock":
        humanScore++;
        return "You won! Paper beats Rock";

      case "paper":
        return "It's a tie!";

      case "scissors":
        computerScore++;
        return "You lost, Scissors beats Paper";
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        computerScore++;
        return "You lost, Rock beats Scissors";

      case "paper":
        humanScore++;
        return "You won! Rock beats Scissors";

      case "scissors":
        return "It's a tie!";
    }
  }
}

// function playFiveTimes() {
//   playGame();
//   playGame();
//   playGame();
//   playGame();
//   playGame();
// }

// console.table({
//   Human: humanScore,
//   Computer: computerScore,
//   "Times played": numberOfRounds,
// });
// function getHumanChoice() {
//   let humanChoice; //getUserMove(); //Show prompt and GET user input

//   do {
//     humanChoice = getUserMove();
//   } while (
//     !(humanChoice === "rock") &&
//     !(humanChoice === "paper") &&
//     !(humanChoice === "scissors")
//   ); //IF there is user move but not rock, paper, or scissors, THEN keep showing the prompt until one of the choices is written correctly

//   function getUserMove() {
//     let promptAnswer = window
//       .prompt("Pick your move: Rock, Paper, or Scissors? Empty = Random")
//       .trim()
//       .toLowerCase();

//     if (promptAnswer === "") {
//       return getComputerChoice();
//     } // IF no user input THEN randomized the user move.

//     return promptAnswer;
//   } //Function for showing the prompt and it RETURNS the user move

//   return humanChoice;
// }
