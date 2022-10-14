

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

for (var i = 1; i < 100; i++) {

    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }

    console.log('Here is a lovely even number: ' + i);
}

