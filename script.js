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
            if (pair[0] === 'playerOne') {
                const player = Player(pair[1], 'X');
                players.push(player);
            } else {
                const player = Player(pair[1], 'O');
                players.push(player);
            }

            console.log(players);
        }
    }

    form.addEventListener('submit', handleSubmit);
})();