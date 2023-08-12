const gameBoard = (() => {
    const form = document.querySelector('#form');
    const players = [];
    const handleSubmit = event => {
        event.preventDefault();

        const formData = new FormData(form);
        const Player = name => {
            const playerName = name;

            return { playerName };
        }

        for (const value of formData.values()) {
            const player = Player(value);

            players.push(player);
        }
    }

    console.log(players);

    form.addEventListener('submit', handleSubmit);
})();