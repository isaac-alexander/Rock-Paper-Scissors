function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"]; //["Rock", "Paper", "Scissors"]
    const randomIndex = Math.floor(Math.random() * options.length); //0 1 or 2
    return options[randomIndex]; // 0 = "Rock", 1 = "Paper", 2 = "Scissors"
}

function hasPlayerWonTheRound(player, computer) {
    return (
        (player === "Rock" && computer === "Scissors") || //true
        (player === "Scissors" && computer === "Paper") || // false
        (player === "Paper" && computer === "Rock") // false
    );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult(); // 2 = "Scissors"

    if (hasPlayerWonTheRound(userOption, computerResult)) {
        playerScore++; // 0 + 1= 1, 1 + 1= 2, 2 + 1 = 3
        return `Player wins! ${userOption} beats ${computerResult}`; //Player wins! Rock beats Scissors, Player wins! Rock beats Scissors, Player wins! Rock beats Scissors
    } else if (computerResult === userOption) {
        return `It's a tie! Both chose ${userOption}`;
    } else {
        computerScore++;
        return `Computer wins! ${computerResult} beats ${userOption}`;
    }
}

const playerScoreSpanElement = document.getElementById("player-score"); //  1, 2,  3
const computerScoreSpanElement = document.getElementById("computer-score"); // 0, 0, 0
const roundResultsMsg = document.getElementById("results-msg"); // "Player wins! Rock beats Scissors"
const winnerMsgElement = document.getElementById("winner-msg"); // "Player has won the game!"
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
    roundResultsMsg.innerText = getRoundResults(userOption); //"Player wins! Rock beats Scissors"
    computerScoreSpanElement.innerText = computerScore; //0, 0, 0
    playerScoreSpanElement.innerText = playerScore; // 1, 2, 3

    if (playerScore === 3 || computerScore === 3) {
        winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"
            } has won the game!`; // Player has won the game!

        resetGameBtn.style.display = "block";
        optionsContainer.style.display = "none";
    }

};
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreSpanElement.innerText = playerScore;
    computerScoreSpanElement.innerText = computerScore;
    resetGameBtn.style.display = "none";
    optionsContainer.style.display = "block";
    roundResultsMsg.innerText = "";
    winnerMsgElement.innerText = "";
};

resetGameBtn.addEventListener("click", resetGame);v

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