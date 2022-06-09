round = 1;
let playerScore = 0;
let computerScore = 0;
let computerChoice
let winner = '';

 // rock button
 // paper button
 // scissors button

let roundDisplay = document.querySelector('#round-display'); // round display
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
computerChoice = GetComputerChoice;





 function ChoseGameMode (computerChoice) {
     let modeDisplay = document.querySelector('#mode-wrap'); // game mode display
    computerChoice = GetComputerChoice();
    console.log(computerChoice);

    if(computerChoice === 'rock') {
        cScissorsIcon.classList.remove('active', 'bounceInDown');
        cRockIcon.classList.remove('active', 'bounceInDown');
    cScissorsIcon.classList.remove('active', 'bounceInDown');
    window.requestAnimationFrame(function() {
      cRockIcon.classList.add('active', 'bounceInDown');
    })}

    if(computerChoice === 'paper') {
        cRockIcon.classList.remove('active', 'bounceInDown');
        cPaperIcon.classList.remove('active', 'bounceInDown');

        cScissorsIcon.classList.remove('active', 'bounceInDown');
    window.requestAnimationFrame(function() {
      cPaperIcon.classList.add('active', 'bounceInDown');
    })}

    if(computerChoice === 'scissors') {
        cScissorsIcon.classList.remove('active', 'bounceInDown');
        cRockIcon.classList.remove('active', 'bounceInDown');
        cScissorsIcon.classList.remove('active', 'bounceInDown');
    window.requestAnimationFrame(function() {
      cScissorsIcon.classList.add('active', 'bounceInDown');
    })}

   
     playSoloBtn.addEventListener('click', () => {
         modeDisplay.remove('active', 'bounceInDown');
         showMode.textContent ='Solo';
        //PlayRound();
     })

     playBestOfThreeBtn.addEventListener('click', () => {
         modeDisplay.remove('active', 'bounceInDown');
         showMode.textContent = 'Best of 3';
         // playBestOfThreeBtn();
        
     }
     )
 }

 function GetComputerChoice() {
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

 let playerOptions = [rockBtn, paperBtn, scissorsBtn];
 


 

rockBtn.addEventListener('click', () => {
    uRockIcon.classList.remove('active', 'bounceInDown');

    uPaperIcon.classList.remove('active', 'bounceInDown');
    uScissorsIcon.classList.remove('active', 'bounceInDown');
    window.requestAnimationFrame(function() {
      uRockIcon.classList.add('active', 'bounceInDown');
    });
    if (rockBtn.value === 'rock') {
        playerChoice = 'rock';
    
   
    console.log(playerChoice);
    }
});

paperBtn.addEventListener('click', () => {
    uPaperIcon.classList.remove('active', 'bounceInDown');

    uRockIcon.classList.remove('active', 'bounceInDown');
    uScissorsIcon.classList.remove('active', 'bounceInDown');
    window.requestAnimationFrame(function() {
      uPaperIcon.classList.add('active', 'bounceInDown');
    });
    if (paperBtn.value === 'paper') {
        playerChoice = 'paper';
        console.log(playerChoice);
    }
    

    
})
    
scissorsBtn.addEventListener('click', () => {
    uScissorsIcon.classList.remove('active', 'bounceInDown');

    uRockIcon.classList.remove('active', 'bounceInDown');
    uPaperIcon.classList.remove('active', 'bounceInDown');
    window.requestAnimationFrame(function() {
      uScissorsIcon.classList.add('active', 'bounceInDown');
    });
    if (scissorsBtn.value === 'scissors') {
        playerChoice = 'scissors';
        console.log(playerChoice);
    }
    

})



 
 ChoseGameMode();
 
