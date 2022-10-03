'use strict';

/*Create an Animal class
Every animal has a hunger value, which is a whole number
Every animal has a thirst value, which is a whole number
When creating a new animal instance these values must be set to the default 50 value
Every animal can eat() which decreases its hunger by one
Every animal can drink() which decreases its thirst by one
Every animal can play() which increases both its hunger and thirst by one*/

class Animal {
    private _hunger: number;
    private _thirst: number;

    constructor() {
        this._hunger = 50;
        this._thirst = 50;
    }

    eat() {
        this._hunger -= 1;
    }

    drink() {
        this._thirst -= 1;
    }

    play() {
        this._hunger += 1;
        this._thirst += 1;
    }

    getHunger() {
        return this._hunger;
    }
}

let animal1 = new Animal();

animal1.eat();

animal1.drink();

animal1.play();

console.log(animal1);

export { Animal };