//=================================================FOR_LOOP_EXERCISE====================================================
//======================================================================================================================
//
//#1.===================================================================================================================
function showMultiplicationTable(number) {

   for (var i=1; i<=10; i++) {
       console.log(number + "x" + i + "=" + (number * i));
   }

}
    showMultiplicationTable(7);


//OR-------------------------->
//
//
//
//
//
//
//
//
//#2.===================================================================================================================
    for (var i = 1; i <= 10; i++) {

    var randomNumber = Math.floor((Math.random()*180)+20);

            if (i % 2 === 0) {
                console.log(randomNumber + " is even");
            }
            else {
                console.log(randomNumber + " is odd");
            }
    }
//
//
//OR------------------------->
//
//
  for (var i = 1; i <= 10; i++) {

        var randomNumber = Math.floor((Math.random()*180)+20);

        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is even");
        }
        else {
            console.log(randomNumber + " is odd");
        }
    }
//
//
//#3.===================================================================================================================
for (var i = 1; i <- 9; i++) {
    console.log(i);
}

function repeat(x) {
    var retVal = "";
    for (var i = 1; i <= x; i++) {
        retVal = retVal+ x;

        // for () {
        //
        // }
    }
    console.log(retVal);
}
repeat(1);
//
//
//OR------------------------------->
//
//
for (var i=0; i<=9; i+=1) {
     var a = "";

    for (var j=0; j<i; j+=1) {
         var a = a + "" + i;
    }
    console.log(a);
}
//
//
//OR------------------------------->
//
    for (var i = 1; i<=9; i++) {
        var numberString = i.toString();

        var output = numberString.repeat(i);
        console.log(output);
    }




//#4.===================================================================================================================
    for (var i = 100; i >= 5; i-=5) {
        console.log(i);
    }


