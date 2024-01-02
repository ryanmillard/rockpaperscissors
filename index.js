let playerWins = 0;
let computerWins = 0;

function setScoreboard(scoreboardText) {
    let scoreboard = document.getElementById('scoreboard');
    scoreboard.textContent = scoreboardText;
}

function setRoundResult(resultText) {
    let roundResult = document.getElementById('round-result');
    roundResult.textContent = resultText;
}

function getComputerChoice() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        setRoundResult(`Tied! Both chose ${computerSelection}.`);
    } else {
        let winnerChoice = {
            'Rock': 'Scissors', // Rock beats scissors
            'Paper': 'Rock', // Paper beats rock
            'Scissors': 'Paper' // Scissors beats paper
        };

        if (winnerChoice[playerSelection] === computerSelection) {
            setRoundResult(`Player wins. ${playerSelection} (You) beats ${computerSelection}!`);
            playerWins++;
        } else {
            setRoundResult(`Computer wins. ${computerSelection} beats ${playerSelection} (You)!`);
            computerWins++; 
        }
    }

    if (playerWins === 5 || computerWins === 5) {
        if (playerWins === 5) {
            setScoreboard('Game over. You win!');
        } else {
            setScoreboard('Game over. You lost!');
        }

        playerWins = 0;
        computerWins = 0;
        setRoundResult('Select an option below to start');
    } else {
        setScoreboard(`Score: ${playerWins} (You) - ${computerWins} (Computer)`);
    }
}

const rockButton = document.getElementById('rock-choice');
const paperButton = document.getElementById('paper-choice');
const scissorsButton = document.getElementById('scissors-choice');

rockButton.addEventListener('click', () => {
    playRound('Rock', getComputerChoice());
});

paperButton.addEventListener('click', () => {
    playRound('Paper', getComputerChoice());
});

scissorsButton.addEventListener('click', () => {
    playRound('Scissors', getComputerChoice());
});