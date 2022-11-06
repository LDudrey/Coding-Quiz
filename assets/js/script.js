var timeEl = document.querySelector(".time");
var questionEl = document.querySelector(".question");
var paraEl = document.querySelector(".para");
var answerEl = document.querySelector(".answer");
var startButton = document.querySelector(".start");
var quizResult = document.querySelector("results");
var submitButton = document.querySelector("submit");

// Creates beginning page
function renderCodeQuiz() {
    questionEl.textContent = "Coding Quiz Challenge";
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
    startButton.addEventListener("click", showQuestions);
    startButton.addEventListener("click", countDown);
}

// Timer
function countDown() {
    var secondsLeft = 10;
    // Sets interval in variable
    var timeInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = "Time Left: " + secondsLeft;
        } else if (secondsLeft === 0) {
            timeEl.textContent = "Time Left: " + secondsLeft;
            clearInterval(timeInterval);
            displayMessage();
        }
    }, 1000);
};

// Questions courtesy of https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
function showQuestions() {
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            1: "<javascript>",
            2: "<js>",
            3: "<script>",
            4: "<scripting>"
        },
        correctAnswer: '3'
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            1: "if (i == 5)",
            2: "if i = 5 then",
            3: "if i == 5 then",
            4: "if i = 5"
        },
        correctAnswer: '1'
    },
];

};





// Displays times up message and results of score?
function displayMessage() {
    questionEl.textContent = "Times Up!"
    paraEl.textContent = "Try to answer all the questions before the time runs out!"
}


// Function to show end score result after all answers completed
// function quizResult () {
//     questionEl.textContent = "All done!"
//     paraEl.textContent = "Your score is" + scoreTotal;


// }




// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderCodeQuiz function will also execute
    renderCodeQuiz();
}
init();