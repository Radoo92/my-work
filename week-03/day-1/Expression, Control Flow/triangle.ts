export { };

'use strict';

// Write a program that draws a triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is/

let lineCount: number = 4;

function drawTriangle(lineCount: number) {
    let line = "";
    for (let i = 0; i < lineCount; i++) {
        line += "*";
        console.log(line);
    }
}

drawTriangle(4);