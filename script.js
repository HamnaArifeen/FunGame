// Dice Roll Game Logic
function rollDice() {
    const diceResult = Math.floor(Math.random() * 6) + 1;
    document.getElementById('diceResult').innerText = `You rolled a ${diceResult}`;
  }
  
  // Rock Paper Scissors Logic
  function playRockPaperScissors(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = '';
  
    if (playerChoice === computerChoice) {
      result = 'It\'s a tie!';
    } else if (
      (playerChoice === 'rock' && computerChoice === 'scissors') ||
      (playerChoice === 'paper' && computerChoice === 'rock') ||
      (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
      result = 'You win!';
    } else {
      result = 'You lose!';
    }
  
    document.getElementById('rpsResult').innerText = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;
  }
  
  // Stopwatch Logic
  let stopwatchInterval;
  let stopwatchTime = 0;
  
  function startStopwatch() {
    if (!stopwatchInterval) {
      stopwatchInterval = setInterval(function () {
        stopwatchTime++;
        document.getElementById('stopwatchDisplay').innerText = formatTime(stopwatchTime);
      }, 1000);
    }
  }
  
  function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = null;
    stopwatchTime = 0;
    document.getElementById('stopwatchDisplay').innerText = '00:00';
  }
  
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }
  