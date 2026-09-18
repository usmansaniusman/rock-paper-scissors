function getComputerChoice(){
    const choices = [`Rock`, `Paper`, `Scissors` ]
    return choices[Math.floor(Math.random() * choices.length)]
}

function getHumanChoice() {
    const input = prompt("Enter your choice - Rock, Paper, or Scissors?")
    if (!input) return "invalid choice"
    const user = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
    if (user === "Rock" || user === "Paper" || user === "Scissors"){
        return user}
        return "invalid choice"

}

function playGame() {

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){
    if (humanChoice === "invalid choice"){
        prompt("invalid choice! please select from Rock, Paper, or Scissors")
        return
    }
    if (computerChoice == humanChoice){
        prompt("It's a tie!\nChoose again.")
        return "It's Draw!"
    }

    else if ((computerChoice === "Scissors" && humanChoice === "Rock") ||
             (computerChoice === "Paper" && humanChoice === "Scissors") || 
             (computerChoice === "Rock" && humanChoice === "Paper")) {
                prompt("Congrats! You just beat the computer\nContinue.")
                humanScore += 1
                return "You win"
             }
    else {
        prompt("You lose. Try again!")
        computerScore += 1
        return "you lose"
    }
}

const humanSelection = getHumanChoice()
const computerSelection = getComputerChoice()

playRound(humanSelection, computerSelection)

for (let i = 0; i < 4; i +=1) {
    console.log(playRound(getHumanChoice(), getComputerChoice()))
}

prompt(`Game Over!\n Score: You = ${humanScore}    Computer = ${computerScore}`)
}

console.log(playGame())