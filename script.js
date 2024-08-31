
const startContainer = document.querySelector("#start");
const restartContainer = document.querySelector("#restart");
const restartGameBtn = document.querySelector(".restart-game");
const info = document.querySelector("#info");
const choicesContainer = document.querySelector("#choices");
const btnChoices = document.querySelectorAll(".btn-choice");
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const computerChoiceText = document.querySelector("#computer-choice");
const roundText = document.querySelector(".round");

let playerScore = 0;
let computerScore = 0;
let round = 1;

function playRound(selection) {
    const playerChoice = selection.target.textContent;
    const computerChoice = getComputerChoice()
    updateUI(playerChoice, computerChoice);
    determineFinalWinner();
}

function updateUI(playerChoice, computerChoice) {
    computerChoiceText.innerText = `The CPU chose ${computerChoice}`;

    if (playerChoice === computerChoice) {
        info.innerText = `It's a tie.`;
    } else if (isPlayerWinner(playerChoice, computerChoice)) {
        info.innerText = `You win. ${playerChoice} beats ${computerChoice}.`;
        playerScore++;
        playerScoreText.innerText = `${playerScore}`;
    } else {
        info.innerText = `You lose. ${computerChoice} beats ${playerChoice}.`;
        computerScore++;
        computerScoreText.innerText = `${computerScore}`;
    }
    round++;
    roundText.innerText = `Round ${round} of 5`;
}

function getComputerChoice() {
    const options = Array.from(btnChoices).map(choice => choice.innerText);
    const randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber]
}

function isPlayerWinner(playerChoice, computerChoice) {
    return (
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    );
}

function determineFinalWinner() {
    if (round <= 5) {
        return;
    }
    if (playerScore > computerScore) {
        info.innerText = 'You have won the game!';
    } else if (playerScore < computerScore) {
        info.innerText = 'You have lost the game!';
    } else {
        info.innerText = 'There is a tie!';
    }
    computerChoiceText.innerText = "";
    roundText.innerText = "";
    choicesContainer.style.display = "none";
}

function reset() {
    choicesContainer.style.display = "block";
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playerScoreText.innerText = "0";
    computerScoreText.innerText = "0";
    info.innerText = "";
    roundText.innerText = "Round 1 of 5";
}

btnChoices.forEach((choice) => {
    choice.addEventListener("click", playRound);
});

restartGameBtn.addEventListener("click", reset);