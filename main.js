/* **
* ! Start of Functions not in use
**/
function computerPlay() {
    const choices = ['rock','paper','scissors'];
    const randomNum = Math.floor(Math.random() * 3)

    let randomSelection = choices[randomNum]

    return randomSelection

}


function player() {
    
    
    
    let result;

    if (playerChoi === "") {
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

/* **
* ! End of Functions not in use
**/

const id = (id) => document.getElementById(id);

const btn = id('btn')
const playerEl = id('player')
const computerEl = id('computer')
const counterEl = id('gameCounter')
const winnerEl = id('winner-board')
const rock = id('rock')
const paper = id('paper')
const scissors = id('scissors')


let counter = 0
let playerScore = 0;
let computerScore = 0;


function startGame(e) {
    
    const computerSelection = computerPlay();
    const playerSelection = e.target.getAttribute('id');
    
    let round = playRound(playerSelection,computerSelection)

   if (round === 'win') {
       playerScore++
       playerEl.textContent = `Your Score: ${playerScore}`
       
   } else if (round === 'lose') {
       computerScore++
       computerEl.textContent = `Computer Score: ${computerScore}`
   }
    counter++
    counterEl.textContent = `Round ${counter}`
  
    if (counter >= 5) {
        if (playerScore > computerScore) {
            winnerEl.textContent = 'You are the Winner'
            
            return;
        } else if (computerScore > playerScore) {
            winnerEl.textContent = 'Computer Wins!'
            counter = 0;
            return;
        } else if (computerScore === playerScore) {
            counter++
            winnerEl.textContent = "So many tie's, play again"

        }
    } 

}

function resetGame() {
    counter = 0;
    playerScore = 0;
    computerScore = 0;

    winnerEl.textContent = `Who Will the Winner Be?`
    computerEl.textContent = `Computer Score: `
    playerEl.textContent = `Your Score: `
    counterEl.textContent = `Play a new game`
}

[rock,paper,scissors].forEach(item => item.addEventListener('click',startGame))
btn.addEventListener('click', resetGame)

