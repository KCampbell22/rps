let round = 1;
let playerScore = 0;
let computerScore = 0;
let computerChoice
let winner = '';
let scoreLimit;
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

console.log(scoreLimit)

//window.requestAnimationFrame


 