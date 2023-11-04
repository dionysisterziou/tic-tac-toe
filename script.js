const GameBoard = (function () {
  const gameBoard = [];
  const getGameBoard = () => [...gameBoard];
  const getTurn = () => turn;
  const incrementTurn = () => turn++;
  let turn = 1;

  return { getGameBoard, getTurn, incrementTurn };
})();

const DisplayController = (function () {
  const gameBoard = GameBoard.getGameBoard();
  const squares = document.querySelector("#board");
  const form = document.querySelector("#form");
  const maxTurns = 9;
  const renderBoard = () => squares.addEventListener("click", addMarker);
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
    const square = event.target;
    const turn = GameBoard.getTurn();
    const isSquareEmpty = square.textContent === "" ? true : false;

    if (isSquareEmpty) {
      const position = parseInt(square.getAttribute("data-position"));
      const marker = isOdd(turn) ? "X" : "O";

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

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const playerOneName = document.querySelector("#playerOneName").value;
    const playerTwoName = document.querySelector("#playerTwoName").value;

    const playerOne = createPlayer(playerOneName, "X");
    const playerTwo = createPlayer(playerTwoName, "O");

    console.log(playerOne, playerTwo);
  })

  return { renderBoard };
})();

function createPlayer(name, marker) {
  return {
    name,
    marker
  }
}

DisplayController.renderBoard();