function playGame(playerInput) {

  clearMessages();
  function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
    else{
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }
  function displayResult(argComputerMove, argPlayerMove) {
    if (
      (argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'papier'&& argPlayerMove == 'nożyce')) {
        printMessage('Gracz wygrywa!');
    } else if (
      (argComputerMove == 'nożyce' && argPlayerMove == 'papier') ||
      (argComputerMove == 'papier'&& argPlayerMove == 'kamień') ||
      (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') ||
      (argComputerMove == 'papier'&& argPlayerMove == 'nieznany ruch')  ||
      (argComputerMove == 'kamień' && argPlayerMove == 'nieznany ruch') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'nieznany ruch'))  {
        printMessage('Komputer wygrywa!');
    } else if (
      (argComputerMove == 'papier'&& argPlayerMove == 'papier') ||
      (argComputerMove == 'kamień' && argPlayerMove == 'kamień') ||
      (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce')) {
        printMessage('remis!');
    } else {
        printMessage('Gdzieś jest błąd');
    }
  }
  let randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  let computerMove = getMoveName(randomNumber);
  printMessage('Ruch komputera to: ' + computerMove);

  let playerMove = getMoveName(playerInput);
  printMessage('Ruch gracza to: ' + playerMove);

  displayResult(computerMove, playerMove);
}

// Listener 1
function buttonClickedRock(){
  playGame(1);
}
let testButtonRock = document.getElementById('play-rock');
testButtonRock.addEventListener('click', buttonClickedRock);

// Listener 2
function buttonClickedPaper(){
  playGame(2);
}
let testButtonPaper = document.getElementById('play-paper');
testButtonPaper.addEventListener('click', buttonClickedPaper);

// Listener 3
function buttonClickedScissors(){
  playGame(3);
}
let testButtonScissors = document.getElementById('play-scissors');
testButtonScissors.addEventListener('click', buttonClickedScissors);
