let round = 1;
let playerScore = 0;
let computerScore = 0;
let winner = '';

 // rock button
 // paper button
 // scissors button

 const modeWrap = document.querySelector('#mode-wrap');

let roundDisplay = document.querySelector('#round-number'); // round display
let playerScoreDisplay = document.querySelector('#player-score'); // player score display
let computerScoreDisplay = document.querySelector('#computer-score'); // computer score display
let winnerDisplay = document.querySelector('#winner-display'); // winner display
const popUp = document.querySelector('#pop-wrap'); // pop up
const mainMenu = document.querySelector('#main-menu'); // main menu
const restartBtn = document.querySelector('#restart'); // restart button
const playSoloBtn = document.querySelector('#solo-btn'); // play solo button
const playBestOfThreeBtn = document.querySelector('#best-btn'); // play best of three button
const showMode = document.querySelector('#mode-display');
let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');

const uRockIcon = document.querySelector('#uRock'); // user rock icon
 const uPaperIcon = document.querySelector('#uPaper'); // user paper icon
 const uScissorsIcon = document.querySelector('#uScissors'); // user scissors icon
 const cRockIcon = document.querySelector('#cRock'); // computer rock icon
 const cPaperIcon = document.querySelector('#cPaper'); // computer paper icon
 const cScissorsIcon = document.querySelector('#cScissors'); // computer scissors icon

 
//window.requestAnimationFrame

function ChooseMode(){
// will determine the game mode. 
     if (playSoloBtn){
         scoreLimit = 1; // sets mode to solo mode
         showMode.textContent = 'Mode: solo';
         modeWrap.remove();
     }

     else if (playBestOfThreeBtn){
        scoreLimit = 2;
        showMode.textContent = 'Mode: Best out of Three';
        modeWrap.remove();
     }
    
    }
    

    function GetComputerChoice(){
        let random = Math.floor(Math.random() * 3) + 1;
        switch (random) {
            case 1: 
               return 'rock';
            case 2:
                return 'paper';
            case 3:
                return 'scissors';
        }
    }

    
function PlayGame(playerChoice, computerChoice) {
    
}