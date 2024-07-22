// Create array with the 3 Choices
// Create a new function named getComputerChoice
// let function getComputerChoice return either 'Rock', 'Paper', or 'Scissors' randomly

const options = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const choice = options[Math.floor(Math.random() * options.length)];
  return choice;
};

getComputerChoice();

const checkWinner = (playerSelection, computerSelection) => {
    if (playerSelection == computerSelection) {
        return "Tie";
    } else if (
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else {
        return "Computer";
    }
}
    

const playRound = (playerSelection, computerSelection) => {
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a tie"
    }
    else if (result == "Player"){
        return `You win, ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose, ${computerSelection} beats ${playerSelection}`
    }
}

const getPlayerChoice = () => {
    let validatedInput = false;
    while(validatedInput == false){
        const choice = prompt("Rock, paper or scissors");
        if(choice == null){
            continue;
        }
        const inLowerCase = choice.toLowerCase();
        if(options.includes(inLowerCase)){
            validatedInput = true;
            return inLowerCase;
        }
    }
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    console.log("welcome!");
    for(let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
            console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerSelection) == "Player"){
        playerScore++
        }    
        else if(checkWinner(playerSelection,computerSelection) == "Computer"){
        computerScore++
        }
    }   
    console.log("Game over!")
    if(playerScore > computerScore){
        console.log("Player wins")
    }
    else if(computerScore > playerScore){
        console.log("Computer wins")
    }
    else{
        console.log("We have a tie")
    }
}

game()