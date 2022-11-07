var scoreListEl = document.querySelector(".scorelist");
var clearButton = document.querySelector(".clear");
var scores = [];

// recall local storage to an array over a list
// The following fucntion renders items in a to list as <li> elements
function renderScoreList() {
    // Render a new li for each score
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
  
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);

      todoList.appendChild(li);
    }
  };

//clear button clears local storage
clearButton.addEventListener("click", clearList);

function clearList() {
localStorage.clear();
}

// This function is being called below and will run with the page loads
function init() {
    // Get stored scores from localStorage
    var storedScores = JSON.parse(localStorage.getItem("scores"));
    // If scores were retireived from localStorage, update the score array to it
    if (storedScores !== null) {
      todos = storedScores;
    }
    // This is a helper function that will render scores to the DOM
    renderScoreList();
  };