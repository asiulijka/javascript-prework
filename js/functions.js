function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

const getMoveName = function(argMoveId){
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

const displayResult = function(argComputerMove, argPlayerMove) {
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
