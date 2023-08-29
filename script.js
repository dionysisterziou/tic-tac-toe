const gameBoard = (() => {
    const gameBoard = [];

    function renderBoard() {
        const divs = document.querySelectorAll('.item');

        divs.forEach((div, index) => {
            div.textContent = gameBoard[index];
        });
    }

    function addMark() {
        const divs = document.querySelectorAll('.item');

        divs.forEach((div) => {
            div.addEventListener('click', () => {
                div.textContent = 'X';
            });
        });
    }

    return {
        renderBoard,
        addMark
    };
})();

const displayController = (() => {
    const renderBoard = gameBoard.renderBoard();

    return {
        renderBoard
    }
})(gameBoard.renderBoard());

const Player = (name, mark) => {
    return { name, mark };

}

const player1 = Player('Nick', 'X');

// displayController.renderBoard;
gameBoard.addMark();















// const gameBoard = (() => {
//     const form = document.querySelector('#form');
//     const players = [];
//     const handleSubmit = (event) => {
//         event.preventDefault();

//         const formData = new FormData(form);
//         const Player = (playerName, playerMark) => {
//             return { playerName, playerMark };
//         }

//         for (const pair of formData.entries()) {
//             const playerNumber = pair[0];
//             const playerName = pair[1];
//             const player = playerNumber === 'playerOne'
//                 ? Player(playerName, 'X')
//                 : Player(playerName, 'O');

//             players.push(player);
//         }
//     }

//     form.addEventListener('submit', handleSubmit);
// })();

