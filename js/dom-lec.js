


var btnToClick = document.getElementById('btnToClick');

// console.log(btnToClick); // prints <button id="btnToClick">Click Me</button>



// Get all elements with class 'even'
var evenElements = document.getElementsByClassName('even');

// Print the first element

// console.log(evenElements);
// console.log(evenElements[0]); // Prints li.even.list-one-item

// Print all elements
// for (var i = 0; i < evenElements.length; i++) {
//     // console.log(evenElements[i]);
// }
//
// Prints:
// li.even.list-one-item
// li.even.list-two-item

// var listItems = document.getElementsByTagName('li');
//
// // Print the first list item
// console.log(listItems[0]); // Prints li.odd.list-one-item
//
// // Print all the list items
// for (var i = 0; i < listItems.length; i++) {
//     // console.log(listItems[i]);
// }

// Prints
// li.odd.list-one-item
// li.even.list-one-item
// li.odd.list-two-item
// li.even.list-two-item





// get the "username" input
var usernameInput = document.forms.login.username;

// log the value of the "username" input
console.log(usernameInput.value);


// Get the main heading h1 by id
var mainHeading = document.getElementById('main-heading');




console.log(mainHeading.innerHTML); // Prints Hello World!

// Assign a new value to the inner HTML of the main heading
mainHeading.innerHTML = "Hello Codeup!";

console.log(mainHeading.innerHTML); // Prints Hello Codeup!

// Get the main section div by id
var mainSection = document.getElementById('main-section');
//
console.log(mainSection.innerHTML);
// // Prints
// // <p>Paragraph 1</p>
// // <p>Paragraph 2</p>




// Get the search link anchor by id
var searchLink = document.getElementById("search-link");

// Does an element have an attribute?
console.log(searchLink.hasAttribute("href")); // Prints true
console.log(searchLink.hasAttribute("class")); // Prints false

// Get an attribute value
console.log(searchLink.getAttribute("href")); // Prints "http://www.yahoo.com"

// Add or modify an attribute
searchLink.setAttribute("class", "btn btn-default");
// Adds the attribute class and sets it to "btn btn-default"

searchLink.setAttribute("href", "http://google.com");
// Changes the href attribute to "http://google.com"

// Remove an attribute
searchLink.removeAttribute("class"); // Remove the class attribute

// Get the main heading h1 by id
var listItems = document.getElementsByTagName('li');

for (let i = 0; i < listItems.length; i++) {
    var dbId = listItems[i].getAttribute("data-dbid");
    console.log(dbId);
}
// Prints
// 123
// 234








































