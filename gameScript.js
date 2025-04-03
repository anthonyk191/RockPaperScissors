// let scoreboardComputer = document.querySelector("#playerScore");
// let scoreboardHuman = document.querySelector("#computerScore");
// scoreboardComputer.addEventListener("scoreboardSignal", () => {console.log("hello Shit")});

// let tempEvent = new Event("scoreboardSignal");
// scoreboardComputer.dispatchEvent(tempEvent);

//Computer Function For declaring either rock paper or scissors
function getComputerChoice(){
    //Return rock, paper, or scissors
    //hint use Math.random
    let computerOutput = Math.random()

    if (computerOutput <= .33){
        return("rock");
    }
    else if (computerOutput <= .66){
        return("paper");
    }
    else{
        return("scissor");
    }
}

//Figures out who wins based on what button was pressed by player
function playGame(input){
    let computerChoice = getComputerChoice();
    let humanChoice = input
    if (computerChoice == "rock"){
        if (humanChoice == "scissor"){
            console.log("computer wins");
            updateOutcome("computer wins")
            addPointComputer()
        }
        else if (humanChoice == "paper"){
            console.log("human wins");
            updateOutcome("human wins")
            addPointHuman()
        }
        else{
            console.log("tie");
            updateOutcome("tie")
        }
    }
    if (computerChoice == "scissor"){
        if (humanChoice == "paper"){
            console.log("computer wins")
            updateOutcome("computer wins")
            addPointComputer()
        }
        else if (humanChoice == "rock"){
            console.log("human wins");
            updateOutcome("human wins")
            addPointHuman()
        }
        else{
            console.log("tie");
            updateOutcome("tie")
        }
    }
    if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            console.log("computer wins");
            updateOutcome("computer wins")
            addPointComputer()
        }
        else if (humanChoice == "scissor"){
            console.log("human wins");
            updateOutcome("human wins")
            addPointHuman()
        }
        else{
            console.log("tie");
            updateOutcome("tie")
        }
    }
    console.log(`Points of player = ${scoreboardHuman}`)
    console.log(`Points of computer = ${scoreboardComputer}`)
    updateScoreboard()
    // console.log(`I clicked a button ${input}`)
}

//Add human a point
function addPointHuman() {
    scoreboardHuman+= 1
}
//Add computer a point
function addPointComputer() {
    scoreboardComputer+= 1
}

function updateScoreboard() {
    let displayPlayerScore = document.getElementById("playerScore")
    let displayComputerScore = document.getElementById("computerScore")
    displayPlayerScore.textContent = `Player Score: ${scoreboardHuman}`
    displayComputerScore.textContent = `Computer Score: ${scoreboardComputer}`
}
function updateOutcome(result) {
    let displayGameResult = document.getElementById("gameResult")
    displayGameResult.textContent = `The result is:  ${result}`   
}

//Declarations
let scoreboardComputer = 0
let scoreboardHuman = 0

updateScoreboard()

//Check for player inputs
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissor = document.getElementById("scissor");
buttonRock.addEventListener("click", () => {
    playGame("rock")})
buttonPaper.addEventListener("click", () => {
    playGame("paper")})
buttonScissor.addEventListener("click", () => {
    playGame("scissor")})
//console.log spit out score

// while (scores.scoreboardComputer < 1 && scores.scoreboardHuman < 1){
//     scores = playRound(scores.scoreboardComputer, scores.scoreboardHuman);
//     console.log("Computer:"+scores.scoreboardComputer+" and Human:"+scores.scoreboardHuman)
// }

// if (scores.scoreboardComputer > scores.scoreboardHuman){
//     console.log("Computer Wins the Games")
// }
// else{
//     console.log("Human Wins the Games")
// }

