var titleEl = document.querySelector(".title");
var paraEl = document.querySelector(".para");
var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var questionsEl = document.getElementById("questions");
var answerButtons = document.querySelectorAll("answer-buttons");


// Creates beginning page
//https://stackoverflow.com/questions/6242976/javascript-hide-show-element
function renderCodeQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results").style.display = "none";
    titleEl.textContent = "Coding Quiz Challenge";
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
    startButton.addEventListener('click', startGame);
}

function startGame() {
    document.getElementById("start").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    setNextQuestion();
}

function setNextQuestion() {
    showQuestions(quizQuestions);

}

function showQuestions(question) {
    questionsEl.innerText = question.question;


    
}

function selectAnswer() {


}

// Questions courtesy of https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            1: "<javascript>",
            2: "<js>",
            3: "<script>",
            4: "<scripting>",
        },
        correctAnswer: '3'
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            1: "if (i == 5) ",
            2: "if i = 5 then",
            3: "if i = 5;",
            4: "if i == 5 then",
        },
        correctAnswer: '1'
    }
];

// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderCodeQuiz function will also execute
    renderCodeQuiz();
}
init();