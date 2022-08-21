'use strict';

// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyFiles(file1: string, file2: string): boolean{
    try{
        fs.copyFileSync(file1, file2); 
        return true;
    } catch(error){
        return false;
    }
}

let result: boolean = copyFiles('test1.txt', 'test2.txt');
console.log(result);

export {};