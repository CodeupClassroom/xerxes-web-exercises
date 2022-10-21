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

console.log(getLongestString(colors));