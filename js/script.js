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

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
console.log('Gracz wpisał: ' + playerInput);

let playerMove = getMoveName(playerInput);
printMessage('Ruch gracza to: ' + playerMove);

displayResult(computerMove, playerMove);
