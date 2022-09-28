'use strict';

let shopItems: any[] = ['Cupcake', 2, 'Brownie', false];

// Accidentally we added "2" and "false" to the array
// Your task is to change from "2" to "Croissant" and change from "false" to "Ice cream"
// No, don't just remove the items :)
// Create a function called repairSweets() which takes the list as a parameter
// Expected output: "Cupcake", "Croissant", "Brownie", "Ice cream"

function repairSweets(list: any[]) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === 2) {
            list[i] = "Croissant"
        } else if (list[i] === false) {
            list[i] = "Ice Cream"
        }
    } return list
}

console.log(repairSweets(shopItems));

export = repairSweets;