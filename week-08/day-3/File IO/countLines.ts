'use strict';

// Write a function called countLines() that takes a filename as string as a parameter
// and returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

'use strict';

import * as fs from 'fs';

function countLines(fileName: string): number {
    
    let fileLines: string = '';
    
    try {
        let fileLines = fs.readFileSync(fileName, 'utf-8').split('\n');
        return fileLines.length;
    } catch (err) {
        return 0;
    }
}
console.log(countLines('my-file.txt'))

export {};
