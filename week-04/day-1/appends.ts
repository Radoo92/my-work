'use strict';
{

    const animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill", "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn",];

    // -  Add all elements an `"a"` at the end

    for (let i: number = 0; i < animals.length; i++) {
        animals[i] = animals[i] + 'a';
    }

    console.log(animals);
    
}