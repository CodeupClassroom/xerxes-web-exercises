"use strict";
console.log("Hello from external JavaScript");

alert("Welcome to My Website!");

let userColor = prompt("What is your favorite color?");

alert("Wow you like " + userColor + "? I like " + userColor + " too!");

// 3.1
let rentalPrice = prompt("How much does it cost to rent a movie?");
rentalPrice = parseFloat(rentalPrice);
let littleMermaid = parseFloat(prompt("How many days were you going to rent The Little Mermaid for?"));
let brotherBear = parseFloat(prompt("How many days were you going to rent Brother Bear for?"));
let hercules = parseFloat(prompt("How many days were you going to rent Hercules for?"));
alert("You final total is $" + (littleMermaid + brotherBear + hercules) * rentalPrice);

// 3.2
let googleRate = parseFloat(prompt("How much does Google pay per hour?"));
let googleHours = parseFloat(prompt("How many hours did you work for Google this week?"));
let amazonRate = parseFloat(prompt("How much does Amazon pay per hour?"));
let amazonHours = parseFloat(prompt("How many hours did you work for Amazon this week?"));
let metaRate = parseFloat(prompt("How much does Meta pay per hour?"));
let metaHours = parseFloat(prompt("How many hours did you work for Meta this week?"));

alert("Your gross take home pay for this week is $" + ((googleRate * googleHours) + (amazonRate * amazonHours) + (metaRate * metaHours)));

// 3.3
let hasRoomInSchedule = confirm("Hey, do you have the availability to take a class at 8 AM?");
console.log(hasRoomInSchedule)
let classHasRoom = !confirm("Is underwater basket weaving full?");
console.log(classHasRoom);

alert("Student can register for underwater basket weaving: " + (hasRoomInSchedule && classHasRoom));

alert("Student can register for underwater basket weaving: " + (confirm("Hey, do you have the availability to take a class at 8 AM?") & !confirm("Is underwater basket weaving full?")));

// 3.4
let isPremiumMember = confirm("Do you have your Kroger card?");
let numberOfItemsInCart = parseFloat(prompt("How many items are in your cart?"));
let offerStillValid = confirm("Is your offer still valid?");

alert("Customer can have discount: " + (offerStillValid && (isPremiumMember || numberOfItemsInCart > 2)));