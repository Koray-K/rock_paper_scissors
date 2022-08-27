function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function computerPlay() {
    let randomNumber = getRandomInt(1,3);
    if (randomNumber === 1) {
        return 'Rock'
    } else if (randomNumber === 2){
        return 'Paper'
    } else {
        return 'Scissors'
    }
}


let playerCount = 0
let computerCount = 0


const rock = document.querySelector("#rock");
const rockValue = document.querySelector("#rock").value;
const paper = document.querySelector("#paper");
const paperValue = document.querySelector("#paper").value;
const scissors = document.querySelector("#scissors")
const scissorsValue = document.querySelector("#scissors").value;



function playRound(playerSelection, computerSelection, playerCount, computerCount) {
    let displayRound = document.querySelector("div.round-display");
    let playerScore = document.getElementById("display-player");
    let computerScore = document.getElementById("display-computer");

    if(playerSelection == computerSelection) {
        displayRound.innerHTML = `The player played ${playerSelection} and the computer played ${computerSelection}! It's a Tie`;
    }else if ((playerSelection === "Rock" && computerSelection === "Scissors") || (playerSelection === "Paper" && computerSelection === "Rock") || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        displayRound.innerHTML = `The player played ${playerSelection} and the computer played ${computerSelection}! The player won!`
        playerCount += 1;
    }else {
        displayRound.innerHTML = `The player played ${playerSelection} and the computer played ${computerSelection}! The computer won!`;
       computerCount += 1;
    }
    computerScore.innerHTML = `${computerCount}`
    playerScore.innerHTML = `${playerCount}`
   

    return playerCount, computerCount;
}

function game() {

    rock.addEventListener("click", () => {
        let computerInput = computerPlay();
        playRound(rockValue, computerInput, playerCount, computerCount)
    })
    
    paper.addEventListener("click", () => {
        let computerInput = computerPlay();
        playRound(paperValue, computerInput, playerCount, computerCount)
        console.log("1")
    })
    
    scissors.addEventListener("click", () => {
        let computerInput = computerPlay();
        playRound(scissorsValue, computerInput, playerCount, computerCount)   
    })

}

game()