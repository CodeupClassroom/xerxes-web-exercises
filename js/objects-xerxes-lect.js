"use strict";

// var car = new Object();
//
// console.log(typeof car);
// // "object"


// Most do not declare objects this way any longer
// var car = {};
//
// console.log(typeof car);
// // "object"
//
// "use strict";

// var car = {};

// use dot notation to assign a "make" property
//Do this!!!!!
// car.make = "Toyota";


// use array notation to assign a "model" property
//Try to not do this!!
// car["make"] = "Toyota";

// var car = {
//     make: "Toyota",
//     model: "Camry"
// };

// DONT DO THIS
// var car = {
//     "number of wheels": 4
// };


// do this instead
// var car = {
//     numberOfWheels: 4

// };

// DONT DO THIS
// car["number of wheels"] = 4;
// // do this instead
// car.numberOfWheels = 4;
//
// var car = {};
// car.make = "Toyota";
// car.model = "Camry";
//
// // use array notation to access "make" property
// console.log("The car make is: " + car["make"]);
//
// // use dot notation to access "model" property
// console.log("The car model is: " + car.model);
//


// var cars = [
//     {
//         make: "Toyota",
//         model: "Camry",
//         features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
//         owner: {
//             name: "Jane Doe",
//             age: 30
//         }
//     },
//     {
//         make: "Honda",
//         model: "Accord",
//         features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
//         owner: {
//             name: "John Doe",
//             age: 31
//         }
//     }
// ];
//
// console.log("The first car is a " + cars[0].make + " " + cars[0].model + ".");
// console.log("The owner of the second car is " + cars[1].owner.name + ".");
//
// console.log("Here are all the features of all the cars:");
//
// cars.forEach(function(car) {
//
//     car.features.forEach(function(feature) {
//         // if(feature !== "Automatic Windows"){
//         //     console.log(feature);
//         // }
//         // without automatic windows
//         console.log(feature);
//     });
//
// });


var car = {};
car.make = "Toyota";
car.model = "Camry";
car.gear1 = 1;
car.doorOpen = false;

// create a honk method on the car object
car.honk = function () {
    alert("Honk! Honk!");
};

// car.shiftGears = function() {
//
// }

car.openAllDoors = function(){
    car.doorOpen = true;
}
car.logMakeModel = function () {
    console.log("Car make/model is: " + car.make + " " + this.model);
};

// honk the horn
// car.honk();
// car.openAllDoors();
car.logMakeModel();