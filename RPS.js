// Create an array for computer play options
const computerOptions = ["Rock", "Paper", "Scissors"]

// Create a function that randomly returns one of these options in the array
function getComputerChoice() {
    return computerOptions[~~(Math.random() * computerOptions.length)]
}

// set scores to 0
let playerWinCount = 0
let compWinCount = 0

// Get buttons and add event listener click functions for user input
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
rockButton.addEventListener('click', () => playRound("Rock"));
paperButton.addEventListener('click', () => playRound("Paper"));
scissorsButton.addEventListener('click', () => playRound("Scissors"));


// Create a function that allows a player to play 5 rounds with the computer
    function playRound(playerSelection) {

        const computerSelection = getComputerChoice();

         // Keep track of selections
        console.log("Player selected: " + playerSelection);
        console.log("Computer selected: " + computerSelection);

        // if player loses
        if (playerSelection === 'Rock' && computerSelection === 'Paper')
            console.log('You Lose!'), compWinCount++;
        else if (playerSelection === 'Paper' && computerSelection === 'Scissors')
            console.log('You Lose!'), compWinCount++;
        else if (playerSelection === 'Scissors' && computerSelection === 'Rock')
            console.log('You Lose!'), compWinCount++;

        // if player wins
        else if (playerSelection === 'Rock' && computerSelection === 'Scissors')
            console.log("Winner Winner!!"), playerWinCount++;
        else if (playerSelection === 'Paper' && computerSelection === 'Rock')
            console.log("Winner Winner!!"), playerWinCount++;
        else if (playerSelection === 'Scissors' && computerSelection === 'Paper')
            console.log("Winner Winner!!"), playerWinCount++;

        // Tie result
        else if (playerSelection === computerSelection)
            console.log("Tie Game!");
        else
            return "Please click either rock, paper, or scissors to play."

        // Write a function that adds a score to either side upon win/lose 
        const maxScore = 5;
        if (playerWinCount >= maxScore) {
            console.log("Player wins the game!");
        } else if (compWinCount >= maxScore) {
            console.log("Computer wins the game!");
        }
        
        // output results for user
        console.log("Scores: Computer - ", compWinCount, "Player - ", playerWinCount);
    }