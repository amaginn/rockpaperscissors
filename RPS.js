// Create an array for computer play options
const computerOptions = ["Rock", "Paper", "Scissors"]
// Create a function that randomly returns one of these options in the array
function getComputerChoice() {
    return computerOptions[~~(Math.random() * computerOptions.length)]
}

// Create a function that allows a player to play one round with the computer
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
}
// check code viability
  const playerSelection = "rock";
  let computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));