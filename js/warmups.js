function getPrice(obj) {
    return obj.price;
}

let potatoes = {
    name: "Potatoes",
    quantity: 2,
    price: "$7.89"
};

let david = {
    name: "David Stephens",
    age: "Old"
}

// console.log(getPrice(potatoes));
// console.log(getPrice(david));

function getLongestString(arr) {
    let longestStr = "";
    for (let str of arr) {
        if (str.length > longestStr.length) {
            longestStr = str;
        }
    }
    return longestStr;
}

const colors = ["Green", "Blue", "Periwinkle"];

// console.log(getLongestString(colors));

const hamsters = [
    {
        name: "Hamtaro",
        heightInMM: 86,
        fur: ['orange', 'white'],
        gender: "male",
        dateOfBirth: "August 6"
    } , {
        name: "Bijou",
        heightInMM: 75,
        fur: ['white'],
        gender: "female",
        dateOfBirth: "July 10"
    } , {
        name: "Oxnard",
        heightInMM: 100,
        fur: ['grey', 'white'],
        gender: "male",
        dateOfBirth: "May 3"
    } , {
        name: "Boss",
        heightInMM: 120,
        fur: ['brown', 'white'],
        gender: "male",
        dateOfBirth: "September 21"
    } , {
        name: "Snoozer",
        heightInMM: 85,
        fur: ['brown', 'white', "pink"],
        gender: "male",
        dateOfBirth: "January 14"
    }
];

function getTallestHamster(arr) {
    let tallest = {heightInMM: 0};
    arr.forEach(function(el){
        if (el.heightInMM > tallest.heightInMM) {
            tallest = el;
        }
    });
    // for(let i = 0; i < arr.length; i++) {
    //     if (arr[i].heightInMM > tallest.heightInMM) {
    //         tallest = arr[i];
    //     }
    // }
    // for (let el of arr) {
    //     if (el.heightInMM > tallest.heightInMM) {
    //         tallest = el;
    //     }
    // }
    return tallest;
}

console.log(getTallestHamster(hamsters));

