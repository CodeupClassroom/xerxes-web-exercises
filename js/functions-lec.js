"use strict";

(function () {
// alert("Hello");
// let message = "How are you?";
// alert(message);
//
// function greeting(name) {
//     return "Howdy there, " + name + ".";
// }
//
// let name = prompt("What is you name?");
// console.log(greeting("Cody"));
// console.log(greeting(name));
// console.log(greeting());

    function sum(a, b) {
        let total = a + b;
        // console.log(total);
        return total;
    }

    console.log(sum(4, 3));
// console.log(total); <- this doesn't work :(

    let jeff = "Jeff";

    function hiJeff() {
        return "Hi " + jeff;
        console.log("You'll never see this console log. >:)");
    }

    console.log(hiJeff());

    function getNameAndPrint() {
        let userName = prompt("Hey, what is your name?");
        alert("Nice to meet you, " + userName);
    }

    getNameAndPrint();
})();