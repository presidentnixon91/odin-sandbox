function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// Get user's selection
function getUserSelection() {
    // Get input from user
    userSelection = prompt("Rock, Paper, Scissors?");
    // Convert selection to sentence case
    userSelection = userSelection.toLowerCase();
    let firstLetter = userSelection[0];
    firstLetter = firstLetter.toUpperCase();
    userSelection = userSelection.slice(1);
    userSelection = firstLetter + userSelection;
    console.log("User selection is " + userSelection);
    return userSelection;
}