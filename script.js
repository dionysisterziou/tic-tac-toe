const gameBoard = (() => {
    // let turn = 'playerOne';
    const gameBoard = [];
    // const renderBoard = () => {
    //     const squares = document.querySelectorAll('.square');

    //     squares.forEach(square => {
    //         const squareNumber = square.dataset.number;

    //         gameBoard.forEach(turn => {
    //             if (squareNumber === turn.square) {
    //                 square.textContent = turn.marker;
    //             }
    //         })
    //     })
    // }
    const renderBoard = (square, marker) => {
        // const squares = document.querySelectorAll('.square');

        // squares.forEach(square => {
        //     const squareNumber = square.dataset.number;

        //     gameBoard.forEach(turn => {
        //         if (squareNumber === turn.square) {
                    // square.textContent = turn.marker;
                    // console.log(square);
                    // console.log(squareNumber);
                    // console.log(marker);
                    // console.log(gameBoard);
                    square.textContent = marker;
                // }
            // })
        // })
    }
    const addMarker = (marker, square) => {
        gameBoard.push({
            marker,
            square
        });
    }

    return {
        /* renderBoard, */
        renderBoard,
        addMarker /*,
         gameBoard */
    };
})();

const displayController = (() => {
    // const renderBoard = gameBoard.renderBoard();

    /* Testing */
    const playRound = () => {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                const squarePlace = square.dataset.place;
                // const marker = 'X';

                gameBoard.addMarker(marker, squarePlace);
                gameBoard.renderBoard(square, marker);
            }, { once: true });
        });
    }

    return {
        playRound
    }
})(/*gameBoard.renderBoard */);

const Player = (name) => {
    return { name };
}

// gameBoard.addMarker('X');
displayController.playRound();