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
    const renderBoard = () => {
        // const squares = document.querySelectorAll('.square');

        // squares.forEach(square => {
        //     const squareNumber = square.dataset.number;

        //     gameBoard.forEach(turn => {
        //         if (squareNumber === turn.square) {
                    square.textContent = turn.marker;
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
    // const addMarker = (/* is was empty */ marker) => {
    //     const squares = document.querySelectorAll('.square');

    //     squares.forEach(square => {
    //         square.addEventListener('click', () => {
    //             // if (turn === 'playerOne') {
    //             //     gameBoard.push({
    //             //         // marker: 'X',
    //             //         marker: marker,
    //             //         square: square.dataset.number
    //             //     });
    //             //     // turn = 'playerTwo';
    //             // } else {
    //             //     gameBoard.push({
    //             //         // marker: 'O',
    //             //         marker: marker,
    //             //         square: square.dataset.number
    //             //     });
    //             //     // turn = 'playerOne';
    //             // }

    //             gameBoard.push({
    //                 marker: marker,
    //                 square: square.dataset.number
    //             });

    //             renderBoard();
    //         }, { once: true });
    //     });
    // }

    return {
        /* renderBoard, */
        renderBoard,
        addMarker,
        gameBoard
    };
})();

const displayController = (() => {
    // const renderBoard = gameBoard.renderBoard();

    /* Testing */
    let turn = 'playerOne';
    const printNewRound = () => {
        gameBoard.renderBoard();
    }
    const playRound = () => {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                let squareNumber = square.dataset.number;

                gameBoard.addMarker('X', squareNumber);
                printNewRound();
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