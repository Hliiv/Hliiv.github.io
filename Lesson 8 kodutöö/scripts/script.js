let guessedNumber = document.getElementById("guessedNumber");
let answerEl = document.getElementById("answer");
let guessBtn = document.getElementById("guessBtn");
let restartBtn = document.getElementById("restartBtn");
let generatedNumberEl = document.getElementById("generatedNumbers");
let remainingLivesEl = document.getElementById("remainingAnsw"); // Corrected ID
let pastAnswerEl = document.getElementById("pastAnswer");
let selectorEl = document.getElementById("selector");
let remainingLives = 5; // Initialize remaining lives to 5
let random1 = 0;
let random2 = 0;
let answers = [];
let pastEquasion = [];

NewGame();

// Functions
function Sum2Numbers(num1, num2) {
    return num1 + num2;
}

function SubtractNumbers(num1, num2) {
    return num1 - num2;
}

function GenerateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function SelectorChanged() {
    Restart(false);
}

function NewGame() {
    let maxGenerNumber = 11;
    let maxEquasion = 3;
    random1 = GenerateRandomNumber(1, maxGenerNumber);
    random2 = GenerateRandomNumber(1, maxGenerNumber);
    let isSubtraction = selectorEl.value === "-";
    let generatedEquasion = `${random1} ${isSubtraction ? "-" : "+"} ${random2} `;
    let foundEquasion = false;

    while (!foundEquasion) {
        foundEquasion = pastEquasion.indexOf(generatedEquasion.trim()) === -1;
        if (!foundEquasion) {
            random1 = GenerateRandomNumber(1, maxGenerNumber);
            random2 = GenerateRandomNumber(1, maxGenerNumber);
            isSubtraction = selectorEl.value === "-";
            generatedEquasion = `${random1} ${isSubtraction ? "-" : "+"} ${random2} `;
        }
        if (pastEquasion.length >= maxEquasion) {
            alert("You win. Reached maximum");
            pastEquasion = [];
            break;
        }
    }
    generatedNumberEl.innerHTML = generatedEquasion;
    remainingLives = 5; // Reset remaining lives to 5
    remainingLivesEl.innerHTML = remainingLives;

    guessedNumber.classList.remove("wrong");
    guessedNumber.classList.remove("correct");
    guessedNumber.disabled = false;
    guessedNumber.value = "";
    answerEl.innerHTML = "X";   
    restartBtn.style.display = "none";
    guessBtn.style.display = "block"; 
    guessBtn.disabled = true;
}

function WinPopUp() {
    if (confirm("Continue playing?")) {
        Restart(true);
    } else {
        guessedNumber.disabled = true;
        guessBtn.disabled = true;
        ShowPastAnswers();
    }
}

function LostPopUp() {
    remainingLives--; // Decrement remaining lives
    remainingLivesEl.innerHTML = remainingLives; // Update remaining lives display

    if (remainingLives === 0) {
        alert("Game over!");
        return;
    }

    if (confirm("Try again?")) {
        guessedNumber.value = "";
        answerEl.innerHTML = "X"; 
    } else {
        Restart(true);
    }
}

function GuessNumber() {
    let correctAnswer = selectorEl.value === "-" ? SubtractNumbers(random1, random2) : Sum2Numbers(random1, random2);

    answers.push({
        "PlayerAnswer": guessedNumber.value,
        "IsCorrect": guessedNumber.value == correctAnswer,
        "CorrectAnswer": correctAnswer,
        "Equation": (generatedNumberEl.innerHTML + "= " + correctAnswer)
    });

    if (guessedNumber.value == correctAnswer) {
        guessedNumber.classList.remove("wrong");
        guessedNumber.classList.add("correct");
        WinPopUp();
    } else {
        LostPopUp();
    }   
}

function guessChanged() {
    if (guessedNumber.value == "") {
        answerEl.innerHTML = "X";
        guessBtn.disabled = true;
    } else {
        answerEl.innerHTML = guessedNumber.value;
        guessBtn.disabled = false;
    }
}

function Restart(playerGuessed) {
    if (playerGuessed) {
        pastEquasion.push(generatedNumberEl.innerHTML.trim());
    }
    
    NewGame();
}

function ShowPastAnswers() {
    // Display past answers
}