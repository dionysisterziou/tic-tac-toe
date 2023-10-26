const GameBoard = (function () {
  const gameBoard = ['X', 'O', 'X'];

  return {
    getGameBoard: function () {
      return gameBoard;
    }
  }
})();

const DisplayController = (function () {
  const gameBoard = GameBoard.getGameBoard();
  const squares = document.querySelectorAll('#board button');

  squares.forEach(function (square, index) {
    square.textContent = gameBoard[index];
  })

  return {
    renderContent: function() {
      return gameBoard;
    }
  }
})();

console.log(DisplayController.renderContent());

function createPlayer(name, marker) {
  return {
    name,
    marker
  }
}


// const gameBoard = (() => {
//     const gameBoard = [];
//     const players = [];
//     // let turn = 1;
//     const form = document.querySelector('#form');
//     const board = document.querySelector('#board');
//     const restart = document.querySelector('#restart');

//     const getGameBoard = () => gameBoard;
//     // const getTurn = () => turn;
//     // const changeTurn = () => turn++;

//     form.addEventListener('submit', handleSubmit);

//     function handleSubmit(e) {
//         e.preventDefault();

//         const formData = new FormData(e.target);

//         for (const pair of formData.entries()) {
//             const number = pair[0];
//             const name = pair[1];
//             let marker = '';

//             if (number === 'playerOne') {
//                 marker = 'X';
//             } else {
//                 marker = 'O';
//             }

//             const player = createPlayer(name, marker);

//             players.push(player);
//         }

//         console.log(players);

//         board.classList.remove('hide');
//         restart.classList.remove('hide')
//         form.classList.add('hide');
//     }

//     const createPlayer = (name, marker) => {
//         return {
//             name,
//             marker
//         };
//     }
//     const renderBoard = (square, marker) => {
//         square.textContent = marker;
//     };
//     const addMarker = (marker, squarePlace) => {
//         gameBoard.push({
//             marker,
//             squarePlace
//         });
//     };
//     const checkResult = () => {
//         const conditions = [
//             [1, 2, 3],
//             [1, 4, 7],
//             [1, 5, 9],
//             [2, 5, 8],
//             [3, 5, 7],
//             [3, 6, 9],
//             [4, 5, 6],
//             [7, 8, 9]
//         ]

//         return conditions.some(function (condition, index) {
//             const winningValues = gameBoard.filter((turn) => condition.includes(turn.squarePlace));
//             const isSameMarker = winningValues.every(({ marker }) => marker === winningValues[0].marker);

//             if (winningValues.length === 3) { // Because the code will run always
//                 // console.log(winningValues);
//                 if (isSameMarker) {
//                     if (winningValues[0].marker === 'X') {
//                         console.log('Player 1 is the winner.');
//                         return true;
//                     } else {
//                         console.log('Player 2 is the winner.');
//                         return true;
//                     }
//                 } else if (index === 7 && gameBoard.length === 9) {
//                     console.log('Tie!');
//                     return true;
//                 }
//             }
//         })
//     }

//     return {
//         renderBoard,
//         addMarker,
//         checkResult,
//         players,
//         gameBoard, 
//         getGameBoard // Testing begins
//         /*  
//         getTurn,
//         changeTurn
//         */
//     };
// })();

// const displayController = (() => {
//     let turn = 1;
//     let isOver = false;
//     let squares = document.querySelectorAll('.square');
//     let restart = document.querySelector('#restart');
    
//     restart.addEventListener('click', restartGame);

//     const playRound = () => {
//         squares.forEach(square => {
//             square.addEventListener('click', () => {
//                 if (square.textContent === '') {
//                     console.log(turn);
//                     console.log(gameBoard.getGameBoard());
//                     if (!isOver) {
//                         const squarePlace = parseInt(square.dataset.place);
//                         if (turn % 2 !== 0) {
//                             let player = gameBoard.players[0];
//                             let marker = player.marker;

//                             gameBoard.addMarker(marker, squarePlace);
//                             turn++;
//                             gameBoard.renderBoard(square, marker);
//                         } else {
//                             let player = gameBoard.players[1];
//                             let marker = player.marker;

//                             gameBoard.addMarker(marker, squarePlace);
//                             turn++;
//                             gameBoard.renderBoard(square, marker);
//                         }

//                         if (turn > 5) {
//                             if (gameBoard.checkResult()) {
//                                 isOver = true;
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }

//     function restartGame() {
//         // console.log(gameBoard.gameBoard);
//         isOver = false;
//         gameBoard.gameBoard = [];
//         turn = 1;

//         squares.forEach(square => {
//             square.textContent = '';
//         })
//     }

//     return {
//         playRound,
//         restartGame
//     }
// })();

// displayController.playRound();