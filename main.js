function computerPlay() {
    const choices = ['rock','paper','scissors'];
    const randomNum = Math.floor(Math.random() * 3)

    let randomSelection = choices[randomNum]

    return randomSelection

}


function player() {
    const playerChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
    
    let result;

    if (playerChoice === "") {
        result = "Don't Leave it Empty!!"
    } else if (playerChoice === "rock") {
        result = playerChoice;
    } else if (playerChoice === 'scissors') {
        result = playerChoice;
    } else if (playerChoice === "paper") {
        result = playerChoice;
    } else {
        result = "Please choose Rock, Paper or Scissors"
        
        return (
            console.log(result),
            player()
            );
    }
    return result
}



function playRound(playerSelection,computerSelection) {
    let result = ''

    if (playerSelection === "rock") {

        if (computerSelection === "paper") {
            result =`lose`

        } else if (computerSelection === "scissors") {
            result = `win`
        } else if (computerSelection === playerSelection) {
            result = `tie`
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            result =`lose`

        } else if (computerSelection === "paper") {
            result = `win`
        } else if (computerSelection === playerSelection) {
            result = `tie`
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            result =`lose`

        } else if (computerSelection === "rock") {
            result = `win`
        } else if (computerSelection === playerSelection) {
            result = `tie`
        }
    }

    return result
}

function game() {
    let playerCount = 0;
    let computerCount = 0;
    let tieCount = 0
    let computerChoice = ""

    let result = ""
    let message = ""


    
    for (let i = 1; i <= 5; i++) {
        let playerSelection = player();
        let computerSelection = computerPlay();
        computerChoice += `${computerSelection} `
        result = playRound(playerSelection,computerSelection)
        if (result === "win") {
            playerCount++
        } else if (result === "lose") {
            computerCount++
        } else if (result === 'tie') {
            tieCount++
        }
    }

    if (playerCount > computerCount) {
        message = "You Win"
    } else if (computerCount > playerCount) {
        message = 'You Lose'
    } else if (playerCount === computerCount) {
        message = "Tie!, please play again"
    }

    return {playerCount, computerCount, tieCount, computerChoice, message};
}


const playerEl = document.createElement('div')
const playerCounterEl = document.createElement('p')
const computerEl = document.createElement('div')
const computerCounterEl = document.createElement('p')

function createTree() {
    const runGame = game();
    document.body.appendChild(playerEl)
    document.body.appendChild(computerEl)

    playerCounterEl.textContent = runGame.playerCount

    playerEl.appendChild(playerCounterEl)
    
    computerCounterEl.textContent = runGame.playerCount

    computerEl.appendChild(computerCounterEl)

}

createTree();
