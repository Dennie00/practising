let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0  
}

updateScore()



// if(!score) {
//     score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// };


function pickComputerMove() {
  let computerMove = '';
  const randomNumber = Math.random();
  if(randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
  } else if (randomNumber >= 1/3 && randomNumber < 2/3) {
      computerMove = 'paper';
  } else {
      computerMove = 'scissors';
  }

  return computerMove;
};

let isAutoPlaying = false;

let intervalId;

// AUTO PLAY
function autoPlay() {
  if(!isAutoPlaying) {
    document.querySelector(".auto-play-btn").innerHTML = "Stop playing"
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    document.querySelector(".auto-play-btn").innerHTML = "Auto Play"
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
  
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  let resultText = document.querySelector(".js-result");

  if (playerMove === "scissors") {
      if(computerMove === playerMove) {
          result = 'Tie.';
      } else if(computerMove === 'rock'){
          result = 'You lose.'
      } else {
          result = 'You win.'
      }
      
  } else if(playerMove === "paper") {
      if(computerMove === 'paper') {
          result = 'Tie.';
      } else if(computerMove === 'scissors'){
          result = 'You lose.'
      } else {
          result = 'You win.'
      }

  } else if(playerMove === "rock") {
      if(computerMove === 'rock') {
          result = 'Tie.';
      } else if(computerMove === 'paper'){
          result = 'You lose.'
      } else {
          result = 'You win.'
      }
  }

  if(result === "You win.") {
      score.wins++;
      resultText.classList.add("green");
  } else if(result === "You lose.") {
      score.losses++;
      resultText.classList.add("red");
  } else if(result === "Tie.") {
      score.ties++
      resultText.classList.remove("red", "green");
  }
  updateScore()
  
  resultText.innerHTML = `${result}`
  
  document.querySelector(".js-moves").innerHTML = `You <img class="emoji-icon" src="../images/${playerMove}-emoji.png"> <img class="emoji-icon" src="../images/${computerMove}-emoji.png"> Computer`
  localStorage.setItem("score", JSON.stringify(score))


};

function updateScore() {
  const paramElement = document.querySelector(".js-score");
  paramElement.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}

// EMOJI BUTTON - ROCK
    const rockBtn = document.querySelector(".js-rock-btn")
    rockBtn.addEventListener("click", () => {
        playGame('rock');
    })
// EMOJI BUTTON - PAPER
    const paperBtn = document.querySelector(".js-paper-btn")
    paperBtn.addEventListener("click", () => {
        playGame('paper');
    })
// EMOJI BUTTON - SCISSORS
    const scissorsBtn = document.querySelector(".js-scissors-btn")
    scissorsBtn.addEventListener("click", () => {
        playGame('scissors');
        })


// RESET GAME FUNCTION
const resetGame = () => {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0; 
    updateScore()
    localStorage.removeItem('score')
    document.querySelector(".js-result").innerHTML = "";
    document.querySelector(".js-moves").innerHTML = "";
}

// RESET GAME - CONFIRM
let message = document.getElementById("message")


const confirmResetGame = () => {
    message.innerHTML = `<p>Are you sure you want to reset the score?</p>
    <button id="confirm-btn" class="confirm-btn">Yes</button>
    <button id="decline-btn" class="decline-btn">No</button>`

    const confirmBtn = document.getElementById("confirm-btn");
    const declineBtn = document.getElementById("decline-btn");

    confirmBtn.addEventListener("click", () => {
    resetGame();
    message.innerHTML = "";
    })

    declineBtn.addEventListener("click", () => {
    message.innerHTML = "";
    })
}





// RESET BUTTON
let resetBtn = document.querySelector(".reset-btn");
resetBtn.addEventListener("click", () => {
    confirmResetGame();
})

// AUTOPLAY BUTTON
let autoPlayBtn = document.querySelector(".auto-play-btn")
autoPlayBtn.addEventListener("click", () => {
    autoPlay();
})


// KEYDOWN PLAY
document.body.addEventListener("keydown", (event) => {
    if(event.key === 'r') {
        playGame('rock');
    } else if(event.key === 'p') {
        playGame('paper');
    } else if(event.key === 's') {
        playGame('scissors');
    } else if(event.key === 'a') {
        autoPlay();
    } else if (event.key === 'Backspace') {
        confirmResetGame();
    }
})