(function() {
    "use strict";

//===========================================CODE_UP_EXERCISE===========================================================
//
//
//#1.==========================================================>
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should return a message that says hello to the passed in name.
//
// function sayHello(name) {
//     console.log("Hello, " + name);
// }
//
// sayHello("codeup");
//
//
//#2.===========================================================>
// Call the function 'sayHello' and pass your name as a string literal argument.
// Store the result of the function call in a variable named 'helloMessage'.
//
// sayHello("Greg");
// var name = "Greg";
// sayHello(name);
//
//
//#3.===========================================================>
// Call the function 'sayHello' and pass your name as a string literal argument
// Store the result of the function call in a variable named 'helloMessage'.
//
// var myName = "Greg";
// sayHello(myName);
//
//
//#4.===========================================================>
//
//
// function isTwo(number) {
//     if (number === 2) {
//         console.log("number was 2");
//     }
//     else {
//         console.log("number was not 2");
//     }
// }
//
// isTwo(1);
// isTwo(2);
// isTwo(3);
//
//
//#5.===========================================================>
//
//
// function calculateTip(tipPercentage, totalAmountOfBill) {
//     return totalAmountOfBill * tipPercentage;
// }
//
// var totalAmount = 20;
// var tipPer = .25;
//
// console.log(calculateTip(tipPer, totalAmount));
// console.log(calculateTip(.25, 20));
//
//
//#6.===========================================================>???
// Create a function named 'calculateTip' to calculate a tip on a bill at a
//     restaurant. The function should accept a tip percentage and the total of the
//     bill, and return the amount to tip
//
//     Example:
//     calculateTip(0.20, 20) // returns 4
//
//
//var totalAmount = prompt("What was your bill?");
//var tipPer = prompt("What percentage would you like to tip?");
//
//alert("Your total bill is: " + totalAmount + " plus tip percentage was " + tipPer + ".");
//alert("Your total tip was " + calculateTip(tipPer, totalAmount));
//alert("Your total bill and tip was " + (calculateTip(tipPer, totalAmount) + parseFloat(totalAmount)));
//
//
//
//
//
//
//=============================================JUSTIN_FUNCTION_DRILLS===================================================

//#1. Make a function called returnTwo() that returns the number 2 when called
// Test this function with console.log(returnTwo())
//
function returnTwo() {
    return 2;
}

console.log(returnTwo());



//#2. Make a function called returnName() that returns the string of your name
// Test this function with console.log(returnName())
//
function returnName() {
    return "Greg";
}

console.log(returnName());



//#3. Make a function called addThree() which takes in a number input and returns the number plus 3. Remember to define a parameter.
// Test this function with console.log(addThree(5))
//
function addThree(numberInput) {
    return numberInput + 3;
}

console.log(addThree(3));



//#4. Make a function called sayString() which returns the string input passed in.
// Test this function with console.log(sayString())
//
function timesTwo(input) {
    return input / 2;
}

timesTwo(2);
var temp = 100;
timesTwo(temp);
timesTwo(5);



//#5. Make a function called sayHowdy() which console.logs the string “Howdy!”
// Test this function by directly calling sayHowdy()
// Remember this function does not need a defined return value
//
function sayHowdy(Howdy) {
    console.log("Well " + Howdy + " ya'll!");
}

sayHowdy("howdy");





//===============================================RYAN_FUNCTION_DRILLS===================================================

//#1. Write a function called `identity(input)` that takes in an argument called input and returns that input.

function identity(input) {
    return input;
}

console.log(identity(7));



//#2.========================>?
function getRandomNumber(min, max) {
    var random = Math.floor((Math.random()*100)+1);


}



//#3.========================>?
function first(input) {
    return input.charAt(0);
}
console.log(first("coding"));



//#4=========================>?
function last(input) {
    return input.slice (-1);
}
console.log(last("coding"));



//#5.==================Random number problem I did.

var randomNumber = Math.floor((Math.random()*10)+1);

console.log("Random number is: " + randomNumber);



//#6.============================================>

function ifOdd (testNumber) {
    console.log((numberToTest % 2 === 1) ? console.log("num is odd") : console.log("num was even");
}

ifOdd(randomNumber);






//=============================================RYAN_FUNCTION_DRILLS_pt2===============================================

// Write a function called `getRandomNumber(min, max)` that returns a random number between min and max values sent to that function call.

    function getRandomNumber(min, max) {
        return
    }



// Write a function called `first(input)` that returns the first character in the provided string.

    function first(input) {
        return
    }


// Write a function called `last(input)` that returns the last character of a string

    function last(input) {
        return
    }




// Write a function called `rest(input)` that returns everything but the first character of a string.

    function rest(input) {
        return
    }




// Write a function called `reverse(input)` that takes a string and returns it reversed.






// Write a function called `isNumeric(input)` that takes an input and returns a boolean if the input is numeric.






// Write a function called `count(input)` that takes in a string and returns the number of characters.






// Write a function called `add(a, b)` that returns the sum of a and b






// Write a function called `subtract(a, b)` that return the difference between the two inputs.






// Write `multiply(a, b)` function that returns the product






// Write a divide(numerator, denominator) function that returns a divided by b






// Write a remainder(number, divisor) function that returns the remainder left over when dividing `number` by the `divisor`






// Write the function `square(a)` that takes in a number and returns the number multiplied by itself.






// # Super Duper Gold-Star Bonus






// Write a function called sumOfSquares(a, b) that uses only your add() function and your square function and not + or * operators






// Write a function called doMath(operator, a, b) that takes 3 parameters. The first parameter is the name of the math function you want to apply. a and b are the two numbers to run that function on.
})();