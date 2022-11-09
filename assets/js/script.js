var timeEl = document.querySelector(".timer");
var titleEl = document.querySelector(".title");
var paraEl = document.querySelector(".para");
var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var questionsEl = document.getElementById("questions");
var answerElZero = document.getElementById("answers-0");
var answerElOne = document.getElementById("answers-1");
var answerElTwo = document.getElementById("answers-2");
var answerElThree = document.getElementById("answers-3");
var answerButtons = document.getElementById("answer-buttons");
var answerCorrect = document.getElementById("result");
var submitScore = document.getElementById("submit");
var userInitals = document.getElementById('user-initals');
var currentQuestionArrayIndex = 0;
var secondsLeft = 30;
var savedInitals = {
    userInitals: userInitals.value.trim(),
};

// Creates beginning page
//https://stackoverflow.com/questions/6242976/javascript-hide-show-element
function renderIntro() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score").style.display = "none";
    titleEl.textContent = "Coding Quiz Challenge";
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
    startButton.addEventListener('click', startQuiz);
};

function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    countDown();
    displayQuestions();
};

// Timer
function countDown() {
    var timeInterval = setInterval( function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = "Time Left: " + secondsLeft;
        } 
        if (secondsLeft === 0 || currentQuestionArrayIndex == 3) {
            timeEl.textContent = "Time Left: " + secondsLeft;
            document.getElementById("quiz-container").style.display = "none";
            document.getElementById("start").style.display = "none";
            document.getElementById("intro").style.display = "block";
            document.getElementById("score").style.display = "block";
            document.getElementById("submit").style.display = "block";
            titleEl.textContent = "All done!";
            paraEl.textContent = "Your final score is " + secondsLeft +"." + " Enter your initials";
            localStorage.setItem("savedInitals", JSON.stringify(savedInitals));
            clearInterval(timeInterval);
        }
    }, 1000);
};


// TA assistance with code
function displayQuestions() {
    var currentQuestion = quizQuestions[currentQuestionArrayIndex];
    for (i = 0; i < quizQuestions.length; i++) {
        questionsEl.textContent = currentQuestion.question;
        answerElZero.textContent = currentQuestion.answers[0];
        answerElOne.textContent = currentQuestion.answers[1];
        answerElTwo.textContent = currentQuestion.answers[2];
        answerElThree.textContent = currentQuestion.answers[3];
    }
};

function endQuiz() {
    if (currentQuestionArrayIndex >= 3) {
        document.getElementById("start").style.display = "none";
        document.getElementById("quiz-container").style.display = "none";
    } else {
        displayQuestions();
    }
};

// Assistance in solution from AskBCS and TA
// Found syntax for advancing questions: https://stackoverflow.com/questions/43502831/displaying-one-quiz-item-at-a-time
answerButtons.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.value == quizQuestions[currentQuestionArrayIndex].correctAnswer) {
        answerCorrect.textContent = "Correct!";
        localStorage.setItem("score", secondsLeft);
        ++currentQuestionArrayIndex;
        endQuiz();
    } else {
        answerCorrect.textContent = "Wrong!";
        secondsLeft -= 10;
        localStorage.setItem("score", secondsLeft);
        ++currentQuestionArrayIndex;
        endQuiz();
    }
}
);

// Questions courtesy of https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var quizQuestions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: ["<javascript>", "<js>", "<script>", "<scripting>"],
        correctAnswer: 2
    },
    {
        question: "How to write an IF statement in JavaScript?",
        answers: ["if (i == 5)", "if i = 5 then", "if i = 5;", "if i == 5 then"],
        correctAnswer: 0
    },
    {
        question: "How does a FOR loop start?",
        answers: ["for i = 1 to 5", "for (i = 0; i <= 5; i++)", "for (i <= 5; i++)", "for (i = 0; i <= 5)"],
        correctAnswer: 1
    }
];

// The init() function fires when the page is loaded 
function init() {
    renderIntro();
}
init();