(() => {
    // player object to build both player characters, returning respective pieces.
    // const player = (name, playerNum) => {
    //     let playerPiece = playerNum == 1 ? "X" : "O";
    //     let winner = false;

    //     return{ name, playerPiece, playerNum, winner };
    // }

    const player = (name, playerIcon) => {
        return{ 
            name: name,
            playerIcon: playerIcon,
            placeIcon: function(){
                return playerIcon.cloneNode(true);
            }, 
            winner: false
        };
    }

    // Game _board object that builds, returns, and rests.
    const gameBoard = (function() {
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
        const placePiece = (player, row, col) => {
            _board[row][col] = player.Piece();
        }

        // check for a winner of the game and display who won
        const checkWinner = (Player1, Player2) => {
            // loops through the rows of the _board checking if any are full
            for(let i = 0; i < _board.length; i++){
                if(_board[i].every((sq) => sq == Player1.playerIcon)){
                    Player1.winner = true;
                }
                else if(_board[i].every((sq) => sq == Player2.placeIcon)){
                    Player2.winner = true;
                }
            }

            // loop through the columns of _board to see if they match
            for(let i = 0; i < 3; i++){
                if(_board[0][i] == Player1.playerIcon && _board[1][i] == Player1.playerIcon && _board[2][i] == Player1.playerIcon){
                    Player1.winner = true;
                }
                else if(_board[0][i] == Player2.placeIcon && _board[1][i] == Player2.placeIcon && _board[2][i] == Player2.placeIcon){
                    Player2.winner = true;
                }
            }

            // check both diagonals for a winner 
            if((_board[0][0] == Player1.playerIcon && _board[1][1] == Player1.playerIcon && _board[2][2] == Player1.playerIcon) ||
            (_board[0][2] == Player1.playerIcon && _board[1][1] == Player1.playerIcon && _board[2][0] == Player1.playerIcon)){
                Player1.winner = true;
            }
            else if((_board[0][0] == Player2.placeIcon && _board[1][1] == Player2.placeIcon && _board[2][2] == Player2.placeIcon) ||
            (_board[0][2] == Player2.placeIcon && _board[1][1] == Player2.placeIcon && _board[2][0] == Player2.placeIcon)){
                Player2.winner = true;
            }
        }

        // return the methods that will be used 
        return { getBoard, resetBoard, placePiece, checkWinner }
    })();

    const gameSystem = (player1, player2, board) => {
        let turn = 0;

        while(player1.winner === false && player2.winner === false && turn < 9){
            board.getBoard();

            if((turn % 2) == 0){
                let movePlayer1 = prompt(player1.name + " enter a square (1-9):");

                let confirmPlayer1 = board.placePiece(player1, movePlayer1);

                if(!confirmPlayer1){
                    continue;
                }

                turn+=1;
            }
            else if((turn % 2) == 1){
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

    let clone1 = player1Icon.cloneNode(true);
    let clone2 = player2Icon.cloneNode(true);
  
    let rows = document.getElementsByClassName("row boxes");

    const addClickEvents = (player) => {
        for(let i = 0; i < 3; i++){
            let leftBox = rows[i].querySelector(".left");
            let midBox = rows[i].querySelector(".mid");
            let rightBox = rows[i].querySelector(".right");

            leftBox.addEventListener("click", () => {
                
                leftBox.innerHTML = "";
                leftBox.appendChild(player.placeIcon());
            })

            midBox.addEventListener("click", () => {
                
                midBox.innerHTML = "";
                midBox.appendChild(player.placeIcon());
            })

            rightBox.addEventListener("click", () => {
                
                rightBox.innerHTML = "";
                rightBox.appendChild(player.placeIcon());
            })
        }
    }

    let newPlayer = player("alpha", clone1);
    let secondPlayer = player("beta", clone2);
  // let board = gameBoard();

    // gameSystem(newPlayer, secondPlayer, board);

    addClickEvents(secondPlayer);
})();