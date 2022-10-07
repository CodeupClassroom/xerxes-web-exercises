// Conditionals: Code that runs when we meet certain requirements.

// Today we'll be covering if, if/else, if/else if/else statements, ternary statements and switch statements.

// IF STATEMENTS - Code that runs when a condition is met.

// if (condition === true) {
//     this code will run if our condition is true;
// }

/** Consider the sentence: "When I run out of milk: I go to the store to get more." */
// Condition: Running out of milk
// Action: Go to the store

// let outOfMilk = true;
//
// if (outOfMilk === true) {
//     alert("DAVID! WE NEED MILK!!!");
// }


/** TO-DO: I want to make a block of code that logs a message to the console when a variable is set to the number 5. */
let possiblyFive = 55;

if (possiblyFive === 5) {
    console.log("Wow it is five!");
}

// We can also use our conditional logic in functions.

/** TO-DO: I want to build a function that returns a string when I pass a number as an argument.*/

// function isItANumber(parameter) {
//     if (typeof parameter === "number") { // !isNan(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work
//         return "Wow, that sure is a number alright.";
//     }
// }

console.log(isItANumber(7));
console.log(isItANumber("99"));
console.log(isItANumber(true));
console.log(isItANumber("Banana"));

// IF/ELSE Statements: Code that runs when a condition is met, but will also run with a default state.

// if (condition) {
//     i run when the condition evaluates to true;
// } else {
//     otherwise i run;
// }

/** Consider the following sentence: "If I owned one, I'd get milk from my cow when I ran out. But since
 * I don't, I'll go to the store instead." */

// How would we write this as a if/else code block?

let hasCowMan = true;

if (hasCowMan) {
    console.log("Going out to go milk, Bessie");
} else {
    console.log("Alright, I'm headed out to H-E-B.");
}



/** TO-DO: Let's expand our previous isItANumber function. Now I want to also return a string when we aren't passed a number. How do I refactor our function? */

function isItANumber(parameter) {
    if (typeof parameter === "number") { // !isNan(parseFloat(parameter)) && typeof parameter !== "string" is an alt condition that would work
        return "Wow, that sure is a number alright.";
        console.log("You'll never see this message! >:)");
    } else {
        return "Uh oh, that's not a number...";
        console.log("Or this one either! >:)");
    }
}


// IF/ELSE IF/ELSE = A chain of if/else statements to give different results for different conditions.

// if (condition1) {
//     run this code;
// } else if (condition2) {
//     since the first condition wasn't met, and the second was, I run;
// } else {
//     since neither the first nor second conditions were met, I run by default.
// }

/** Consider the following sentence: "If I order from Taco Bell a Baja Blast and a Crunchwrap supreme: my order
 * is only complete if I have both items. It is acceptable I only get the crunchwrap, and if I get neither, I am
 * going to riot in this parking lot." */

// How would we write this as a if/else if/else code block?
let hasCrunchwrap = true;
let hasBajaBlast = true;

if (hasCrunchwrap && hasBajaBlast) {
    console.log("My order is complete");
} else if (hasCrunchwrap) {
    console.log("This is acceptable");
} else {
    console.log("YOU DARE TO DEFY ME?!?!?!");
}

/** TO-DO: Let's make a function that takes in a number and will return three different strings for an
 * argument lesser than, greater than, or equal to 35. */

function isThisThirtyFive(parameter) {
    if (parameter > 35) {
        return "Oy, " + parameter + " is greater than 35.";
    } else if (parameter < 35) {
        return "Oy, " + parameter + " is less than 35.";
    } else if (parameter === 35) {
        return "Congrats that sure is 35!";
    } else {
        return "Oy, " + parameter + " isn't even a number!!!"
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive("Potato Soup"));

// TERNARY OPERATOR: A operation to set a value based on boolean evaluation.

// var message = (booleanValue) ? "Operation was true." : "Operation was false.";

/** Consider the following statement: "Are we out of milk? If we are: I'll head to the store, but if we
 * do: I want to make a bowl of cereal." */

// How would we write this as a ternary operator?

// var action = (doWeHaveMilk) ?

/** TO-DO: Let's look back at the if/else version of our isItANumber function. Let's refactor our if/else as a ternary operator. */



// SWITCH STATEMENT: A statement with multiple conditions that will trigger based on the value of a variable.

// var color = prompt("What is your favorite color?").toLowerCase();
//
// switch(color) {
//     case "green":
//         alert("What a coincidence, that's my favorite!");
//         break;
//     case "orange":
//         alert("That's my brother's favorite color!");
//         break;
//     default:
//         alert(color + " is a weird color, my dude.");
//         break;
// }

/** Consider the following sentence: "I don't have a cow, goat, or camel. I guess I'll have to go to the
 * store for milk." */

// How would we write this as a switch statement?

// var animal = ;
// switch (animal) {
//
// }

/** TO-DO: Let's make a switch statement with a prompt for the user to input their favorite sandwich meat. If they like 'olive loaf' we should return an alert to congratulate them on their bold choice, and if they choose 'brisket' we should return a different alert: this one for congratulating them on the 'right' answer. All other responses should trigger an alert stating apathy. */

// Let's work on the exercise!