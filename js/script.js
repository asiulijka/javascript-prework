{
  const playGame = function(playerInput) {

  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  const computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera to: ' + computerMove);

  const playerMove = getMoveName(playerInput);
  printMessage('Ruch gracza to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

// Listener 1
const testButtonRock = document.getElementById('play-rock');
testButtonRock.addEventListener('click', function() {
  playGame(1);
});

// Listener 2
const testButtonPaper = document.getElementById('play-paper');
testButtonPaper.addEventListener('click', function(){
  playGame(2);
});

// Listener 3
const testButtonScissors = document.getElementById('play-scissors');
testButtonScissors.addEventListener('click', function(){
  playGame(3);
});

}
