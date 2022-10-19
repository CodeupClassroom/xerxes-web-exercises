(function() {
    "use strict";

    /**
     * TODOne:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */

    let person = {
        firstName: "Cody",
        lastName: "Hastings",
        sayHello: function(){
            return "Hello from " + person.firstName + " " + person.lastName.log
        }
    }
    // console.log(person.firstName);
    // console.log(person.lastName);




    /**
     * TODOne:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    // console.log(person.sayHello());


    /** TODOne:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     *
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200.
     *
     * If a shopper spends more than $200, they get a 12%
     * discount.
     *
     * Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay.
     *
     * We know that
     * Cameron bought $180, Ryan $250 and George $320.
     *
     * Your program will have to
     *
     * display a line with the name of the person,
     * the amount before the discount,
     * the discount
     * and the amount after the discount.
     *
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper.
     *
     * Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    shoppers.forEach(function(shopper){
        // console.log("Shopper: " + shopper.name);
        // console.log("Amount before discount: " + shopper.amount);
        if(shopper.amount > 200){
            // console.log("Hey you get a  12% discount!!!!");
            shopper.amount = shopper.amount - (shopper.amount * .12)
            // console.log("Amount after discount " + shopper.amount);
        }
    })



    /** TODOne:
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

    let books = [
        {
        title: "A Brief History of Time",
        author: {
            firstName: "Stephen",
            lastName: "Hawking"
            }
        },
        {
            title: "Xenocide",
            author: {
                firstName: "Orson Scott",
                lastName: "Card"
            }
        },
        {
            title: "The Fellowship of the Ring",
            author: {
                firstName: "JRR",
                lastName: "Tolkien"
            }
        },
        {
            title: "Dune",
            author: {
                firstName: "Frank",
                lastName: "Herbert"
            }
        },
        {
            title: "Oh The places you will go",
            author: {
                firstName: "Dr. ",
                lastName: "Suess"
            }
        }
    ];

    // console.log(books[0].title)
    // console.log(books[0].author.firstName)
    // console.log(books[0].author.lastName)


    /**
     * TODOne:
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

    console.log("                   __..._   _...__\n" +
        "              _..-\"      `Y`      \"-._\n" +
        "              \\ Once upon |           /\n" +
        "              \\\\  a time..|          //\n" +
        "              \\\\\\         |         ///\n" +
        "               \\\\\\ _..---.|.---.._ ///\n" +
        "                \\\\`_..---.Y.---.._`//\n" +
        "                 '`               `'")

    // console.log("            /;\n" +
    //     "           / |'-,.\n" +
    //     "          /  '    `\"---,.__\n" +
    //     "         /  '    ,'     ,  '\"--,\"|\n" +
    //     "        /  '    ,     ,'     ,\"::|\n" +
    //     "       /  '   ,'    ,      ,\"::::|\n" +
    //     "      /  '   ,    ,'     ,\"::::::L\n" +
    //     "     /  '  ,'   ,'     ,\"::::::::L\n" +
    //     "    /  '  ,    ,     ,\":::::::::J\n" +
    //     "    k-,._    ,'   _.\":::::::::::J\n" +
    //     "     \\.  `\"----'\"\".J::::::::::::|\n" +
    //     "      \\.    .-,    .L:::::::::::|\n" +
    //     "       \\.  (       .J:::::::::::!\n" +
    //     "        \\.  `--     .L:::::::::/\n" +
    //     "         \\.   .-.   .|::::::::/\n" +
    //     "          \\. (   )  .J:::::::/\n" +
    //     "           \\. `-'    .L:::::/\n" +
    //     "            \\.  L    .|::::/\n" +
    //     "             \\. !__  .J:::/\n" +
    //     "              \\.  __  .L:/\n" +
    //     "               \\. L_) .|/\n" +
    //     "                `-,__,-'    kth")

    books.forEach(function(book){
        console.log("Book # "+ (books.indexOf(book) + 1))
        // console.log("Book # "+ (index + 1));
        console.log("Title: " + book.title);
        console.log("Author: " + book.author.firstName + " " +  book.author.lastName)
        console.log("---");

    });

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();