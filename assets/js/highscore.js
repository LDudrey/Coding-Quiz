var scoreListEl = document.querySelector(".scorelist");
var clearButton = document.querySelector(".clear");
var scores = [];

// The following function is supposed to render items in a list as <li> elements
function renderScoreList() {
    for (var i = 0; i < scores.length; i++) {
      var score = scores[i];
      var li = document.createElement("li");
      li.textContent = score;
      li.setAttribute("data-index", i);
      scoreListEl.appendChild(li);
    }
  };

// Clears local storage
// Cleaner code with Arrow Functions https://www.youtube.com/watch?v=h33Srr5J9nY&t=332s
clearButton.addEventListener("click", () => {
  localStorage.clear()
});

// The init() function fires when the page is loaded 
function init() {
    var storedInitials = JSON.parse(localStorage.getItem("savedInitials"));
    if (storedInitials !== null) {
      scores = storedInitials;
    }
    renderScoreList();
  };