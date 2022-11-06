var timeEl = document.querySelector(".time");
var highScoreEl = document.querySelector(".highscore");
var questionEl = document.querySelector(".question");
var paraEl = document.querySelector(".para");
var answerEl = document.querySelector(".answer");
var startButton = document.querySelector(".start");


// Creates beginning page
function renderCodeQuiz() {
    questionEl.textContent = "Coding Quiz Challenge";
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!";
    startButton.addEventListener("click", startQuiz); 
}

function startQuiz() {
    countDown();


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

// Displays times up message and results of score?
function displayMessage() {
   questionEl.textContent = "Times Up!"
}


// Function to create and send message after all answers completed
// function sendMessage() {
//     timeEl.textContent = " ";


// }




// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderCodeQuiz();
}
init();