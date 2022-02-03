function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function computerPlay() {
    let randomNumber = getRandomInt(1,3);
    if (randomNumber === 1) {
        return 'rock'
    } else if (randomNumber === 2){
        return 'paper'
    } else {
        return 'scissors'
    }
}

// One hand game play

let playerCount = 0
let computerCount = 0

function playRound(playerSelection, computerSelection) {
    let loseMessage = `You Lose! ${computerSelection} beats ${playerSelection}`
    let winMessage = `You Win! ${playerSelection} beats ${computerSelection}`
    let tieMessage = `Tie ${playerSelection} and ${computerSelection} are same ! `

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        playerCount +=1
        return winMessage;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        computerCount +=1
        return loseMessage;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerCount +=1
        return winMessage;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock'){
        computerCount +=1
        return loseMessage;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        playerCount +=1
        return winMessage;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        computerCount +=1
        return loseMessage;
    } else {
        return tieMessage;
    }
}
// Win , Lose And Tie Messages. 

computerCount = 0
playerCount = 0

function game() {
    for (let i = 0; i< 5; i++) {
        let playerSelection = prompt('Rock Paper Scissors')
        let computerSelection = computerPlay()
        console.log(playRound(playerSelection, computerSelection))
        console.log(`Your Score ${playerCount}`)
        console.log(`Computer Score ${computerCount}`)
    }
    computerCount = 0
    playerCount = 0
    confirm('Do you want to play again? ')
    console.log(game())
}

console.log(game())