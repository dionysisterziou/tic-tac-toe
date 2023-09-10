const gameBoard = (() => {
    const gameBoard = [];
    let player = 'playerOne';

    function renderBoard() {
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

    function addMarker() {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (player === 'playerOne') {
                    gameBoard.push({
                        marker: 'X',
                        square: square.dataset.number
                    });
                    player = 'playerTwo';
                } else {
                    gameBoard.push({
                        marker: 'O',
                        square: square.dataset.number
                    });
                    player = 'playerOne';
                }

                console.log(gameBoard);
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
    const renderBoard = gameBoard.renderBoard();

    return {
        renderBoard
    }
})(gameBoard.renderBoard);

const Player = (name) => {
    return { name };

}

gameBoard.addMarker();