const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const btn = document.querySelectorAll('button');
let userChoice;
let computerChoice;
let result;


btn.forEach(btn => btn.addEventListener('click', (e) =>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML  = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomChoice = Math.floor(Math.random() * btn.length);
    if(randomChoice === 0){
        computerChoice = 'rock'
    }
    else if(randomChoice === 1){
        computerChoice = 'paper'
    }
    else{
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
    if(computerChoice === userChoice) {
        result = `it's a draw`
    }
    if(computerChoice === 'scissors' && userChoice === 'paper') {
        result = `you lost!`
    }
    if(computerChoice === 'paper' && userChoice === 'rock') {
        result = `you lost!`
    }
    if(computerChoice === 'rock' && userChoice === 'scissors') {
        result = `you lost!`
    }
    else{
        result = `you won!`
    }
    resultDisplay.innerHTML = result;
}