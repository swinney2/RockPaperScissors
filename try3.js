let playerScore = 0
let computerScore = 0
const playerScoreNew = document.getElementById("playerScore")
const computerScoreNew = document.getElementById("computerScore")





//computer selection
let rockPaperScissors = ['Rock', 'Paper', 'Scissors']; //computer chooses from these
function computerPlay() {
  let computerSelection = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)]
  return computerSelection
}
var computerSelection = computerPlay();
//computer selection end

//buttonListeners
function buttons(){
const rockbtn = document.querySelector('#rockbtn');
    rockbtn.addEventListener('click', function(){
        playRound("Rock", computerPlay());
    });

const paperbtn = document.querySelector('#paperbtn');    
   paperbtn.addEventListener('click', function(){
        playRound("Paper", computerPlay());
    });

const scissorsbtn = document.querySelector('#scissorsbtn');
   scissorsbtn.addEventListener('click', function(){
        playRound("Scissors", computerPlay());
    });
;
 var newGame = document.querySelector('#newgamebtn');
newgamebtn.addEventListener('click', () => {
window.location.reload()
})
};

buttons();
//end buttons



 function playRound(playerSelection, computerSelection){
    switch (playerSelection + computerSelection){
        case "PaperRock":
        case "ScissorsPaper":
        case "RockScissors" :
            win(playerSelection, computerSelection)
            break;
        case "RockPaper":
        case "ScissorsRock":
        case "PaperScissors":
            lose(playerSelection, computerSelection);
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            draw(playerSelection, computerSelection);
            break;}


       function win(){
    playerScore++;
    playerScoreNew.textContent = playerScore;
    checkScoreAfterWin();}
    


function lose(){
    computerScore++
    computerScoreNew.textContent = computerScore;
    checkScoreAfterLoss();
}

 function draw(){
    result.textContent = 'It\'s a draw!'
 }   
 
 


function checkScoreAfterWin (){
if (playerScore >= 5) { 
    result.textContent = 'Congrats! You won!' }

else {
result.textContent = playerSelection + ' beats ' + computerSelection + '.' + ' You win!'}
}
   
function checkScoreAfterLoss (){
if (computerScore >= 5){
    result.textContent = 'Boo! You lose!'
} else {
  result.textContent = computerSelection + ' beats ' + playerSelection + '.' +' You lose!'}
}
}



//    if {
//        playerSelection == "Rock"
//        result.textContent = "You win! Rock beats Scissors!"
//    } else if {
//        playerSelection == "Scissors"
//        result.textContent = "You win! Scissors beats Paper!"
//    } else {
//        playerSelection =="Paper"
//      result.textContent = "You win! Paper beats Rock!"
//    }
