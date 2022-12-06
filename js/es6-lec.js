"use strict";

(() => {
    let message = "Tim";
    if (message === "Tim") {
        let noLookie = "You should only see this once.";
        console.log(noLookie);
    }
    // console.log(noLookie);

    const arrOfNums = [1,2,3];

    for(let num of arrOfNums) {
        if (num % 2 === 0) {
            continue;
        }
        document.querySelector("#insert-here").innerHTML += `<li>$${num.toFixed(2)} is an odd number.</li>`;
    }

    function addTwo(num) {
        return num + 2;
    }

    const addFour = function(num) {
        return num + 4;
    }
    // one parameter, one line of logic arrow function, you can do this.
    const addThree = num => num + 3;
    // for two parameter, multiline logic arrow functions do this.
    const buildAName = (firstName, lastName) => {
        firstName = firstName.substring(0,1).toUpperCase() + firstName.substring(1).toLowerCase();
        lastName = lastName.substring(0,1).toUpperCase() + lastName.substring(1).toLowerCase();
        let fullName = `${firstName} ${lastName}`;
        return fullName;
    }
    // one parameter, multiple lines of logic
    const capitalizeName = name => {
        let newName;
        newName += name.substring(0,1).toUpperCase();
        newName += name.substring(1).toLowerCase();
        return newName;
    }

    console.log(addFour(5));
    console.log(addThree(5));
    console.log(buildAName("david", "StEpHEns"));
    // default parameter values necessitate the use of parenthesis around the parameters
    const introInstructor = (name = "David") => `Say hello to your instructor: ${name}!`;

    console.log(introInstructor("Cody"));
    console.log(introInstructor({name: "ted"}));
    console.log(introInstructor());

    let job = "Instructor";
    const instructor = {
        name: "Cody",
        languages: ["JavaScript", "PHP", "Java", "HTML", "CSS", "MySQL"],
        job // property variable shorthand assignment
    }

    console.log(`Hello, I'm ${instructor.name} and I know ${instructor.languages.length} programming languages. I will be your ${instructor.job} today.`);
    // object destructuring
    const {name, languages} = instructor;
    console.log(name);
    console.log(languages);
    // array destructuring
    const [first, second, third, geoff] = languages;
    console.log(languages);
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(geoff);
    // exponentiation operator
    console.log(2 ** 2);
    console.log(2 ** 3);

})();