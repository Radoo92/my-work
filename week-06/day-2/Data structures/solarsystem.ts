'use strict';

export { };

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

function putSaturn(arr: any) {
    arr.splice(planetList.indexOf("Jupiter") + 1, 0, "Saturn")
    return arr
}

console.log(putSaturn(planetList));

export = putSaturn;