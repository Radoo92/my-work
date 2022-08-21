'use strict';

// Create a method that decrypts reversed-lines.txt
const fs = require('fs');

let content: string = "";
let fileName: string = 'duplicated-chars.txt';

try{
    content = fs.readFileSync(fileName, 'utf8');
} catch (Error){
    console.log('cannot read file');
    process.exit();
}

function decrypt(fileName: string) : string{
    let newContent: string = content.charAt(0);
    let lastNewChar = content.charAt(0);
    for(let i: number = 1; i < content.length; i++){
        let nextChar = content.charAt(i);
        if(lastNewChar !== nextChar){
            newContent += nextChar;
            lastNewChar = nextChar; 
        }
    }
    return newContent;
}

console.log(decrypt(fileName));

export { };