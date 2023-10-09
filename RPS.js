// Create an array for computer play options
const computerOptions = ["Rock", "Paper", "Scissors"]
// Create a function that randomly returns one of these options in the array
function getComputerChoice() {
    return computerOptions[~~(Math.random() * computerOptions.length)]
}