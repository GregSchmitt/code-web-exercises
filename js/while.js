// ===============================================LOOP_EXERCISE=========================================================

//#1.
 var i = 1;

 while (i < 65536) {
     i = i * 2;
     console.log(i);
 }

//OR------>


 var number = 2;

 do {
     console.log(number);

     number = number * 2;

 } while (number <= 65536);
//
//
//===========================================NOTES===============================================
// Write down the sequence of steps necessary to do these things in your native language.
// One of the most challenging pieces of dev ork is this part.
//
//
//
//
// One weird trick to solving looping problems is to avoid the loop and make it happen one time.
//
//===================================ICE_CREAM_EXERCISE=========================================
//
//
//  An ice cream seller can't go home until she sells all of her cones. Write a JS program that
//  generates a random number between 50 and 100 representing the amount of cones to sell.
//  Your code should generate numbers between 1 and 5,
//  simulating the amount of cones being bought by her clients.
//  Use a do-while loop to log to the console the amount of cones sold to each person.
//  This is how you get the random numbers.
//
//
//  This is how you get a random number between 50 and 100
//  var allCones = Math.floor(Math.random() * 50) + 50;
//  This expression will generate a random number between 1 and 5
//  Math.floor(Math.random() * 5) + 1;
//  The output should be similar to the following:
//
//     5 cones sold...  // if there are enough cones
//     Cannot sell you 6 cones I only have 3...  // If there are not enough cones
//     Yay! I sold them all! // If there are no more cones
//
//===============================================================================================
//
//#2.
//
var allCones = Math.floor(Math.random() * 50) + 50;

console.log("Starting inventory is " + allCones + " number of cones.");

do {
    // Customer orders 1-5 cones(random number between 1 and 5)
    var conesOrdered = Math.floor(Math.random() * 5) + 1;

    if(conesOrdered <= allCones) {
        console.log("The customer ordered " + conesOrdered + " number of cones.");
        allCones = allCones - conesOrdered;
        console.log("I sold " + conesOrdered + " number of cones.");
        console.log("My inventory is " + allCones);
    } else {
        console.log("next customer, please.");
    }

} while(allCones > 0);

console.log("YAY, I get to go home b/c I sold all of my cones.");





































































//1.----------------------------------------
// for (var i = 10; i >= 1; i -=1) {
//     console.log(n);
// }
//
//2.----------------------------------------
// var i = 10;
//
// while (i >= 1) {
//     console.log(i);
//     i -= 1;
// }
//
//3.----------------------------------------
// for (var i = 10; i >= 1; i -=1) {
//     console.log(i);
//     if (i === 10) {
//         break;
//     }
// }
//
//4.----------------------------------------
// for (var i = 0; i < 100; i +=10) {
//     if ( i % 2 === 0) {
//         continue;
//     }
//     console.log(i);
// }
//
//5.----------------------------------------










































/*
--WHILE LOOP--

var i = 0;

    while (i <= 5) {
        console.log(i);
        i += 1;
    }



--FOR LOOP--

    for (var i = 0; i <= 5; i +=1) {
        console.log(i);
    }







*/