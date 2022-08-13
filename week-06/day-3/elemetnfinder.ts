'use strict';


const numbers: number[] = [1, 2, 3, 4, 5, 6, 8];

// Write a function that checks if the array contains "7"
// If it does, return "Hoorray" otherwise return "Noooooo"
function contains(value: any, arr: any) {
    let status = "Noooooo";
    let number: number = 7;

    for (let i = 0; i < arr.length; i++) {
        let number = arr[i];
        if (number == value) {
            status = "Hoorray";
            break;
        }
    }
    
    return status;
}

console.log(contains(7, numbers));

export {};