var timeEl = document.querySelector(".time");
var highScoreEl = document.querySelector(".highscore");
var questionEl = document.querySelector(".question");
var paraEl = document.querySelector(".para");


var secondsLeft = 10;


function renderCodeQuiz() {
    questionEl.textContent = "Coding Quiz Challenge"
    paraEl.textContent = "Try to answer the following code-related questions with in the time limit. Keep in mind that incorrect answers will penalize your score time by ten seconds!"
}

// // Highscore
// function viewHighScore() {
//     addEventListener("click", function(event)) {

//     }
// }


// TODO: Use the `setInterval()` 
// method to call a function to be executed every 1000 milliseconds
// Timer
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = "Time Left: " + secondsLeft;
        } else if (secondsLeft === 0) {
            timeEl.textContent = "Time Left: " + secondsLeft;
            clearInterval(timerInterval);
            displayMessage();
        }
    }, 1000);
}

// Displays times up message and results of score?
function displayMessage() {
    if (secondsLeft === 0)
   questionEl.textContent = "Times Up!"
}


// Function to create and append colorsplosion image
function sendMessage() {
    timeEl.textContent = " ";
    var imgEl = document.createElement("img");
    imgEl.setAttribute("src", "images/image_1.jpg");
    mainEl.appendChild(imgEl);

}

setTime();







// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderCodeQuiz();
}
init();