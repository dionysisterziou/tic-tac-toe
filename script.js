const gameBoard = (() => {
    const gameBoard = ['X', 'O', 'X', 'O'];

    function renderBoard() {
        const divs = document.querySelectorAll('.item');

        divs.forEach((div, index) => {
            div.textContent = gameBoard[index];
        });
    }

    return {
        renderBoard
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
const player2 = Player('Jim', 'O');

displayController.renderBoard;















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

