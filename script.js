const gameBoard = (() => {
    let gameBoard = [];
    const form = document.querySelector('#form');
    const board = document.querySelector('#board');
    const restart = document.querySelector('#restart');
    const players = [];

    form.addEventListener('submit', handleSubmit);

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        for (const pair of formData.entries()) {
            const number = pair[0];
            const name = pair[1];


            if (number === 'playerOne') {
                const marker = 'X';
                const player = createPlayer(name, marker);

                players.push(player);
            } else {
                const marker = 'O';
                const player = createPlayer(name, marker);

                players.push(player);
            }
        }

        board.classList.remove('hide');
        restart.classList.remove('hide')
        form.classList.add('hide');
    }

    const createPlayer = (name, marker) => {
        return {
            name,
            marker
        };
    }
    const renderBoard = (square, marker) => {
        square.textContent = marker;
    };
    const addMarker = (marker, squarePlace) => {
        gameBoard.push({
            marker,
            squarePlace
        });
    };
    const checkResult = () => {
        const conditions = [
            [1, 2, 3],
            [1, 4, 7],
            [1, 5, 9],
            [2, 5, 8],
            [3, 5, 7],
            [3, 6, 9],
            [4, 5, 6],
            [7, 8, 9]
        ]

        return conditions.some(function (condition, index) {
            const winningValues = gameBoard.filter((turn) => condition.includes(turn.squarePlace));
            const isSameMarker = winningValues.every(({ marker }) => marker === winningValues[0].marker);

            if (winningValues.length === 3) { // Because the code will run always
                if (isSameMarker) {
                    if (winningValues[0].marker === 'X') {
                        console.log('Player 1 is the winner.');
                        return true;
                    } else {
                        console.log('Player 2 is the winner.');
                        return true;
                    }
                } else if (index === 7 && gameBoard.length === 9) {
                    console.log('Tie!');
                    return true;
                }
            }
        })
    }

    return {
        renderBoard,
        addMarker,
        checkResult,
        players,
        gameBoard
    };
})();

const displayController = (() => {
    let turn = 1;
    let isOver = false;
    let squares = document.querySelectorAll('.square');

    restart.addEventListener('click', restartGame);

    const playRound = () => {
        squares.forEach(square => {
            square.addEventListener('click', () => {
                if (square.textContent === '') {
                    console.log(turn);
                    if (!isOver) {
                        const squarePlace = parseInt(square.dataset.place);
                        if (turn % 2 !== 0) {
                            let player = gameBoard.players[0];
                            let marker = player.marker;

                            gameBoard.addMarker(marker, squarePlace);
                            turn++;

                            if (turn >= 5) {
                                if (gameBoard.checkResult()) {
                                    isOver = true;
                                }
                            }
                            gameBoard.renderBoard(square, marker);
                        } else {
                            let player = gameBoard.players[1];
                            let marker = player.marker;

                            gameBoard.addMarker(marker, squarePlace);
                            turn++;

                            if (turn >= 5) {
                                if (gameBoard.checkResult()) {
                                    isOver = true;
                                };
                            }
                            gameBoard.renderBoard(square, marker);
                        }
                    }
                }
            }/* , { once: true } */);
        });
    }

    function restartGame() {
        gameBoard.gameBoard = [];

        squares.forEach(square => {
            square.textContent = '';
        })

        turn = 1;
    }

    return {
        playRound
    }
})();

displayController.playRound();

