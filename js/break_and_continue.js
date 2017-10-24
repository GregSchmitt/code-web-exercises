//================================================BREAK_AND_CONTINUE====================================================
//#1.

var userNumber = parseFloat(prompt("Enter a number"));
    while (isNaN(userNumber) || userNumber === "") {
        userNumber = parseFloat(prompt("Enter a number"));
}
        console.log("Number to skip is: " + userNumber);

var randomNum = Math.floor((Math.random()*50)+1);
console.log("Random odd number to skip is: " + randomNum);

    for (var i = 1; i < 50; i++) {

        if (i % 2 === 0) {
            continue;
        }

        if (randomNum === i) {
            console.log("Skipping this number: " + i);
        }
        else {
            console.log("Here is a odd number: " + i);
        }

        if (i >= 30) {
            break;
        }
    }



































