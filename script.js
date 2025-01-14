function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    const dice = document.getElementById('dice');
    const message = document.getElementById('message');

    // Display dice face
    dice.textContent = getDiceFace(roll);

    // Check win condition
    if (roll > 2) {
        message.textContent = `You rolled a ${roll}! Congratulations, you win! 🎉`;
        message.style.color = 'green';
    } else {
        message.textContent = `You rolled a ${roll}. Oh no, you lose! 😢`;
        message.style.color = 'red';
    }
}

function getDiceFace(number) {
    const diceFaces = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅'];
    return diceFaces[number - 1];
}



