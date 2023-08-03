const gameBoard = (() => {
    const gameBoard = [];
    const buttonStart = document.querySelector('#buttonStart');
    const createPlayer = (/* name, */ /* mark */) => {
        const name = document.querySelector('#player_1').value;

        return {
            name,
            // mark,
        };
    }
    // const test = () => {
    //     console.log(document.querySelector('#player_1').value);
    // }

    buttonStart.addEventListener('click', createPlayer);

    return {
        createPlayer,
    };
})();

console.log(gameBoard);