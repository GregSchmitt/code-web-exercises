"use strict";

$(document).ready(function() {
    "use strict";

//=====================================> SELECTORS


        var element = document.getElementsByTagName('h1');
        console.log(element);

        var element = $("h1"); // select tag
        console.log(element);

        var element = $("p"); // select class
        console.log(element);

        var element = $("#someDiv"); // select id
        var element = $("li, .paragraph"); // select combinations
        var element = $("*"); // select all

        console.log(element);

//=====================================> GETTING A VALUE

    var element = $("main"); // select tag
        console.log(element.html());



//=====================================> CHANGING A VALUE

    // HTML
        element.html("<h1>Canada</h1>");

    // Text =====>
        element.text("<h1>Texas</h1>");
    //or-->
        var mainText = "<h1>Canada</h1>";
        element.text(mainText);

    // single CSS property =====>
        element.css("border", "10px solid black");

    // multiple CSS properties =====>
        $('main').css({
            "background-color": "red",
            "color": "yellow"
        });

    $('main').css("background-color", "red").css("color", "yellow");

});