'use strict';
// Write a function that joins two array by matching one girl with one boy in a new array
// If someone has no pair, he/she should be the element of the array too

let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef', 'Jeff'];

function match(array1: string[], array2: string[]){
    let result = [];

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (array1[i] != undefined && array2[i] != undefined) {
          result.push(array1[i] + "-" + array2[i]) 
        } else if (array1[i] != undefined) {
          result.push(array1[i])  
        } else if (array2[i] != undefined) {
          result.push(array2[i])  
        }
    }

    return result
}

console.log(match(boys,girls));

export {};