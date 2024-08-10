const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

const column1 = document.querySelector(".column1")
const column2 = document.querySelector(".column2")
const column3 = document.querySelector(".column3")

const playerScore = document.querySelector(".player-score")
const computerScore = document.querySelector(".computer-score")
const movesLeft = document.querySelector(".moves-left")

const columns = document.querySelectorAll("[data-col]")


let playerGlobalScore = 0
let computerGlobalScore = 0

let playerCurrentScore = 0
let computerCurrentScore = 0

let currentRound = 5

const choices = ["👊", "✋", "✌️"]


rock.addEventListener("click", () => gameItteration(0))
paper.addEventListener("click", () => gameItteration(1))
scissors.addEventListener("click", () => gameItteration(2))


function gameItteration(userInput) {
    console.log(columns)
    const computerChoice = Math.floor(Math.random() * choices.length)
    if(userInput === computerChoice) {
        domUpdater(choices[userInput],"column1");
        domUpdater(choices[computerChoice],"column2");
        domUpdater("Draw","column3")
    } else if (userInput === 0 && computerChoice === 2 || userInput === 1 && computerChoice === 0 || userInput === 2 && computerChoice === 1) {
        domUpdater(choices[userInput],"column1");
        domUpdater(choices[computerChoice],"column2");
        domUpdater("Player","column3")
        playerCurrentScore++
    } else {
        domUpdater(choices[userInput],"column1");
        domUpdater(choices[computerChoice],"column2");
        domUpdater("Computer","column3")
        computerCurrentScore++
    }

    currentRound--
    movesLeft.innerHTML = currentRound

    if(currentRound === 0) {
        checkWinner()
        
    }

}

function checkWinner() {
    currentRound = 5
    movesLeft.innerHTML = currentRound
    if (playerCurrentScore > computerCurrentScore) {
        playerGlobalScore++
    } else if(computerCurrentScore > playerCurrentScore) {
        computerGlobalScore++
    } else{
        alert("No one wins")
        
    }
    
    columns.forEach(column => {
        column.innerHTML = ""
    })
    playerCurrentScore = 0
    computerCurrentScore = 0

    playerScore.innerHTML = playerGlobalScore
    computerScore.innerHTML = computerGlobalScore
}


function domUpdater(emoji, column) {

    const emojiDiv = document.createElement("div")
    emojiDiv.innerText = emoji


    const targetColumn = document.querySelector(`.${column}`);
    targetColumn.appendChild(emojiDiv)
}