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
function playRound(e){
    playerSelection = e.target.textContent;
    computerSelection = getComputerChoice();
    console.log(computerSelection)

    //condition for when the computerSelection is "rock"
    playerSelection = playerSelection.toLowerCase();
    if(computerSelection == "rock"){
        if(playerSelection == "paper"){
            displayDiv.textContent = "You Win! Paper beats Rock";
        }
        else if(playerSelection == "rock"){
            displayDiv.textContent = "It's a Draw!";
        }
        else{
            displayDiv.textContent = "You Lose! Rock Beats Scissors";
        }
    }

    //condition for when the computerSelection is "paper"
    if(computerSelection == "paper"){
        if(playerSelection == "scissors"){
            displayDiv.textContent = "You Win! Scissors beats Paper";
        }
        else if(playerSelection == "paper"){
            displayDiv.textContent = "It's a Draw!";
        }
        else{
            displayDiv.textContent = "You Lose! Paper Beats Rock";
        }
    }

    //condition for when the computerSelection is "scissors"
    if(computerSelection == "scissors"){
        if(playerSelection == "rock"){
            displayDiv.textContent = "You Win! Rock beats Scissors";
        }
        else if(playerSelection == "scissors"){
            displayDiv.textContent = "It's a Draw!";
        }
        else{
            displayDiv.textContent = "You Lose! Scissors Beats paper";
        }
    }
}

//create the main function to take input from the user and play the game 5 times
// function game(){
//     for(let i = 0; i < 5; i++){
//         let playerSelection = prompt("What's your choice for this round?");
//         let computerSelection = getComputerChoice();
    
//         console.log(playRound(playerSelection, computerSelection));
//     }
// }

//Create a div to display the result in the page
const displayDiv = document.createElement('div');

//Append the div to the body of the HTML
const body = document.querySelector('body');
body.appendChild(displayDiv);

//Create a click event for selecting the user's choice
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', playRound));





