'use strict';

// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

function countLines(fileName: string){
    const fs = require('fs');
    
    let content: string = "";
    
    try {
        content = fs.readFileSync(fileName, 'utf8');
    }
    catch (error) {
        console.log('0');
        process.exit();
    }
    for (var i = 0; i < fileName.length; ++i) {
        if (fileName[i] == '\n') {
            length++;
        }
    }
    return length;
}

console.log(countLines("test.txt"));

