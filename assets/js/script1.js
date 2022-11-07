quizContainer = document.getElementById('quiz');
resultsContainer = document.getElementById('results');
submitButton = document.getElementById('submit');

function buildQuiz(){}

function showResults(){}

// display quiz right away
buildQuiz();

// on submit, show results
submitButton.addEventListener('click', showResults);

// Questions courtesy of https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: {
            a: "<javascript>",
            b: "<js>",
            c: "<script>",
            d: "<scripting>"
        },
        correctAnswer: '3'
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: {
            a: "if (i == 5)",
            b: "if i = 5 then",
            c: "if i == 5 then",
            d: "if i = 5"
        },
        correctAnswer: '1'
    },
];