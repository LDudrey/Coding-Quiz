var scoreListEl = document.querySelector(".scorelist");
var clearButton = document.querySelector(".clear");

// recall local storage to an array over a list


//clear button clears local storage
clearButton.addEventListener("click", clearList);

function clearList() {
localStorage.clear();
}
