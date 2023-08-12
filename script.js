const gameBoard = (() => {
    const form = document.querySelector('#form');
    const players = [];
    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData(form);
        const Player = (name, mark) => {
            const playerName = name;
            const playerMark = 'X';

            return { playerName, playerMark };
        }

        for (const value of formData.values()) {
            const player = Player(value);

            players.push(player);
            console.log(players);
        }
    }

    form.addEventListener('submit', handleSubmit);
})();