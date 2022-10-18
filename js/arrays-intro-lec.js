(function() {
    // Instantiating an empty array
    let testArray = [];

    // Instantiating arrays with predefined elements
    let instructors = ["David", "Cody", "Codey The Duck"];

    const falsyValues = [false, null, "", 0, undefined, NaN];

    // Access the number of elements within an array
    console.log(instructors.length);
    console.log(falsyValues.length);
    console.log([].length);
    console.log([1,1,1,1,1,1,1,1,9,9,9,9,0,0,0,10000000,11,22,23,24,34,45].length);

    console.log(instructors[0]);
    instructors[0] = "'Lord Megatron' David"; // reassignment of element at a specific index
    instructors[1] = "'Emperor Starscream' Cody";
    console.log(instructors[0]); // first element of an array
    console.log(falsyValues[falsyValues.length - 1]); // Get the last element from an array ez

    let randomIndex = Math.floor(Math.random() * instructors.length);
    alert("One of your instructors is named: " + instructors[randomIndex]);

    console.log(instructors);

    for(let i = instructors.length - 1; i > -1; i--) {
        console.log("One of your instructors is named: " + instructors[i]);
    }

    instructors.forEach(function (instructor){
        console.log("One of your instructors is named: " + instructor);
    });

    function logInfo(element) {
        console.log(element);
    }

    falsyValues.forEach(logInfo);
    instructors.forEach(logInfo);

    for(let instructor of instructors) {
        console.log("One of your instructors is named: " + instructor);
    }

})();