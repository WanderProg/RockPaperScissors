const rock = document.querySelector(".rock")
const paper = document.querySelector(".paper")
const scissors = document.querySelector(".scissors")

const column1 = document.querySelector(".column1")
const column2 = document.querySelector(".column2")
const column3 = document.querySelector(".column3")

// Write a function that appends the emoji of chosen button to column1


rock.addEventListener("click", () => handleClick("👊"))
paper.addEventListener("click", () => handleClick("✋"))


function handleClick(choiceOfUser) {
    const choiceOfComputer = getRandomEmoji();
    appendOwnPickToDom(choiceOfUser);
    appendComputerPickToDom(choiceOfComputer);
    const winner = checkWinner(choiceOfUser, choiceOfComputer)
    appendWinnerToDom(winner);
}

// function handleClick(choiceOfUser) {
//     const userChoice = document.createElement("div")
//     userChoice.classList.add("own-pick")
//     userChoice.innerText = choiceOfUser
//     column1.appendChild(userChoice)
// }

/*deze functie gebruiken om de keuze van jezelf aan de DOM toe te voegen.
PARAMETERS: keuzen van gebruiker
Returned: Niks
*/

function appendOwnPickToDom(choiceOfUser) {
    const userChoice = document.createElement("div")
    userChoice.classList.add("own-pick")
    userChoice.innerText = choiceOfUser
    column1.appendChild(userChoice)
}



