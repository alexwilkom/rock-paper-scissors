const button = document.querySelector("button");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    const choice = prompt("Rock, paper or scissors?");

    if (choice === null) {
        alert("Game cancelled.")
        return null;
    }
    const choiceFormatted = choice.toLowerCase();
    if (choices.includes(choiceFormatted)) {
        return choiceFormatted
    } else {
        alert("You must choose between rock, paper or scissors.")
        getHumanChoice();
    }
}

function isHumanWinner(humanChoice, computerChoice) {
    if (
        (humanChoice === 'rock' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'rock')
    ) {
        return false;
    }
    return true;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    console.log('\nThe winner in 5 rounds.\n');

    function playRound(humanChoice, computerChoice) {
        console.log(`\nThe computer chose ${computerChoice}.`);
        console.log(`You chose ${humanChoice}.`);

        if (humanChoice === computerChoice) {
            console.log(`It's a tie!\n`);
            return
        }

        if (isHumanWinner(humanChoice, computerChoice)) {
            console.log(`You win; ${humanChoice} beats ${computerChoice}.\n`);
            humanScore++;
            return
        } else {
            console.log(`You lose; ${computerChoice} beats ${humanChoice}.\n`);
            computerScore++;
            return
        }
    }

    for (let i = rounds; i > 0; i--) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        if (humanChoice) {
            playRound(humanChoice, computerChoice)
            console.log(`Your score: ${humanScore}`);
            console.log(`Computer score: ${computerScore}`);
            console.log(`Rounds left: ${i - 1}`);
        } else {
            console.log(`Cancelled`);
            return;
        }
    }

    if (humanScore > computerScore) {
        console.log('You have won the game!');
    } else if (humanScore < computerScore) {
        console.log('You have lost the game!');
    } else {
        console.log('No one wins! But no one loses either!');
    }

}

button.addEventListener('click', playGame);