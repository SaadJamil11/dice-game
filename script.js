<!DOCTYPE html>
<html>
<head>
    <title>Dice Game</title>
    <script>
        function rollDice() {
            // This is JavaScript, not Python
            const diceValue = Math.floor(Math.random() * 6) + 1;
            document.getElementById("result").innerText = `You rolled a ${diceValue}!`;
        }
    </script>
</head>
<body>
    <h1>Dice Game</h1>
    <button onclick="rollDice()">Roll Dice</button>
    <p id="result"></p>
</body>
</html>


