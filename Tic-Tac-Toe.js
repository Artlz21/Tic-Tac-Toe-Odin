(() => {
// player object to build both player characters, returning respective pieces.
// const player = (name, playerNum) => {
//     let playerPiece = playerNum == 1 ? "X" : "O";
//     let winner = false;

//     return{ name, playerPiece, playerNum, winner };
// }

const player = (name, playerIcon) => {
    let playerPiece = playerIcon
    let winner = false;

    return{ name, playerPiece, winner };
}

// Game _board object that builds, returns, and rests.
const gameBoard = () => {
    let _board = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ]

    // retrieve current state of _board (at beginning of game empty)
    const getBoard = () => {
        console.log(_board)
    }

    // clear _board to be reused if playing again
    const resetBoard = () => {
        _board = [
            ['1','2','3'],
            ['4','5','6'],
            ['7','8','9']
        ]
    }

    // take in the player making an action and the square they select. place respective
    // piece on selected square, if occupied stop action and wait to used again
    const placePiece = (actor, square) => {
        for(let i = 0; i < _board.length; i++){
            for(let j = 0; j < _board[i].length; j++){
                if(_board[i][j] == square){
                   if(_board[i][j] != 'X' && _board[i][j] !='O'){
                        _board[i][j] = actor.playerPiece;
                        return true;
                    }
                    else{
                        console.log("Invalid move...");
                        return false;
                    } 
                }
            }
        }
        
        console.log("Invalid move...");
        return false;
    }

    // check for a winner of the game and display who won
    const checkWinner = (Player1, Player2) => {
        // loops through the rows of the _board checking if any are full
        for(let i = 0; i < _board.length; i++){
            if(_board[i].every((sq) => sq == 'X')){
                Player1.winner = true;
            }
            else if(_board[i].every((sq) => sq == 'O')){
                Player2.winner = true;
            }
        }

        // loop through the columns of _board to see if they match
        for(let i = 0; i < 3; i++){
            if(_board[0][i] == 'X' && _board[1][i] == 'X' && _board[2][i] == 'X'){
                Player1.winner = true;
            }
            else if(_board[0][i] == 'O' && _board[1][i] == 'O' && _board[2][i] == 'O'){
                Player2.winner = true;
            }
        }

        // check both diagonals for a winner 
        if((_board[0][0] == 'X' && _board[1][1] == 'X' && _board[2][2] == 'X') ||
        (_board[0][2] == 'X' && _board[1][1] == 'X' && _board[2][0] == 'X')){
            Player1.winner = true;
        }
        else if((_board[0][0] == 'O' && _board[1][1] == 'O' && _board[2][2] == 'O') ||
        (_board[0][2] == 'O' && _board[1][1] == 'O' && _board[2][0] == 'O')){
            Player2.winner = true;
        }
    }

    // return the methods that will be used 
    return { getBoard, resetBoard, placePiece, checkWinner }
}

const gameSystem = (player1, player2, board) => {
    let count = 0;

    while(player1.winner === false && player2.winner === false && count < 9){
        board.getBoard();

        if((count % 2) == 0){
            let movePlayer1 = prompt(player1.name + " enter a square (1-9):");

            let confirmPlayer1 = board.placePiece(player1, movePlayer1);

            if(!confirmPlayer1){
                continue;
            }

            count+=1;
        }
        else if((count % 2) == 1){
            let movePlayer2 = prompt(player2.name + " enter a square (1-9):");

            let confirmPlayer2 = board.placePiece(player2, movePlayer2);

            if(!confirmPlayer2){
                continue;
            }

            count+=1;
        }

        board.checkWinner(player1, player2);
    }

    board.getBoard();

    if(player1.winner == true){
        console.log(player1.name + " wins!");
    }
    else if(player2.winner == true){
        console.log(player2.name + " wins!");
    }
    else{
        console.log("Draw");
    }
}

let player1Icon = document.querySelector("#player-1-icon");
let player2Icon = document.querySelector("#player-2-icon");

// let newPlayer = player("alpha", 1);
// let secondPlayer = player("beta", 2);
// let board = gameBoard();

// gameSystem(newPlayer, secondPlayer, board);
})();