'use strict';

export { };

// Saturn is missing from the planetList
// Insert it into the correct position
// Create a function called putSaturn() which has list parameter and returns the correct list.
// bonus for using some built in methods

let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

planetList.splice(5, 0, "Saturn");

function putSaturn(list: string[]): any {
    return list;
}

console.log(putSaturn(planetList));