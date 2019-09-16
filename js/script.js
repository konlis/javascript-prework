const stone = 'kamień';
const paper = 'papier';
const scissors = 'nozyczki';

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');

let computerMove, playerMove, randomNumber;

function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    playerMove = getMoveName(argButtonName);
    console.log('ruch gracza to: ' + playerMove);
    randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
}

function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
        return stone;
    } else if (argMoveId == 2) {
        return paper;
    } else if (argMoveId == 3) {
        return scissors;
    } else {
        printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
        return stone;
    }
}

function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if (argPlayerMove == paper && argComputerMove == stone) {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == stone && argComputerMove == scissors) {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == scissors && argComputerMove ==paper) {
        printMessage('Wygrywasz!');
    } else if (argPlayerMove == argComputerMove) {
        printMessage('Remis!');
    } else {
        printMessage('Przegrywasz :(');
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
}

buttonRock.addEventListener('click', function () {
    buttonClicked(1);
});
buttonPaper.addEventListener('click', function () {
    buttonClicked(2);
});
buttonScissors.addEventListener('click', function () {
    buttonClicked(3);
});
