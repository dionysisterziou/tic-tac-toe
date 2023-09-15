const gameBoard = (() => {
    let player = 1;
    const gameBoard = [];
    const renderBoard = (square, marker) => {
        square.textContent = marker;
    }
    const addMarker = (marker, square) => {
        gameBoard.push({
            marker,
            square
        });
    }
    const changePlayer = () => {
        if (player === 1) {
            player = 2;
            return 'X';
        } else {
            player = 1;
            return 'O';
        }
    }

    return {
        renderBoard,
        addMarker,
        changePlayer
    };
})();

const displayController = (() => {
    const playRound = () => {
        const squares = document.querySelectorAll('.square');

        squares.forEach(square => {
            square.addEventListener('click', () => {
                const squarePlace = square.dataset.place;
                let marker = gameBoard.changePlayer();


                gameBoard.addMarker(marker, squarePlace);
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