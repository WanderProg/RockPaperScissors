const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

const playerChoiceColumn = document.querySelector(".colomn1");
const computerChoiceColumn = document.querySelector(".colomn2");
const winnerColumn = document.querySelector(".colomn3");

const playerScoreElement = document.querySelector(".Player-score")
const computerScoreElement = document.querySelector(".Computer-score")

let playerScore = 0
let computerScore = 0

rock.addEventListener("click", () => handleClick("👊"))
paper.addEventListener("click", () => handleClick("✋"))
scissors.addEventListener("click", () => handleClick("✌️"))

function handleClick(playerChoice) {
    const playerChoiceElement = document.createElement("div")
    playerChoiceElement.classList.add("player")
    playerChoiceElement.innerText = playerChoice
    playerChoiceColumn.appendChild(playerChoiceElement)

    const computerChoice = getRandomEmoji()
    computerScoreElement = document.createElement("div")
    computerScoreElement.classList.add("computer")
    computerScoreElement.innerText = computerChoice
    computerChoiceColumn.appendChild(computerScoreElement)

    checkWinner(playerChoice, computerChoice)
}

function getRandomEmoji() {
    const options = ["👊", "✋", "✌️"]
    const randomChoice = Math.floor(Math.random() * options.length)
    return options[randomChoice]
}


function checkWinner(playerChoice, computerChoice) {
    let result
    if( playerChoice === computerChoice) {
        result = "Tie"
    } else if(
        (playerChoice === "👊" && computerChoice === "✌️") ||
        (playerChoice === "✌️" && computerChoice === "✋") ||
        (playerChoice === "✋" && computerChoice === "👊") 
    ) { 
        result = "You win"
        playerScore++
        playerScoreElement.innerText = `Player Score: ${playerScore}`;


    } else {
        result = "You lose"
        computerScore++
        computerScoreElement.innerText = `Computer Score: ${computerScore}`;
 
    }
    const resultElement = document.createElement("div");
    resultElement.innerText = result;
    winnerColumn.appendChild(resultElement);
  
}