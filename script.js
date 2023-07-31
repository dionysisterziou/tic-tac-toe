const gameBoard = (() => {
    const gameBoard = ['X', 'O'];
    const createPlayer = (name, mark) => {
        return { 
            name,
            mark,
         };
    }

    return {
        createPlayer,
    };
})();

const player1 = gameBoard.createPlayer('Jim', 'X');
const player2 = gameBoard.createPlayer('Nick', 'O');

console.log(player1);
console.log(player2);