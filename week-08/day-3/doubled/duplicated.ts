'use strict';

// Create a method that decrypts reversed-lines.txt
const fs = require('fs');

let content: string = "";
let fileName: string = 'duplicated-chars.txt';

try {
    content = fs.readFileSync(fileName, 'utf8');
} catch (Error) {
    console.log('cannot read file');
    process.exit();
}

function reversed(toBeReversed: string) {
    let content: string = ""
    for (let i = toBeReversed.length - 1; i > - 0; i--) {
        content += toBeReversed[i];
    }
    return content
}

console.log(reversed(content));

export {};