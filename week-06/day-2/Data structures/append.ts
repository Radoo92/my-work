'use strict';

let append = "a";
let animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"];
let appendedAnimals = animals.map(function (element) {
    return element + append;
});
console.log(appendedAnimals);


export {};