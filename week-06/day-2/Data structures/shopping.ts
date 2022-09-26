'use strict';

//create list
let shopping: string[] = ["eggs", "milk", "apples", "bread", "chicken"];

//search if elements are true
let includes = (shopping.includes("milk") ? console.log("yes") : console.log("no"));
let includes2 = (shopping.includes("bananas") ? console.log("yes") : console.log("no"));

export {};