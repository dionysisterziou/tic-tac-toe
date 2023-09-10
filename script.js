const gameBoard = (() => {
    let turn = 'playerOne';
    const gameBoard = [];
    const renderBoard = () => {
        const squares = document.querySelectorAll('.square');
        
        squares.forEach(square => {
            const squareNumber = square.dataset.number;

            gameBoard.forEach(turn => {
                if (squareNumber === turn.square) {
                    square.textContent = turn.marker;
                }
            })
        })
    }
    const addMarker = () => {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (turn === 'playerOne') {
                    gameBoard.push({
                        marker: 'X',
                        square: square.dataset.number
                    });
                    turn = 'playerTwo';
                } else {
                    gameBoard.push({
                        marker: 'O',
                        square: square.dataset.number
                    });
                    turn = 'playerOne';
                }

                renderBoard();
            }, { once: true });
        });
    }

    return {
        renderBoard,
        addMarker
    };
})();

const displayController = (() => {
    /* Testing */
    let turn = 'playerOne';

    const renderBoard = gameBoard.renderBoard();

    return {
        renderBoard
    }
})(/*gameBoard.renderBoard */);

const Player = (name) => {
    return { name };
}

gameBoard.addMarker();