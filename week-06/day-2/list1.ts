'use strict';

export {};

/*Create an empty list which will contain names(strings)
Print out the number of elements in the list*/
let names: string [] = [];
  console.log(names.length);

//Add William
  names.push ("William");

//Print out whether the list is empty or not
  console.log(names.length < 0);

//Add "John" to the list
//Add "Amanda" to the list
  names.push ("John", "Amanda");

//Print out the number of elements in the list
  console.log(names.length); 

//Print out the 3rd element
  console.log(names[2]);

//Iterate through the list and print out each name
names.forEach(list);
function list(item: string) {
  
    console.log(item);  
}

//Iterate through the list
for (let i: number = 0; i < names.length; i++) {
    console.log(i + 1 + '. ' + names[i]);
}
 
/*Remove the 2nd element
Iterate through the list in a reversed order and print out each name*/
let splice = names.splice(1, 1);
for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}
  
/*Remove all elements
Print out the number of elements in the list*/
names.length = 0;
  console.log(names.length);
  
  