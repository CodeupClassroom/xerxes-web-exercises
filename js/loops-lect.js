

//
//
//
//
// Example 1
// var i = 1;
//
// while (i <= 10) {
//     console.log('while loop iteration #' + i);
//     // the next 3 lines are effectively the same
//     i++
//     i += 1
//     i = i + 1;
//
//     i += 5;
// }

//Example 2

// var i = 10;
//
// while (i > 1) {
//     console.log('while loop iteration #' + i);
//     i--;
// }

// Example 3
//code below will run 1 time
// var i = 10;
//
// do {
//     // i++;
//     console.log('while loop iteration #' + i);
//     i++;
// } while (i < 10);

// Code below will never run
// var i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }

// for (var i = 0; i < 10; i++) {
//     console.log('for loop iteration #' + i);
// }


//WILD EXAMPLE BELOW
// for (var i = 0, j = 9; i < 10, j > 5; i++, j--) {
//     console.log('for loop iteration #' + i + ', j = ' + j);
// }
//
// Break example
// var numberToStopAt = 5;
//
// for (var i = 1; i < 100; i++) {
//
//     console.log('Loop counter is: ' + i);
//
//     if (i === numberToStopAt) {
//         console.log('We have reached the stopping point: break!');
//         // use the break keyword to exit from the while loop
//         break;
//         // nothing after the break will get processed
//         console.log('You will never see this line.');
//     }
// }

// for (var i = 1; i < 100; i++) {
//
//     if (i % 2 !== 0) {
//         // number isn't even
//         // odd numbers aren't as cool
//         // skip the rest of the loop and continue with the next iteration
//         continue;
//     }
//
//     console.log('Here is a lovely even number: ' + i);
// }


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for(let i = 1; i <= 10; i++) {
   let randNum = getRandom(20, 200);
   if(randNum % 2 === 0){
       console.log(randNum + " is Even");
   } else {
       console.log(randNum + " is Odd");
   }
}

for(let i = 1; i <= 9; i++){
    // console.log(i);
    let finalOutput = '';
    for (let j = 0; j < i; j++){
        finalOutput += i;
    }
    console.log(finalOutput);
}

let userInput = prompt("Please enter an odd number between 1 and 50")

if(userInput % 2 === 0){
    alert("this is an even number try again")
} else if(userInput > 50 || userInput < 1) {
    alert("This number is out of the range 1 - 50");
}

do{
    let userInput = prompt("Please enter an odd number between 1 and 50");

    if(userInput % 2 === 0){
        alert("this is an even number try again");
    } else if(userInput > 50 || userInput < 1) {
        alert("This number is out of the range 1 - 50 try again");
    } else {
        alert("input accepted");
        break;
    }
} while(true)






































