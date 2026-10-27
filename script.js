let humanScore = 0;
let computerSCore = 0;
let numberOfRounds = 0;

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);

  if (compChoice === 0) return "rock";
  else if (compChoice === 1) return "paper";
  else if (compChoice === 2) return "scissors";
}

function getHumanChoice() {
  let humanChoice; //getUserMove(); //Show prompt and GET user input

  do {
    humanChoice = getUserMove();
  } while (
    !(humanChoice === "rock") &&
    !(humanChoice === "paper") &&
    !(humanChoice === "scissors")
  ); //IF there is user move but not rock, paper, or scissors, THEN keep showing the prompt until one of the choices is written correctly

  function getUserMove() {
    let promptAnswer = window
      .prompt("Pick your move: Rock, Paper, or Scissors? Empty = Random")
      .trim()
      .toLowerCase();

    if (promptAnswer === "") {
      return getComputerChoice();
    } // IF no user input THEN randomized the user move.

    return promptAnswer;
  } //Function for showing the prompt and it RETURNS the user move

  return humanChoice;
}

function playRound(humanChoice, computerChoice) {
  numberOfRounds++;
  if (humanChoice === "rock") {
    switch (computerChoice) {
      case "rock":
        return "It's a tie!";

      case "paper":
        computerSCore++;
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
        computerSCore++;
        return "You lost, Scissors beats Paper";
    }
  } else if (humanChoice === "scissors") {
    switch (computerChoice) {
      case "rock":
        computerSCore++;
        return "You lost, Rock beats Scissors";

      case "paper":
        humanScore++;
        return "You won! Rock beats Scissors";

      case "scissors":
        return "It's a tie!";
    }
  }
}

function playGame() {
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
  console.log(playRound(getHumanChoice(), getComputerChoice()));
}

playGame();

console.table({
  Human: humanScore,
  Computer: computerSCore,
  "Times played": numberOfRounds,
});
