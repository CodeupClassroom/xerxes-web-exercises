"use strict";

(function () {
    function greeting(name) {
        return "Howdy there, " + name + ".";
    }

    function sum(a, b) {
        let total = a + b;
        console.log(total);
        return total;
    }

    function hiJeff() {
        return "Hi " + jeff;
        console.log("You'll never see this console log. >:)");
    }

    function getNameAndPrint() {
        let userName = prompt("Hey, what is your name?");
        alert("Nice to meet you, " + userName);
    }

    alert("Hello");
    let message = "How are you?";
    alert(message);
    console.log(greeting("Bill"));


    let name = prompt("What is you name?");
    console.log(greeting("Cody"));
    console.log(greeting(name));
    console.log(greeting());


    console.log(sum(4, 3));
    // console.log(total); // <- this doesn't work :(

    let jeff = "Jeff";

    console.log(hiJeff());

    getNameAndPrint();
})();