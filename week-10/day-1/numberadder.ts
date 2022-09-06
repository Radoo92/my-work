'use strict';

//Write a recursive function that takes one parameter: n and returns the sum of numbers (integers) from 1 to n. The function should return 0 for inputs less than 1.
function recursive(n: number): number {
    if (n < 1) {
        return 0;
    }
    else {
        return n + recursive(n - 1);
    }
}

console.log(recursive(10));

export { };

