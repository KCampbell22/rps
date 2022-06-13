const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const playerScore = document.querySelector('[data-player-score]')
const computerScore = document.querySelector('[data-computer-score]')
const bOfThree = document.querySelector('[data-change-best-of-three]')
const solo = document.querySelector('[data-change-solo]')
const body = document.querySelector('body')
const overlay = document.querySelector('[data-select-overlay]')
const restartBtn = document.querySelector('[data-restart]')
const modeDisplay = document.querySelector('[data-mode-display]')
const roundDisplay = document.querySelector('[data-select-round]')

let scoreLimit = '1';
const SELECTIONS = [{
  
  name: 'rock',
  icon: src = 'noun-fist-477918.png',
  beats: 'scissors'
},
{
  
  name: 'paper',
  icon: src = 'noun-hand-477922.png',
  beats: 'rock'
},
{
  
  name: 'scissors',
  icon: src = 'noun-scissors-477919.png',
  beats: 'paper'
}
]

  

  bOfThree.addEventListener('click', e =>{ 
    bOfThree.disabled = true;
    bOfThree.style.border = 'none'
    bOfThree.style.visibility = 'hidden'
    solo.style.visibility = 'visible'
    modeDisplay.innerHTML = 'Mode: Best of 3'
    solo.disabled = false;
    scoreLimit = '2';
    return scoreLimit;
  } )
  
  solo.addEventListener('click', e =>{
    window.location.reload()
    solo.disabled = true;
    solo.style.visibility = 'hidden'
  })
  


selectionButtons.forEach(selectionButton => {

    selectionButton.addEventListener('click', e =>{
     const selectionName = selectionButton.dataset.selection
     
     const selection = SELECTIONS.find(selection => selection.name === selectionName)
     makeSelection(selection)
    })
})
function makeSelection(selection) {
  const computerSelection = randomSelection();
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)
  
  addSelectionReult(computerSelection, computerWinner)
  addSelectionReult(selection, yourWinner) 
  
  if (yourWinner) increaseScore(playerScore)
  if (computerWinner) increaseScore(computerScore)
  gameOver(computerScore, playerScore, scoreLimit)
  
}





function increaseScore(score) {
  score.innerHTML = parseInt(score.innerHTML) + 1
}

function addSelectionReult(selection, winner, computerSelection){
  const div = document.createElement('div')
  const createDisplay = document.createElement('img')
  createDisplay.src = selection.icon
  div.classList.add('result-selection') 
  if(winner) {createDisplay.classList.add('winner')}
  else{createDisplay.classList.add('loser')}
  
  finalColumn.after(div)
  div.appendChild(createDisplay);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const random = Math.floor(Math.random() * SELECTIONS.length) 
  return SELECTIONS[random]
}


function gameOver(computerScore, playerScore, scoreLimit) {
  if(playerScore.innerHTML === scoreLimit || computerScore.innerHTML === scoreLimit) {
    overlay.style.display = 'flex' 
  }
  restartBtn.addEventListener('click', e => {
    overlay.style.display = 'none'
    playerScore.innerHTML = '0'
    computerScore.innerHTML = '0'
    window.location.reload()
  })
}






function increaseScore(score) {
  score.innerHTML = parseInt(score.innerHTML) + 1
}

function addSelectionReult(selection, winner, computerSelection){
  const div = document.createElement('div')
  const createDisplay = document.createElement('img')
  createDisplay.src = selection.icon
  div.classList.add('result-selection') 
  if(winner) {createDisplay.classList.add('winner')}
  else{createDisplay.classList.add('loser')}
  
  finalColumn.after(div)
  div.appendChild(createDisplay);
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const random = Math.floor(Math.random() * SELECTIONS.length) 
  return SELECTIONS[random]
}


function gameOver(computerScore, playerScore, scoreLimit) {
  if(playerScore.innerHTML === scoreLimit || computerScore.innerHTML === scoreLimit) {
    overlay.style.display = 'flex' 
  }
  restartBtn.addEventListener('click', e => {
    overlay.style.display = 'none'
    playerScore.innerHTML = '0'
    computerScore.innerHTML = '0'
    window.location.reload()
  })
}
