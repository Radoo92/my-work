'use strict';

export{};

function findUniqueItems(array: any) {
    var out = [];
    for (var i = 0, len = array.length; i < len; i++)
        if (out.indexOf(array[i]) === -1)
            out.push(array[i]);
    return out;
}
var myArray = [1, 11, 34, 11, 52, 61, 1, 34];
var uniqueArray = findUniqueItems(myArray);

console.log(uniqueArray);
