// susieju HTML elementus prie JS
var score = document.getElementById('score')
var player1Score = document.getElementById('player1score')
var player2Score = document.getElementById('player2score')
var rules = document.getElementById('rules')
var maxScoreInput = document.getElementById('maxScore')
var player1Button = document.getElementById('player1')
var player2Button = document.getElementById('player2')
var resetButton = document.getElementById('reset')

// Default values
var dScore1 = 0
var dScore2 = 0
var dMaxScore = 5

// Rezultato atvaizdavimas + taisykliu atvaizdavimas
player1Score.textContent = dScore1
player2Score.textContent = dScore2
rules.textContent = dMaxScore

// Funkcija -- Atnaujina rezultata
function updateScore(){
    player1Score.textContent = dScore1
    player2Score.textContent = dScore2
}

// Funkcija -- Nulina zaidimo taisykles
function resetScore(){
    dScore1 = 0
    dScore2 = 0
    dMaxScore = 5
}

// Keiciant input reiksme keiciama ir "playing to: x" dalis + validacija, jog neleistu neigiamu skaiciu
maxScoreInput.addEventListener('input', function(){
    var inputMaxScore = parseInt(maxScoreInput.value)
    if (!isNaN(inputMaxScore) && inputMaxScore > 0){
        dMaxScore = inputMaxScore
        rules.textContent = dMaxScore
    } else {
        maxScoreInput.value = dMaxScore
    }
})

// Mygtukai - Player 1
player1Button.addEventListener("click", function(){
    if (dScore1 < dMaxScore && dScore2 < dMaxScore) {
        dScore1++
        updateScore()
    }
})

// Mygtukai -- Player 2
player2Button.addEventListener("click", function(){
    if (dScore1 < dMaxScore && dScore2 < dMaxScore) {
        dScore2++
        updateScore()
    }
})

// Mygtukai -- Reset
resetButton.addEventListener("click", function(){
    resetScore()
    updateScore()
    rules.textContent = dMaxScore
})