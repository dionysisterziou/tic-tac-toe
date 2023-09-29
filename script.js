const gameBoard = (() => {
    const gameBoard = [];
    let player = 1;

    const renderBoard = (square, marker) => {
        square.textContent = marker;
    };
    const addMarker = (marker, squarePlace) => {
        gameBoard.push({
            marker,
            squarePlace
        });
    };
    const changePlayer = () => {
        if (player === 1) {
            player = 2;
            return 'X';
        } else {
            player = 1;
            return 'O';
        }
    };
    const checkResult = () => {
        const winningCondition = [1, 2, 3];
        const filteredGameBoard = gameBoard.filter(turn => winningCondition.includes(turn.squarePlace));
        const isSameMarker = filteredGameBoard.every(({ marker }) => marker === filteredGameBoard[0].marker);

        if (isSameMarker) {
            if (filteredGameBoard[0].marker === 'X') {
                return 'Player 1 wins!';
            } else {
                return 'Player 2 wins!';
            }
        } else {
            return 'Tie!';
        }
    }

    return {
        renderBoard,
        addMarker,
        changePlayer,
        checkResult, 
    };
})();

const displayController = (() => {
    let turn = 0;
    
    const playRound = () => {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                const squarePlace = parseInt(square.dataset.place);
                let marker = gameBoard.changePlayer();

                gameBoard.addMarker(marker, squarePlace);
                turn++;
                if (turn >= 5) {
                    console.log(gameBoard.checkResult());
                }
                gameBoard.renderBoard(square, marker);
            }, { once: true });
        });
    }

    return {
        playRound
    }
})();

const Player = (name) => {
    return { name };
}

displayController.playRound();