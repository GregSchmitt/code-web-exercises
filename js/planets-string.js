(function(){
    "use strict";

     var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
     var planetsArray;


    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

     //#1.
     planetsArray = planetsString.split("|");
     console.log(planetsArray);


    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     */

     //#2.
     var planetWithBreaks = planetsArray.join("<br>");
     console.log(planetWithBreaks);


     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

     //#3.
     //    var planetsListHTML = "<ul><li>";
     //
     //    var innerPlanetHTML = planetsSattay.join("</li><li>");
     //
     //    var endingPlaneyListHTML = "</li></ul>";
     //
     //    planetsListHTML += innerPlanetHTML + endingPlanetListHTML;
     //
     //    console.log(planetsListHTML);

     var planetsListHTML = "<ul><li>";
    var innerPlanetHTML = planetsArray.join("</li><li>");
    var endingPlanetListHTML = "</li></ul>";

    planetsListHTML += innerPlanetHTML + endingPlanetListHTML;

    console.log(planetsListHTML);



    document.getElementsByTagName('body')[0].innerHTML = planetsListHTML;

})();





























//   var arr = [1, 2, 3, 4], i;
//
// for( i=0; i<arr.length; i++ )
// {
//     document.write(arr[i] + '<br/>');
// }
// console.log(planetsArray);