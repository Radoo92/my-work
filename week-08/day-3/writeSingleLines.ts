'use strict';

// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

import * as fs from "fs";

function writeSingleLine(fileName: string): void {
    let fileContent: string = "Radovan Lipka";
    let message: string = 'Unable to write file: ' + fileName;
    try {
       
        fs.writeFileSync(fileName, fileContent, 'utf-8');
    }
    catch (Error) {
        console.log(message);
    }
}

writeSingleLine('my-file.txt');
