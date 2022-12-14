'use strict'

//Create an empty map where the keys are integers and the values are characters
const map = new Map();

//Print out whether the map is empty or not
if (map.size === 0) {
    console.log("true");
}

//Add the following key-value pairs to the map
map.set(97, "a")
map.set(98, "b")
map.set(99, "c")
map.set(65, "A")
map.set(66, "B")
map.set(67, "C")

//Print all the keys
console.log([...map.keys()])

//Print all the values
console.log([...map.values()])

//Add value D with the key 68
map.set(68, "D")

//Print how many key-value pairs are in the map
console.log(map.size);

//Print the value that is associated with key 99
console.log(map.get(99));

//Remove the key-value pair with key 97 and print the associated value
console.log(map.delete(97));

//Print whether there is an associated value with key 100 or not
console.log(map.hasOwnProperty('100'));

//Remove all the key-value pairs
map.clear()

//Print how many key-value pairs are in the map
console.log(map.size);

export {};