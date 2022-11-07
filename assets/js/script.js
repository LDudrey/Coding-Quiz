var timeEl = document.querySelector(".timer");
var titleEl = document.querySelector(".title");
var paraEl = document.querySelector(".para");
var quizContainer = document.getElementById("quiz");
var questionsEl = document.getElementById("questions");
var answerEl = document.querySelectorAll(".answers");
var startButton = document.getElementById("start");
var quizResult = document.querySelector(".results");
var submitButton = document.querySelector(".submit");

// Creates beginning page
function renderCodeQuiz() {
    titleEl.textContent = "Coding Quiz Challenge";
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
    startButton.addEventListener("click", showQuestions);
    startButton.addEventListener("click", countDown);
    startButton.addEventListener("click", hide);
}

//https://stackoverflow.com/questions/52976589/hide-element-when-you-click-on-it-with-addeventlistener
function hide() {
    var hideIntro = document.getElementById("intro");
    var hideSubmit = document.getElementById("submit");

    if (hideIntro.style.display === "none") {
        hideIntro.style.display = "block";
    } else {
        hideIntro.style.display = "none";
    }
    if (hideSubmit.style.display === "none") {
        hideSubmit.style.display = "block";
    } else {
        hideSubmit.style.display = "none";
    }
};

function hideQuiz() {
    console.log("called!");
    var hideQuiz = document.getElementById("quiz");
    if (hideQuiz.style.display === "none") {
        hideQuiz.style.display = "block";
    } else {
        hideQuiz.style.display = "none";
    }
};

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
            hide();
            hideQuiz();
        }
    }, 1000);
};

// https://www.youtube.com/watch?v=RswgVWKJRLM
function showQuestions() {
    questionsEl.textContent = quizQuestions.question;
    answerEl.forEach(function (element, index) {
        element.textContent = quizQuestions.answers[index];
        element.addEventListener('click', function () {
            if (quizQuestions.correctAnswer == index) {
                console.log('Correct');
            } else {
                console.log('Wrong');
            }
        })
    })
};

// Questions courtesy of https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var quizQuestions = {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: ["<javascript>", "<js>", "<script>", "<scripting>"],
    correctAnswer: 2
};




// Function to show end score result after all answers completed
// function quizResult () {
//     titleEl.textContent = "All done!"
//     paraEl.textContent = "Your score is" + scoreTotal;
// }


// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderCodeQuiz function will also execute
    renderCodeQuiz();
}
init();