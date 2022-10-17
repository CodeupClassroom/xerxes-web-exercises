

function showMultiplicationTable(num){

    for(let i = 1; i <= 10; i++){
        console.log(num + " x " + i + " = " + (num * i));
    }

}

// showMultiplicationTable(7);
// showMultiplicationTable(235);


function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// console.log(getRandomArbitrary(20, 200));

// for(let i = 1; i <= 10; i++){
//     let randNum = getRandomArbitrary(20, 200);
//     if(randNum % 2 === 0){
//         console.log(randNum + " is Even.");
//     } else {
//         console.log(randNum + " is Odd.")
//     }
// }

// for(let i = 1; i < 10; i++){
//     let output = '';
//     for(let j = 0; j < i; j++){
//         output += i;
//     }
//     console.log(output);
// }
//
// for(let i = 100; i >= 5; i -= 5){
//     console.log(i);
// }

// for(let i = 100; i >= 5; i--){
//     if(i % 5 === 0){
//         console.log(i);
//     }
// }
