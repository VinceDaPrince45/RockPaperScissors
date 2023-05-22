/** assign rock, paper, and scissors to numbers
 * use random number generator to assign number and check equality with assignment, which will return rock,paper,or scissors
 * ask for input from user for rock paper or scissors
 * use assignment to determine what they chose
 * once both player and computer choices are determined, make conditionals to determine who wins
 */






let computerRock = 1;
let computerPaper = 2;
let computerScissor = 3;
let playerWin = 0;
let computerWin = 0;
let result;

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*(3-1+1)+1);
    switch(computerChoice) {
        case computerRock:
            return 'rock';
        case computerPaper:
            return 'paper';
        case computerScissor:
            return 'scissors';
    }
}

function getPlayerChoice() {
    playerSelection = prompt("Choose rock, paper, or scissors").toLowerCase();
    return playerSelection;
}   

function playRound(playerSelection,computerSelection) {
     result = (playerSelection == computerSelection) ?
     "Tie! No one wins" :
     (playerSelection == 'rock' && computerSelection == 'paper') ?
     "You lose! Paper beats Rock" :
     (playerSelection == 'rock' && computerSelection == 'scissors') ?
     "You win! Rock beats Scissors" :
     (playerSelection == 'paper' && computerSelection == 'scissors') ?
     "You lose! Scissors beats Paper" :
     (playerSelection == 'paper' && computerSelection == 'rock') ?
     "You win! Paper beats Rock" :
     (playerSelection == 'scissors' && computerSelection == 'rock') ?
     "You lose! Rock beats Scissors" :
     (playerSelection == 'scissors' && computerSelection == 'paper') ?
     "You win! Scissors beats Paper" :
     'Something broke';
    return result;
}

function game() {
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
}

console.log(playRound(getPlayerChoice(),getComputerChoice()))

/**playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice());
    playRound(getPlayerChoice(),getComputerChoice()); */