const gameBoard = (() => {
    const form = document.querySelector('#form');
    const players = [];
    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData(form);
        const Player = (name, mark) => {
            const playerName = name;
            const playerMark = mark;

            return { playerName, playerMark };
        }

        for (const pair of formData.entries()) {
            const playerNumber = pair[0];
            const playerName = pair[1];

            const player = playerNumber === 'playerOne' 
                ? Player(playerName, 'X') 
                : Player(playerName, 'O');

            players.push(player);
        }

        console.log(players);
    }

    form.addEventListener('submit', handleSubmit);
})();