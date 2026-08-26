const options = ["Rock", "Paper", "Scissors"];

function getRandomComputerResult() {
  let rundNumber = Math.random() * options.length;
  rundNumber = Math.floor(rundNumber);
  return options[rundNumber];
}

function hasPlayerWonTheRound(playerChoice, computerChoice) {
  if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return true;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return true;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return true;
  } else {
    return false;
  }
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  if (userOption === computerResult) {
    return `It's a tie! Both chose ${userOption}`;
  } else if (hasPlayerWonTheRound(userOption, computerResult) === true) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}`;
  }
}

let playerScoreSpanElement = document.getElementById("player-score");
let computerScoreSpanElement = document.getElementById("computer-score");
let roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  let roundMessage = getRoundResults(userOption);
  roundResultsMsg.textContent = roundMessage;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;

  if (playerScore === 3) {
    winnerMsgElement.textContent = "Player has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  } else if (computerScore === 3) {
    winnerMsgElement.textContent = "Computer has won the game!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});
paperBtn.addEventListener("click", function () {
  showResults("Paper");
});
scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", function () {
  resetGame();
});

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.textContent = playerScore;
  computerScoreSpanElement.textContent = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.textContent = "";
  roundResultsMsg.textContent = "";
}
