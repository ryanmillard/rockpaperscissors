function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        console.log(`Tied! Both chose ${computerSelection}.`);
    } else {
        let winnerChoice = {
            'rock': 'scissors', // Rock beats scissors
            'paper': 'rock', // Paper beats rock
            'scissors': 'paper' // Scissors beats paper
        };

        if (winnerChoice[playerSelection] === computerSelection) {
            console.log(`Player wins, ${playerSelection} beats ${computerSelection}!`);
        } else {
            console.log(`Computer wins, ${computerSelection} beats ${playerSelection}!`);
        }
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt().toLowerCase();
        let computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

game();