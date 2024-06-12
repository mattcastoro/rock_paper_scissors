// gets player's selection //
// function getPlayerChoice() {
//     let playerSelection = prompt("Please select rock, paper, or scissors.", "");
//     playerSelection = playerSelection.toLowerCase();
//     return playerSelection
// }


// gets computer's selection //
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3) + 1;
    switch(ranNum) {
        case 1:
            return "rock"
            break;
        case 2:
            return "paper"
            break;
        case 3:
            return "scissors"
            break;
    }
}


// listens for player's selection/click //
const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

btnRock.addEventListener('click', () => {
    playRound("rock",getComputerChoice());
});
btnPaper.addEventListener('click', () => {
    playRound("paper",getComputerChoice());
});
btnScissors.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
});


// computes a round of the game //
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        updateScore("You tie!");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper") {
        updateScore("You win!") ;
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock") {
        updateScore("You lose!");
    }
}

// updates the score of the game //
let playerScore = 0;
let computerScore = 0;

function updateScore(round) {    
    if (round === "You win!") {
        playerScore += 1;
        const roundWinner = document.querySelector("a");
        roundWinner.textContent = "You win the round!";
        const currentScore = document.querySelector("p");
        currentScore.textContent = `Player's Score: ${playerScore}, Computer's Score: ${computerScore}`;
    }
    else if (round === "You lose!") {
        computerScore += 1;
        const roundWinner = document.querySelector("a");
        roundWinner.textContent = "Computer wins the round!"; 
        const currentScore = document.querySelector("p");
        currentScore.textContent = `Player's Score: ${playerScore}, Computer's Score: ${computerScore}`;
        }
    else {
        const roundWinner = document.querySelector("a");
        roundWinner.textContent = "Tie, boo who!";
        const currentScore = document.querySelector("p");
        currentScore.textContent = `Player's Score: ${playerScore}, Computer's Score: ${computerScore}`;
    }

    if (playerScore == 5) {
        const playerWins = document.querySelector("h1");
        playerWins.textContent = "Player wins the game!";
    } else if (computerScore == 5) {
        const computerWins = document.querySelector("h1");
        computerWins.textContent = "Computer wins the game!";
    }
}

// playGame();