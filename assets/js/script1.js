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
var currentQuestionArrayIndex = 0;
var numberCorrect = 0;


// Creates beginning page
//https://stackoverflow.com/questions/6242976/javascript-hide-show-element
function renderCodeQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("score").style.display = "none";
    titleEl.textContent = "Coding Quiz Challenge";
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
    startButton.addEventListener('click', startQuiz);
}

function startQuiz() {
    document.getElementById("start").style.display = "none";
    document.getElementById("intro").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    countDown();
    displayQuestions();
}

function displayQuestions() {
    // A variable is needed here to get the current question object from the array of questions
    var currentQuestion = quizQuestions[currentQuestionArrayIndex]
    for (i = 0; i < currentQuestionArrayIndex.length; index++) {
        element = currentQuestionArrayIndex[i];
    }
    // update with current question
    questionsEl.textContent = currentQuestion.question;
    // here we need to make variables that grab the answers buttons in your html
    // next we need to add the text content from your quizQUestions array
    var currentAnswers = quizQuestions[currentQuestionArrayIndex]
    for (i = 0; i < currentQuestionArrayIndex.length; index++) {
        element = currentAnswers.answers[i];
        //var currentAnswerArray
    }
    answerElZero.textContent = currentQuestion.answers[0];
    answerElOne.textContent = currentQuestion.answers[1];
    answerElTwo.textContent = currentQuestion.answers[2];
    answerElThree.textContent = currentQuestion.answers[3];
    //answerButtons.addEventListener('click', selectAnswer);

}

// click start quiz, get timer to countdown, can cycle through questions and answers them, 
//quiz end with clock or quiz ends

// function selectAnswer() {
    //var userAnswer = 0;
    answerButtons.addEventListener('click', function () {
        if (answerButtons == currentQuestionArrayIndex.correctAnswer) {            
            numberCorrect++;
            answerCorrect.textContent = "Correct!";
        } else {
            answerCorrect.textContent = "Wrong!";
            console.log(currentQuestionArrayIndex.correctAnswer);
        }
    });

// Timer
function countDown() {
    var secondsLeft = 11;
    var timeInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = "Time Left: " + secondsLeft;
        } else if (secondsLeft === 0) {
            timeEl.textContent = "Time Left: " + secondsLeft;
            document.getElementById("quiz-container").style.display = "none";
            document.getElementById("start").style.display = "block";
            document.getElementById("intro").style.display = "block";
            titleEl.textContent = "Time's Up!";
            paraEl.textContent = "Try to answer the questions in the time limit.";
            clearInterval(timeInterval);
            if (currentQuestionArrayIndex === 2);
            document.getElementById("start").style.display = "block";
            document.getElementById("quiz-container").style.display = "none";
            //
            // enter a conditional that ends the quiz either when clock his 0 OR you cycle though all questions.
            // this conditional would involve finding the users index position and compare to length of the array
            // How to end the quiz for EITHER no time left OR no questions left
            //  if (time <= 0 || create a variable to see the which current index of the array of questions you are on === questions.length) {
            //     question ending function here;
            //   }
        }
    }, 1000);
};


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
    renderCodeQuiz();
}
init();