'use strict';

// Create a function called "appendA()" that adds "a" to every string in the "animals" list
// The parameter should be a list

let animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];

function appendA(list: string[]) {
    return list.map(x => x + "a")
}

console.log(appendA(animals));

export { };