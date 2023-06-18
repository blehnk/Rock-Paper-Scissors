//create a function to return "rock", "paper", or "scissors" randomly
function getComputerChoice(){
    randomNum = Math.floor(Math.random() * 3);
    switch(randomNum){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

//write a function tha takes playerSelection and computerSelection as input
//compare these parameters and decide the winner
let yourScore = 0;
let cpuScore = 0;

function playRound(e){
    playerSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    console.log(computerSelection)

    //condition for when the computerSelection is "rock"
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection == "rock"){
        if(playerSelection == "paper"){
            yourScore += 1;
            displayDiv.textContent = "You Win! Paper beats Rock";
        }
        else if(playerSelection == "rock"){
            displayDiv.textContent = "It's a Draw!";
        }
        else{
            cpuScore += 1;
            displayDiv.textContent = "You Lose! Rock Beats Scissors";
        }
    }

    //condition for when the computerSelection is "paper"
    if(computerSelection == "paper"){
        if(playerSelection == "scissors"){
            yourScore += 1;
            displayDiv.textContent = "You Win! Scissors beats Paper";
        }
        else if(playerSelection == "paper"){
            displayDiv.textContent = "It's a Draw!";
        }
        else{
            cpuScore += 1;
            displayDiv.textContent = "You Lose! Paper Beats Rock";
        }
    }

    //condition for when the computerSelection is "scissors"
    if(computerSelection == "scissors"){
        if(playerSelection == "rock"){
            yourScore += 1;
            displayDiv.textContent = "You Win! Rock beats Scissors";
        }
        else if(playerSelection == "scissors"){
            displayDiv.textContent = "It's a Draw!";
        }
        else{
            cpuScore += 1;
            displayDiv.textContent = "You Lose! Scissors Beats paper";
        }
    }

    activeResultDiv.textContent = `YOUR SCORE: ${yourScore}, CPU SCORE: ${cpuScore}`;

    if(yourScore == 5 || cpuScore == 5){
        let win = yourScore > cpuScore ? "YOU" : "CPU";
        body.style.display = "none";
        alert(`GAME OVER! ${win} Wins`);
        
    }
}


//Create a div to display the result in the page
const displayDiv = document.createElement('div');

//Create a div to display the active result of the player and the CPU
const activeResultDiv = document.createElement('div');

//Append the div to the body of the HTML
const body = document.querySelector('body');
body.appendChild(displayDiv);
body.appendChild(activeResultDiv);

//Create a click event for selecting the user's choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));





