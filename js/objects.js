(function() {
    "use strict";
//=======================================================================================================================================

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.firstName) // "Sanchez"
     */

    //#1.
    var person = {
        firstName: "Greg",
        lastName: "Schmitt",

            sayHello: function() {
                return 'Hello from ' + person.firstName + " " + person.lastName + '!';
            }
        };

    console.log(person.sayHello ());
    console.log("---------------------------");

//-->Another way to print it on the 2 lines below

    // console.log(person.firstName);
    // console.log(person.lastName);


//======================================================================================>
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    //#2. My first solution**
    //var sayHello = "Hello from ";
    //console.log(sayHello + person.firstName + " " + person.lastName + "!");

//OR------>

    // person.sayHello = function() {
    //     console.log("Hello from " + person.firstName + " " + person.lastName + '!');
    // }

//OR------>

    person.sayHello = function() {
       return "Hello from " + person.firstName + " " + person.lastName;
    };
    console.log(person.sayHello());
//======================================================================================>


    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function (shopper) {

        var discount = shopper.amount * .12;
        var discountedPrice = shopper.amount - discount;

        if (shopper.amount < 200) {
            console.log(shopper.name + " spent $" + shopper.amount + " and receives no discount .")
        } else {
            console.log(shopper.name+ " spent $" + shopper.amount + " and receives a 12% discount, leaving $" + discountedPrice.toFixed(2) + " to pay.");
        }
    });

    console.log("-------------------------");



//OR---->

    // function calculateDiscount(amount) {
    //
    //     var discountThreshold = 200;
    //     var discountPercentage = .12;
    //
    //     function calculateDiscount(amount, disThreshold, disPercentage) {
    //         if(amount > discountThreshold) {
    //             return amount - (amount * discountPercentage);
    //         }
    //         else {
    //             return amount;
    //         }
    //     }
    // }

//OR---->

    //
    // function outputShopperInfo(arr) {
    //
    //     arr.forEach(function(shopper) {
    //         console.log(shopper);
    //         var message = shopper.name + "spent";
    //         message += shopper.amount + " and received a discount of ";
    //         message += shopper.amount - calculateDiscount(shopper.amount, discountThreshold, discountPercentage);
    //         message += " and paid "
    //
    //         console.log(message);
    //     });
    // }
    //
    // outputShopperInfo(shoppers);
    //
    //



//================================================================================================================================================
    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */

     var books = [
        {
            title: 'The Hobbit',
            author: {
                firstName: 'J.R.R',
                lastName: 'Tolkien'
            }
        },
        {
            title: 'The Desolation of Smaug',
            author: {
                firstName: 'J.R.R',
                lastName: 'Tolkien'
            }
        },
        {
            title:'Fellowship of the Ring',
            author: {
                firstName: 'J.R.R',
                lastName: 'Tolkien'
            }
        },
        {
            title:'The Two Towers',
            author: {
                firstName: 'J.R.R',
                lastName: 'Tolkien'
            }
        },
        {
            title:'The Return of the King',
            author: {
                firstName: 'J.R.R',
                lastName: 'Tolkien'
            }
        }
    ];

    console.log(books[0].title);
    console.log(books[2].author.firstName);
    console.log(books[4].author.lastName);
    console.log("---------------------------");

//=======================================================================================================================================
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

     for (var i = 0; i < books.length; i++) {
         console.log("Book # " + (i+1) + " \nTitle: " + books[i].title + " \nAuthor: " + books[i].author.firstName + " " + books[i].author.lastName);
     }

     console.log("------------------------");

//=======================================================================================================================================
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */



     function createBook(title, authorName) {
         var namesArray = authorName.split(" ");
             return {
                title: title,
                author: {
                    firstName: namesArray[0],
                    lastName: namesArray[1]
                }
        };



    }



    console.log(createBook("Hobbit", "JRR Tolkien"));

//refactor code: put above console.log statement. The code is below.

    // var books = [
    //     createBook("Title 1", "Author 1"),
    //     createBook("Title 1", "Author 1"),
    //     createBook("Title 1", "Author 1"),
    //     createBook("Title 1", "Author 1")
    // ];



//=======================================================================================================================================
     /**
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

     function showBookInfo(book) {
         var output = "Title: " + book.title + "\n";
         output += "Author: " + book.author.firstName + " " + book.author.lastName  + "\n";
         output += "---";
         return output;
     }


    books.forEach(function(book, index) {
        console.log("Book # " + (index + 1) + "\n");
        console.log(showBookInfo(book));
    });













































      //books.author.firstName + " " + books.author.lastName + " " + books.title;

















    //DOM & BOM notes






































})();