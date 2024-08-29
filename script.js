const choices = ["Rock", "Paper", "Scissors"];

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

        const choiceFormatted = formatString(choice)
        if (choices.includes(choiceFormatted)) {
            return choiceFormatted
        } else {
            alert("You must choose between rock, paper or scissors.")
            continue
        }
    }
}

// helper function to capitalize string
function formatString(str) {
    return (str[0].toUpperCase() + str.substring(1).toLowerCase());
}