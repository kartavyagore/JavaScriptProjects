const prompt = require('prompt-sync')(); //Import prompt sync
let gameBoard = [' ',' ',' ',' ',' ',' ',' ',' ',' ']; //Intializing gameboard
let currentPlayer = 'X'; //Starting player
let gameActive = true; //Starting game state

function printBoard(){ // (`` = this is a template string)
    console.log(` 
        ${gameBoard[0]} | ${gameBoard[1]} | ${gameBoard[2]}
        ---------
        ${gameBoard[3]} | ${gameBoard[4]} | ${gameBoard[5]}
        ---------
        ${gameBoard[6]} | ${gameBoard[7]} | ${gameBoard[8]}
    `);
}

function handleMove(position){
    if(gameBoard[position] == ' '){
        gameBoard[position] = currentPlayer;
    }else{
        console.log('Disat nahi ka bro cell is taken already.');
        return false; //skip rest of code.
    }
    if(checkWin()){
        printBoard();
        console.log(` ${currentPlayer} bhava tu jinklas !`);
        gameActive = false;
        return true;
    }
    if(gameBoard.every(cell => cell !== ' ')){
        printBoard();
        gameActive = false;
        console.log('Game draw zala bhavano!');
        return true;
    }
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; //switch player
}

function checkWin(){
    const conditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    return conditions.some(condition => {
        const [a,b,c] = condition;
        return gameBoard[a] === currentPlayer && gameBoard[b] === currentPlayer && gameBoard[c] === currentPlayer;
    })
}

while(gameActive){
    printBoard();
    const position = prompt(` ${currentPlayer} bhava tu Khel. 0-8 mdhe enter kar :  `);

    if(position < 0 || position > 8){
        console.log('Bhava 0-8 enter kar na.');
    } else{
        handleMove(parseInt(position))
    }
}

//printBoard();