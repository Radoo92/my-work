'use strict'

//Create a map where the keys are strings and the values are strings with the following initial values
let iSBN: any = {
    '978-1-60309-452-8': 'A Letter to Jo',
    '978-1-60309-459-7': 'Lupus',
    '978-1-60309-444-3': 'Red Panda and Moon Bear',
    '978-1-60309-461-0': 'The Lab'
};

//Print all the key-value pairs 
let map2: string[] = Object.keys(iSBN);

for (let i = 0; i < map2.length; i++) {
    console.log(`${iSBN[map2[i]]} (ISBN: ${map2[i]})`)
}

//Remove
delete iSBN["978-1-60309-444-3"];

//Remove the key-value pair with value The Lab
for (let i = 0; i < map2.length; i++) {
    if (iSBN[map2[i]] == "The Lab") {
        delete iSBN[map2[i]];
    }
};


//Add the key-value pairs to the map
iSBN['978-1-60309-450-4'] = 'They Called Us Enemy';
iSBN['978-1-60309-453-5'] = 'Why Did We Trust Him?';

//Print whether there is an associated value with key 478-0-61159-424-8 or not
console.log(iSBN.hasOwnProperty("478-0-61159-424-8"));

//Print the value associated with key 978-1-60309-453-5
let value: string[] = Object.keys(iSBN).map(key => iSBN['978-1-60309-453-5']);
console.log(value);

export {};