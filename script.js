const GameBoard = (function () {
  const gameBoard = [];
  const players = [];
  const addPlayer = (player) => players.push(player);
  const getGameBoard = () => gameBoard;
  const getTurn = () => turn;
  const getPlayers = () => players;
  const incrementTurn = () => turn++;
  const restartTurn = () => turn = 1;
  const emptyGameBoard = () => gameBoard.length = 0;
  let turn = 1;

  return { getGameBoard, getTurn, incrementTurn, addPlayer, getPlayers, emptyGameBoard, restartTurn };
})();

const DisplayController = (function () {
  const gameBoard = GameBoard.getGameBoard();
  const players = GameBoard.getPlayers();
  const squares = document.querySelector("#board");
  const board = document.querySelector("#board");
  const form = document.querySelector("#form");
  const restartButton = document.querySelector("#restartButton");
  const maxTurns = 9;
  const renderBoard = () => squares.addEventListener("click", addMarker);
  const handleSubmit = () => form.addEventListener("submit", initializePlayers);
  const restartGame = () => restartButton.addEventListener("click", handleRestart);
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

  function addMarker(event) {
    const playerOne = players[0];
    const playerTwo = players[1];
    const square = event.target;
    const turn = GameBoard.getTurn();
    const isSquareEmpty = square.textContent === "" ? true : false;

    if (isSquareEmpty) {
      const position = parseInt(square.getAttribute("data-position"));
      const marker = isOdd(turn) ? playerOne.marker : playerTwo.marker;

      gameBoard.push({ marker, position });
      square.textContent = marker;

      const weHaveAWinner = checkResult();

      if (weHaveAWinner) {
        console.log("We have a winner!");
        squares.removeEventListener("click", addMarker);
      } else if (turn === maxTurns) {
        console.log("Draw");
      } else {
        GameBoard.incrementTurn();
      }
    }
  }

  function isOdd(number) {
    return number % 2 === 1;
  }

  function checkResult() {
    for (const condition of conditions) {
      const matchingSquares = gameBoard.filter((square) => condition.includes(square.position));

      if (matchingSquares.length === 3) {
        const isSameMarker = checkForSameMarker(matchingSquares);

        if (isSameMarker) {
          return true;
        }
      }
    }

    return null;
  }

  function checkForSameMarker(matchingSquares) {
    return matchingSquares.every((square) => square.marker === matchingSquares[0].marker);
  }

  function initializePlayers(event) {
    event.preventDefault();

    const playerOneName = document.querySelector("#playerOneName").value;
    const playerTwoName = document.querySelector("#playerTwoName").value;
    const playerOne = createPlayer(playerOneName, "X");
    const playerTwo = createPlayer(playerTwoName, "O");

    GameBoard.addPlayer(playerOne);
    GameBoard.addPlayer(playerTwo);

    board.classList.remove("hide-element");
    restartButton.classList.remove("hide-element");
    form.classList.add("hide-element");
  }

  function handleRestart() {
    const squares = document.querySelectorAll("#board button");

    squares.forEach((square) => {
      square.textContent = "";
    });

    GameBoard.emptyGameBoard();
    GameBoard.restartTurn();
  }

  return {
    renderBoard,
    handleSubmit,
    restartGame
  };
})();

function createPlayer(name, marker) {
  return {
    name,
    marker
  }
}

DisplayController.renderBoard();
DisplayController.handleSubmit();
DisplayController.restartGame();