var randomNumber = 0;
var btnCheck = document.getElementById("btnCheck")
var btnAgain = document.getElementById("btnAgain")

btnCheck.addEventListener("click", checkNumber);
btnAgain.addEventListener("click", startGame);


window.addEventListener("load", startGame);

function startGame() {
    var scoreText = document.getElementById("score")
    var numberCorrect = document.getElementById("correctNumber")

    randomNumber = generateRandomNumber()
    btnCheck.disabled = false;
    document.getElementById("inputNumber").value = 0
    numberCorrect.innerHTML = '?'

    if(scoreText == 0 ) {
        scoreText.innerHTML = '20'
    }

}

function endGame() {
    btnCheck.disabled = true;

}


function checkNumber() {
    var numberCorrect = document.getElementById("correctNumber")
    var scoreText = document.getElementById("score")
    var highscoreText = document.getElementById("highScore")
    var playerGuess = document.getElementById("inputNumber").value

    if(playerGuess == randomNumber) {
        changeMessage("lightgreen", `🎉 Correct! The number was ${playerGuess}!`)
        scoreText.innerHTML = parseInt(scoreText.innerHTML) + 1
        numberCorrect.innerHTML = playerGuess
        highscoreText.innerHTML = parseInt(highscoreText.innerHTML) + 1
        endGame()
    } else if(playerGuess > randomNumber) {
        changeMessage("yellow", `👇 Wrong! The number is lower`)
        scoreText.innerHTML = parseInt(scoreText.innerHTML) - 1
    } else if(playerGuess < randomNumber) {
        changeMessage("yellow", `👆 Wrong! The number is higher`)
        scoreText.innerHTML = parseInt(scoreText.innerHTML) - 1
    } 

    if(parseInt(scoreText.innerHTML) == -1) {
        scoreText.innerHTML = '0'
        changeMessage("red", `😔 GAME OVER! The number was ${randomNumber}`)
        endGame()
    }
    
}


function generateRandomNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

function changeMessage(color, text) {
    var messageId = document.getElementById("message")
    messageId.style.color = color;
    messageId.innerHTML = text
}