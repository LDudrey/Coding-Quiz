var timeEl = document.querySelector(".timer");
var titleEl = document.querySelector(".title");
var paraEl = document.querySelector(".para");
var startButton = document.getElementById("start");
var quizContainer = document.getElementById("quiz-container");
var questionsEl = document.getElementById("questions");
var answerButtons = document.querySelectorAll("answer-buttons");
var currentQuestionArrayIndex = 0;


// Creates beginning page
//https://stackoverflow.com/questions/6242976/javascript-hide-show-element
function renderCodeQuiz() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("results").style.display = "none";
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
        // update with current question
      questionsEl.textContent = currentQuestion.question;
    //   here we need to make variables that grab the answers buttons in your html
    // next we need to add the text content from your quizQUestions array

}


    // questionsEl.innerText = question.question;
    // answerButtons.addEventListener('click', selectAnswer);
// click start quiz, get timer to countdown, can cycle through questions and answers them, 
//quiz end with clock or quiz ends

function selectAnswer() {


}

// Timer
function countDown() {
    var secondsLeft = 11;
    var timeInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = "Time Left: " + secondsLeft;
        } else if (secondsLeft === 0) {
            timeEl.textContent = "Time Left: " + secondsLeft;
            clearInterval(timeInterval);
        //if (secondsLeft === 0 ||  )
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
            1: "if (i == 5)",
            2: "if i = 5 then",
            3: "if i = 5;",
            4: "if i == 5 then",
        },
        correctAnswer: '1'
    },
    {
        question: "How does a FOR loop start?",
        answers: {
            1: "for i = 1 to 5",
            2: "for (i = 0; i <= 5; i++)",
            3: "for (i <= 5; i++)",
            4: "for (i = 0; i <= 5)",
        },
        correctAnswer: '2'
    }
];

// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderCodeQuiz function will also execute
    renderCodeQuiz();
}
init();