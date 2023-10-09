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
        const conditions = [
            [1, 2, 3],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 6, 9],
            [4, 5, 6],
            [7, 8, 9]
        ]

        return conditions.some(function (condition) {
            const filteredGameBoard = gameBoard.filter((turn) => condition.includes(turn.squarePlace));
            const isSameMarker = filteredGameBoard.every(({ marker }) => marker === filteredGameBoard[0].marker);

            if (filteredGameBoard.length === 3) { // Because the code will run always
                if (isSameMarker) {
                    if (filteredGameBoard[0].marker === 'X') {
                        console.log('Player 1 is the winner.');
                        return true;
                    } else {
                        console.log('Player 2 is the winner.');
                        return true;
                    }
                } else if (gameBoard.length === 9) {
                    console.log('Tie!');
                    return true;
                }
            }
        })
    }

    return {
        renderBoard,
        addMarker,
        changePlayer,
        checkResult
    };
})();

const displayController = (() => {
    let turn = 0;
    let isOver = false;

    const playRound = () => {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (!isOver) {
                    const squarePlace = parseInt(square.dataset.place);
                    let marker = gameBoard.changePlayer();

                    gameBoard.addMarker(marker, squarePlace);
                    turn++;
                    if (turn >= 5) {
                        if (gameBoard.checkResult()) {
                            isOver = true;
                        };
                    }
                    gameBoard.renderBoard(square, marker);
                }
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