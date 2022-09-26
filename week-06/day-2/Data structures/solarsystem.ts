'use strict';

export {};

//Insert Saturn into the correct position
let planetList: string[] = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Uranus', 'Neptune'];

planetList.splice(5, 0, "Saturn");
console.log(planetList.join());