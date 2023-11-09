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

// Create elements for user/player selections
const playerOutput = document.createElement('p');
const computerOutput = document.createElement('p');
const gameResults = document.createElement('p');
const finalGameResults = document.createElement('p');

// Create a function that allows a player to play 5 rounds with the computer
    function playRound(playerSelection) {

        const computerSelection = getComputerChoice();

         // Keep track of selections
        let mainDiv = document.getElementById("mainContainer");

        // Output player and computer selections 
        playerOutput.textContent = ("Player selected: " + playerSelection);
        mainContainer.appendChild(playerOutput);
        computerOutput.textContent = ("Computer selected: " + computerSelection);
        mainContainer.appendChild(computerOutput);
    

        // if player loses
        if (playerSelection === 'Rock' && computerSelection === 'Paper')
            gameResults.textContent = ('The robot wins this round..'), compWinCount++;
        else if (playerSelection === 'Paper' && computerSelection === 'Scissors')
            gameResults.textContent = ('The robot wins this round..'), compWinCount++;
        else if (playerSelection === 'Scissors' && computerSelection === 'Rock')
            gameResults.textContent = ('The robot wins this round..'), compWinCount++;

        // if player wins
        else if (playerSelection === 'Rock' && computerSelection === 'Scissors')
            gameResults.textContent = ("You win this round!"), playerWinCount++;
        else if (playerSelection === 'Paper' && computerSelection === 'Rock')
            gameResults.textContent = ("You win this round!"), playerWinCount++;
        else if (playerSelection === 'Scissors' && computerSelection === 'Paper')
            gameResults.textContent = ("You win this round!"), playerWinCount++;

        // Tie result
        else if (playerSelection === computerSelection)
            gameResults.textContent = ("Tie Game!");
        else
            gameResults.textContent = ("Please click either rock, paper, or scissors to play.");

        // Write a function that adds a score to either side upon win/lose 
        const maxScore = 5;
        if (playerWinCount >= maxScore) {
            gameResults.textContent = ("Player wins the game!");
        } else if (compWinCount >= maxScore) {
            gameResults.textContent = ("Computer wins the game!");
        }
        
        mainContainer.appendChild(gameResults);
        // output results for user
        finalGameResults.textContent = ("Scores: Computer - " + compWinCount + " Player - " + playerWinCount);
        mainContainer.appendChild(finalGameResults);
    }