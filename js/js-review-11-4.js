let numArr = [4, 6, 8, 10];
let numArr2 = [7, 8, 9, 10];
let testString = "Hello World!!";
let testString2 = "hello world!!";


//TODO: Write a function named isPositive

// TODO: that accepts a number

//  TODO: and returns true or false AKA returns a boolean

// TODO:  based on whether the input is negative.

function isPostive(num){
    return num > 0;
}

function isPostive(num){
    if(num > 0){
        return true
    } else {
        return false
    }
}


// TODO: Write a function named isFortyTwo that accepts a number and returns a boolean that indicates whether that number is equal to 42.

// TODO: Write a function named isFortyTwo
//
//TODO:  that accepts a number
//
// TODO: and returns a boolean aka true or false
//
// TODO: that indicates whether that number is equal to 42.

function isFortyTwo(num){

    if(num === 42){
        return true;
    } else {
        return false;
    }

}


function isFortyTwo(num){
    return num === 42;
}


// TODO: Write a function named countEvens
//
//  TODO: that accepts an array of numbers
//
//   TODO: and returns the number ******COUNT******* of even numbers in the array.

function countEvens(arr){
    let count = 0;
//    iterate through the array

    arr.forEach(function(number){
       if(number % 2 === 0){
           count ++
       }
    })

//    if arr[0] % 2 === 0   MODULUS

//    return that count
    return count;

}
//count evens simplified
function countEvens(arr){
    let count = 0;
    arr.forEach(function(number){
        if(number % 2 === 0){
            count ++
        }
    })
    return count;
}


// TODO: Define a function named isAllLowerCase that takes in a string and returns true if all characters in the string are lowercase otherwise it should return false.

// TODO: Define a function named isAllLowerCase
//
// TODO: that takes in a string
//
// TODO: and returns true if all characters in the string are lowercase
//
// TODO: else it should return false.

function isAllLowerCase(string){
    if(string === string.toLowerCase()){
        return true;
    } else {
        return false;
    }
}

function isAllLowerCase(string){
    return string === string.toLowerCase();
}





// TODO: Write a function
//
//  that takes in a string
//
//  and returns an object with the following properties:


// 	1. `string` which is to be set the to the argument passed into the function.


// 	2. `numberOfWords` which is to be set to the number of words within the string.
// 	3. `instancesOfE` which to be set to the number of instances of the letter "E" within the argument passed into the function. The count should reflect instances of both uppercase and lowercase "E" (HINT: a previous function maybe useful in achieving this).



function returnObject(string){
    let newObj = {};
    newObj.string = string;
    newObj.numberOfWords = countLetters(string, " ")
    newObj.eCount = countLetters(string, "E");
    return newObj;
}

function countLetters(stringOne, letter) {
    let myString = stringOne.toLowerCase();
    let mySubString = letter.toLowerCase();
    let count = myString.split(mySubString).length - 1;
    return count;
}

function countOccurancesOfLetter(stringOne, letter){
    let stringArr = stringOne.toLowerCase().split(``);
    console.log(stringArr);
    let count = 0;
    stringArr.forEach(function(index){
        if (index === letter){
            count += 1;
        }
    })
    console.log(count);
    return count;
}













