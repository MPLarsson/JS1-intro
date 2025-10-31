function guessNumberGame() {
	
	const target = Math.floor(Math.random() * 10) + 1;
	let attempts = 0;

	while (true) {
		const input = prompt('Guess a number between 1 and 10 (inclusive):');

		/* If the user pressed Cancel, prompt returns null — end the game */
		if (input === null) {
			alert(`Game cancelled. The number was ${target}.`);
			return null;
		}
        /* Converts input-string using a Number method instead of the previously used parseFloat*/
		const guess = Number(input);
		attempts += 1;

		/* Validate input: must be an integer between 1 and 10 */
		if (!Number.isInteger(guess)) {
			alert(`Please enter a whole number (e.g. 7).`);
			continue;
		}
		if (guess < 1 || guess > 10) {
			alert(`Out of range — enter a number between 1 and 10.`);
			continue;
		}

		/* Compare and give feedback */
		if (guess === target) {
			alert(`Correct! You guessed the number in ${attempts} attempt${attempts > 1 ? 's' : ''}.`);
			return attempts;
		} else if (guess < target) {
			alert(`Too low — try again.`);
		} else {
			alert(`Too high — try again.`);
		}
	}
}


document.getElementById('startGuessBtn').addEventListener('click', function () {
    guessNumberGame();
});
    



   
