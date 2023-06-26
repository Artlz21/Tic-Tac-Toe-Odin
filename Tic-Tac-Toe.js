// player object to build both player characters, returning respective pieces.
const player = (name, playerNum) => {
    let playerPiece = playerNum == 1 ? "X" : "O";

    return{ name, playerPiece, playerNum };
}

// Game board object that builds, returns, and rests.
const gameBoard = (Player1, Player2) => {
    let board = [
        ['1','2','3'],
        ['4','5','6'],
        ['7','8','9']
    ]

    // retrieve current state of board (at beginning of game empty)
    const getBoard = () => {
        console.log(board)
    }

    // clear board to be reused if playing again
    const resetBoard = () => {
        board = [
            ['1','2','3'],
            ['4','5','6'],
            ['7','8','9']
        ]
    }

    // take in the player making an action and the square they select. place respective
    // piece on selected square, if occupied stop action and wait to used again
    const placePiece = (actor, square) => {
        for(let i = 0; i < board.length; i++){
            for(let j = 0; j < board[i].length; j++){
                if(board[i][j] == 'X' || board[i][j] =='O'){
                    console.log("Invalid move...");
                    return
                }
                if(board[i][j] == square){
                    board[i][j] = actor.playerPiece;
                    return;
                }
            }
        }
    }

    // check for a winner of the game and display who won
    const checkWinner = () => {
        // loops through the rows of the board checking if any are full
        for(let i = 0; i < board.length; i++){
            if(board[i].every((sq) => sq == 'X')){
                return console.log(Player1.name + " wins!");
            }
            else if(board[i].every((sq) => sq == 'O')){
                return console.log(Player2.name + " wins!");
            }
        }

        // loop through the columns of board to see if they match
        for(let i = 0; i < 3; i++){
            if(board[0][i] == 'X' && board[1][i] == 'X' && board[2][i] == 'X'){
                return console.log(Player1.name + " wins!");
            }
            else if(board[0][i] == 'O' && board[1][i] == 'O' && board[2][i] == 'O'){
                return console.log(Player2.name + " wins!");
            }
        }

        // check both diagonals for a winner 
        if((board[0][0] == 'X' && board[1][1] == 'X' && board[2][2] == 'X') ||
        (board[0][2] == 'X' && board[1][1] == 'X' && board[2][0] == 'X')){
            return console.log(Player1.name + " wins!");
        }
        else if((board[0][0] == 'O' && board[1][1] == 'O' && board[2][2] == 'O') ||
        (board[0][2] == 'O' && board[1][1] == 'O' && board[2][0] == 'O')){
            return console.log(Player2.name + " wins!");
        }
    }

    // return the methods that will be used 
    return { getBoard, resetBoard, placePiece, checkWinner }
}

let newPlayer = player("a", 1)
let secondPlayer = player("b", 2)
let board = gameBoard();

board.getBoard()
board.placePiece(newPlayer,'9')
board.placePiece(secondPlayer,'9')
board.placePiece(newPlayer,'6')
board.getBoard()
board.resetBoard()
board.getBoard()