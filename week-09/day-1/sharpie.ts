'use strict';
/*Create a Sharpie class
We should know the followings about each sharpie:
color (which should be a string),
width (which will be a number) and the
inkAmount (another number)
We need to specify the color and the width at creation
Every sharpie is created with a default inkAmount value: 100
We can use() the sharpie objects: using it decreases inkAmount by 10*/

class Sharpie {
    private _color: string;
    private _width: number;
    private _inkAmount: number;

    constructor(color: string, width: number, inkAmount: number = 100) {
        this._color= color;
        this._width = width;
        this._inkAmount = inkAmount;
    }

    public use(): void {
        this._inkAmount -= 10;
    }

}

let sharpie1 = new Sharpie("red", 10)

sharpie1.use();

console.log(sharpie1);

export {};
