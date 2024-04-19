// gets player's selection //
function getPlayerChoice() {
    let playerSelection = prompt("Please select rock, paper, or scissors.", "");
    playerSelection = playerSelection.toLowerCase();
    return playerSelection
}


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


// computes a round of the game //
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        // console.log("LOG: You tie!");
        return "You tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || 
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper") {
        // console.log("LOG: You win!");
        return "You win!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || 
        playerSelection === "paper" && computerSelection === "scissors" || 
        playerSelection === "scissors" && computerSelection === "rock") {
        // console.log("LOG: You lose!");
        return "You lose!";
    }
}


// computes the complete game //
function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playerSelection = getPlayerChoice();
        let computerSelection = getComputerChoice();
        let round = playRound(playerSelection, computerSelection);
        console.log(`player chooses ${playerSelection}`)
        console.log(`computer chooses ${computerSelection}`)

        if (round === "You win!") {
            playerScore += 1;
            console.log(`player: ${playerScore}, computer: ${computerScore}`);
        }
        else if (round === "You lose!") {
            computerScore += 1;
            console.log(`player: ${playerScore}, computer: ${computerScore}`);
        }
        else {
            console.log(`player: ${playerScore}, computer: ${computerScore}`)
        }
    }

    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (computerScore > playerScore) {
        console.log("You lose the game!");
    } else {
        console.log("After 5 rounds it looks like you tied...whomp whomp!");
    }
}

playGame();