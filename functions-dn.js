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

// Remove values from array
    function removeFromArray(startingPoint) {
        let myArray = [1, 2, 3, 4];

        // Grab the additional arguments which will be removed from myArray
        let toBeRemoved = Array.prototype.slice.call(arguments, 1);

        // Go through myArray from starting point
        for (i = startingPoint; i < myArray.length; i++) {
            // Go through tobeRemoved array from 0
            for (j = 0;j < toBeRemoved.length; j++) {
                if(myArray[i] == toBeRemoved[j]) {
                    myArray.splice(i,1);
                }
            }
        }

        return myArray;
    }
    // Send 0 as the starting point index for searching. Search for 7 and 2 to be removed from myArray
    removeFromArray(0, 7, 2);

    module.exports = removeFromArray

