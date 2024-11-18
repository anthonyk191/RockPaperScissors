console.log("Hello World")

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


function getHumanChoice(){
    //prompt
    //input should not be case sensitive/ plural sensitive should be rock, Rock(s), paper(s), Paper(s), or scissor(s)/ Scissor(s)
    let humanInput = prompt("Please type either rock, paper, or scissor", "rock");
    //returns letters converted to lowercase
    let convertedInput = humanInput.toLowerCase();
    while (true) {
        if (convertedInput == "rock" || convertedInput == "paper" || convertedInput == "scissor") {//|| convertedInput == "rocks" || convertedInput == "papers" || convertedInput == "scissors"){
            return(convertedInput);
        }
        else {
            humanInput = prompt("Incorrect input. Please type either rock, paper, or scissor", "rock");
            convertedInput = humanInput.toLowerCase();
        }
        
    }
}


function gameManagerStart(){
    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    console.log("computer choice " + computerChoice);
    console.log("human choice " + humanChoice);
    //function that calls after human prompts
    if (computerChoice == "rock"){
        if (humanChoice == "scissor"){
            return("computer wins");
        }
        else if (humanChoice == "paper"){
            return("human wins")
        }
        else{
            return("tie")
        }
    }
    if (computerChoice == "scissor"){
        if (humanChoice == "paper"){
            return("computer wins")
        }
        else if (humanChoice == "rock"){
            return("human wins");
        }
        else{
            return("tie");
        }
    }
    if (computerChoice == "paper"){
        if (humanChoice == "rock"){
            return("computer wins");
        }
        else if (humanChoice == "scissor"){
            return("human wins");
        }
        else{
            return("tie");
        }
    }
    //mention who won amongst the players mentioning what the score is currently
}

//Update score board (increment scoreboard by who won)
function playRound(scoreboardComputer, scoreboardHuman){
    //grab input from human and computer and calculate who wins
    let gameResult = gameManagerStart()
    if (gameResult == "computer wins"){
        scoreboardComputer += 1;
        return {scoreboardComputer, scoreboardHuman};
    }
    else if (gameResult == "human wins"){
        scoreboardHuman += 1;
        return {scoreboardComputer, scoreboardHuman};
    }
    else{
        return {scoreboardComputer, scoreboardHuman};
    }
}
//console.log spit out score
let scoreboardComputer = 0;
let scoreboardHuman = 0;
let scores = {scoreboardComputer, scoreboardHuman}

while (scores.scoreboardComputer < 3 && scores.scoreboardHuman < 3){
    scores = playRound(scores.scoreboardComputer, scores.scoreboardHuman);
    console.log("Computer:"+scores.scoreboardComputer+" and Human:"+scores.scoreboardHuman)
}

if (scores.scoreboardComputer > scores.scoreboardHuman){
    console.log("Computer Wins the Games")
}
else{
    console.log("Human Wins the Games")
}