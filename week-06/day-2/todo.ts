'use strict';

export {};

// Add "My todo:" to the beginning of the todoText
// Add " - Download games" to the end of the todoText
// Add " - Diablo" to the end of the todoText but with indention
let todoText: string = '   - Buy milk\n';

let todo2 = todoText.slice(0, 1) + "My todo:" + '\n' + todoText.slice(1);
let todo3 = todo2.slice(0, 22) + '\n' + "  - Download games" + todo2.slice(22);
let todo4 = todo3.slice(0, -1) + '\n' + '\t' + "- Diablo" + todo3.slice(-1);

console.log(todo4);
