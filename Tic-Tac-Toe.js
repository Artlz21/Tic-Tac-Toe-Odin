(() => {
    const Player = (name, playerIcon) => {
        return{ 
            name: name, 
            playerPiece: playerIcon, 
            winner: false
        };
    }



    const GameBoard = (() => {
        let _board = [["","",""],["","",""],["","",""]];

        const getBoard = () => {
            return _board;
        }

        const resetBoard = () => {
            _board = [["","",""],["","",""],["","",""]];
        }

        

        return { getBoard, resetBoard }
    })();

})();