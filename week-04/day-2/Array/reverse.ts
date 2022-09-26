'use strict';

export {};

//Reverse the order of the elements with creating a new temp array and a loop

let numbers: number[] = [3, 4, 5, 6, 7];

let arr1 = [];
for (let i = numbers.length - 1; i >= 0; i--) {
    arr1.push(numbers[i]);
}
console.log(arr1);