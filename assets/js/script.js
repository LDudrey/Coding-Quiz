var timeEl = document.querySelector(".timer");
var welcomeEl = document.querySelector(".welcome");
var paraEl = document.querySelector(".para");
var answerEl = document.querySelector(".answers");
var startButton = document.querySelector(".start");
var quizResult = document.querySelector("results");
var quizContainer = document.querySelector("quiz");
var submitButton = document.querySelector("submit");

// Creates beginning page
function renderCodeQuiz() {
    welcomeEl.textContent = "Coding Quiz Challenge";
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

function showQuestions(quizQuestions) {
    var output = [];
	var answer;
	// for each question...
	for(var i=0; i< quizQuestions.length; i++){
		
		// first reset the list of answers
		answer = [];
		// for each available answer to this question...
		for(letter in question[i].answer){

			// ...add an html radio button
			answer.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ question[i].answer[letter]
				+ '</label>'
			);
		}
		// add this question and its answers to the output
		output.push(
			'<div class="question">' + question[i].question + '</div>'
			+ '<div class="answer">' + answer.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');
}

// Displays times up message and results of score?
function displayMessage() {
    welcomeEl.textContent = "Times Up!"
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