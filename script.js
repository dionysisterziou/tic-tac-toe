const gameBoard = (() => {
    // const gameBoard = [];
    const gameBoard = ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'];
    let player = 'playerOne';

    function renderBoard() {
        const squares = document.querySelectorAll('.square');

        /* Display gameBoard values */

        squares.forEach((square, index) => {
            square.textContent = gameBoard[index];
        })

        /* Testing */

        // gameBoard.forEach(marker => {
        //     console.log(marker);
        // })
        // gameBoard.forEach(turn => console.log(turn.square))
        // divs.forEach(element => {
        //     console.log(element.dataset.id);
        // })


    }

    function addMarker() {
        const squares = document.querySelectorAll('.square');

        squares.forEach((square) => {
            square.addEventListener('click', () => {
                if (player === 'playerOne') {
                    // gameBoard.push('X');
                    gameBoard.push({
                        marker: 'X',
                        square: square.dataset.id
                    });
                    player = 'playerTwo';
                } else {
                    // gameBoard.push('O');
                    gameBoard.push({
                        marker: 'O',
                        square: square.dataset.id
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