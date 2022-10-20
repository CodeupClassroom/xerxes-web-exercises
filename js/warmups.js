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

console.log(getPrice(potatoes));
console.log(getPrice(david));