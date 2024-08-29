const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber]
}

function getHumanChoice() {
    while (true) {
        const choice = prompt("What do you choose?");

        if (choice === null) {
            alert("Game cancelled.")
            return
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

getHumanChoice()