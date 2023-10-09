// Create an array for computer play options
const computerOptions = ["Rock", "Paper", "Scissors"]
// Create a function that randomly returns one of these options in the array
function getComputerChoice() {
    return computerOptions[~~(Math.random() * computerOptions.length)]
}

let playerWinCount = 0
let compWinCount = 0

// Create a function that allows a player to play 5 rounds with the computer
// function game() {
    function playRound(playerSelection, computerSelection) {
        // to lower case
        playerSelection = playerSelection.toLowerCase();
        // if player choice == rock
        if (playerSelection == 'rock' && computerSelection == 'Paper')
            return 'You Lose!';
        else if (playerSelection == 'rock' && computerSelection == 'Rock')
            return "Tie game!";
        else if (playerSelection == 'rock' && computerSelection == 'Scissors')
            return "Winner Winner!!"
        // if player choice == paper
        else if (playerSelection == 'paper' && computerSelection == 'Scissors')
            return "You Lose!"
        else if (playerSelection == 'paper' && computerSelection == 'Paper')
            return "Tie Game!"
        else if (playerSelection == 'paper' && computerSelection == 'Rock')
            return "Winner Winner!!"
        // if player choice == scissors
        else if (playerSelection == 'scissors' && computerSelection == 'Rock')
            return "You Lose!"
        else if (playerSelection == 'scissors' && computerSelection == 'Scissors')
            return "Tie Game!"
        else if (playerSelection == 'scissors' && computerSelection == 'Paper')
            return "Winner Winner!!"
        else
            return "Please input either rock, paper, or scissors to play."
    }
// Write a function that adds a score to either side upon win/lose 
function keepScore(result) { 
    if (result == "You Lose!")
        return compWinCount++;
    else if (result == "Winner Winner!")
        return playerWinCount++;
    }
for (let i = 0; i <5; i++) {
// check code viability
  const playerSelection = "rock";
  let computerSelection = getComputerChoice();
  const result = (playRound(playerSelection, computerSelection));
  console.log(result);
  keepScore(result);
}