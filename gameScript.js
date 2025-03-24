// let scoreboardComputer = document.querySelector("#playerScore");
// let scoreboardHuman = document.querySelector("#computerScore");
// scoreboardComputer.addEventListener("scoreboardSignal", () => {console.log("hello Shit")});

// let tempEvent = new Event("scoreboardSignal");
// scoreboardComputer.dispatchEvent(tempEvent);



let scoreboardComputer = 0
let scoreboardHuman = 0

console.log("Hello World")

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
            return((0,1))
        }
        else if (humanChoice == "paper"){
            console.log("human wins");
            return((1,0))
        }
        else{
            console.log("tie");
        }
    }
    if (computerChoice == "scissor"){
        if (humanChoice == "paper"){
            console.log("computer wins")
            return((0,1))
        }
        else if (humanChoice == "rock"){
            console.log("human wins");
            return((1,0))
        }
        else{
            console.log("tie");
        }
    }
    if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            console.log("computer wins");
            return((0,1))
        }
        else if (humanChoice == "scissor"){
            console.log("human wins");
            return((1,0))
        }
        else{
            console.log("tie");
        }
    }

}
//Update score board (increment scoreboard by who won)
function updateScoreboard(gameResult){
    //grab input from human and computer and calculate who wins
    if (gameResult == "computer wins"){
        scoreboardComputer += 1;
        console.log(scoreboardComputer)
        // return {scoreboardComputer, scoreboardHuman};
    }
    else if (gameResult == "human wins"){
        scoreboardHuman += 1;
        console.log(scoreboardHuman)
        // return {scoreboardComputer, scoreboardHuman};
    }
    else{
        // return {scoreboardComputer, scoreboardHuman};
    }
    // console.log(scoreboardComputer)
    // console.log(scoreboardHuman)
}

// let humanChoiceButton = document.querySelector(button)
// humanChoiceButton.addEventListener("customEvent", function); 
let buttonRock = document.getElementById("rock");
let buttonPaper = document.getElementById("paper");
let buttonScissor = document.getElementById("scissor");
buttonRock.addEventListener("click", () => {
    scoreboardHuman, scoreboardComputer = playGame("rock")})
buttonPaper.addEventListener("click", () => {
    scoreboardHuman, scoreboardComputer = playGame("paper")})
buttonScissor.addEventListener("click", () => {
    scoreboardHuman, scoreboardComputer = playGame("scissor")})


//Add human a point
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

