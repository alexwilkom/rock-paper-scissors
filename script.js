const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

function getHumanChoice() {
    while (true) {
        const choice = prompt("What do you choose?");

        if (choice === null) {
            alert("Game cancelled.")
            return "";
        }

        const choiceFormatted = choice.toLowerCase();
        if (choices.includes(choiceFormatted)) {
            return choiceFormatted
        } else {
            alert("You must choose between rock, paper or scissors.")
            continue
        }
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 5;

    console.log('The winner in 5 rounds.');


    function playRound(humanChoice, computerChoice) {
        console.log(`The computer chose ${computerChoice}.`);
        console.log(`You chose ${humanChoice}.`);

        const outcomes = {
            rock: { rock: 'It is a tie!', paper: 'You lose! Paper beats Rock.', scissors: 'You win! Rock beats Scissors.' },
            paper: { rock: 'You win! Paper beats Rock.', paper: 'It is a tie!', scissors: 'You lose! Scissors beat Paper.' },
            scissors: { rock: 'You lose! Rock beats Scissors.', paper: 'You win! Scissors beat Paper.', scissors: 'It is a tie!' }
        };

        const outcome = outcomes[humanChoice][computerChoice];

        if (outcome.includes('win')) humanScore += 1;
        if (outcome.includes('lose')) computerScore += 1;

        console.log(outcome);
    }

    for (let i = rounds; i > 0; i--) {
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Your score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
        console.log(`Rounds left: ${i - 1}`);
    }

    if (humanScore > computerScore) {
        console.log('You have won the game!');
    } else if (humanScore < computerScore) {
        console.log('You have lost the game!');
    } else {
        console.log('No one wins! But no one loses either!');
    }

}

playGame();