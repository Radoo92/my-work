'use strict';

export {};
/*Create a PostIt a class that has
a backgroundColor
a text on it
a textColor
Create a few example post-it objects:
an orange with blue text: "Idea 1"
a pink with black text: "Awesome"
a yellow with green text: "Superb!"*/

class PostIt {
    private _backgroundColor: string;
    private _text: string;
    private _textColor: string;
    
    constructor(backgroundColor: string, text: string, textColor: string){
        this._backgroundColor = backgroundColor;
        this._text = text;
        this._textColor = textColor;
    } 
}

let orange = new PostIt("orange", "Idea1", "blue");
let pink = new PostIt("pink", "Awesome", "black");
let yellow = new PostIt("yellow", "Superb!", "green");

console.log(orange);
console.log(pink);
console.log(yellow);