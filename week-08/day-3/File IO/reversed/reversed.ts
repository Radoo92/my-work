// Create a method that decrypts reversed-lines.txt

import * as fs from "fs";

function decryptText() {
    const content = fs.readFileSync("reversed.txt", "utf-8").split('\n');
    console.log(content);
    for (let i = 0; i < content.length; i++) {
        console.log(reversed(content[i]));
    }
}

function reversed(line: string): string {
    let reversedLine = "";
    for (let i = 0; i < line.length; i++) {
        reversedLine = line[i] + reversedLine;
    }
    return reversedLine
}

decryptText();

