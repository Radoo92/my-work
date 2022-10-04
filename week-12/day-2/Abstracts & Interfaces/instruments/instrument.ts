`use strict`;

// We start with a base, abstract class Instrument.
//  it reserves (e.g. protected) the name of the instrument
//  it should provide a play() method.

export abstract class Instrument {
    abstract play(): void
}

// Next, we add another abstract class, StringedInstrument which extends Instrument. It
//   introduces numberOfStrings and
//   sound() method what's implementation is yet unknown
//   but with the help of the sound() the play() method is fully implementable

export abstract class StringedInstrument extends Instrument {
    abstract numberOfString: number;

    abstract sound(): string;
}

// StingedInstrument has 3 descendants, namely:-
//   Electric Guitar (6 strings, 'Twang')
//   Bass Guitar (4 strings, 'Duum-duum-duum')
//   Violin (4 strings, 'Screech')

// The Workshop should be invoked from another file like app.ts or main.ts

export class ElectricGuitar extends StringedInstrument {
    numberOfString: number;

    constructor(pNumberOfString: number = 6) {
        super()
        this.numberOfString = pNumberOfString
    }

    sound(): string {
        return "Twang";
    }

    play() {
        console.log(`"Electric Guitar", a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`)
    }
}
export class BassGuitar extends StringedInstrument {
    numberOfString: number;

    constructor(pNumberOfString: number = 4) {
        super()
        this.numberOfString = pNumberOfString
    }
    sound(): string {
        return "Duum-duum-duum"
    }

    play() {
        console.log(`"Bass Guitar", a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`)
    }
}
export class Violin extends StringedInstrument {
    numberOfString: number;

    constructor(pNumberOfString: number = 4) {
        super()
        this.numberOfString = pNumberOfString

    }
    sound(): string {
        return "Screech";
    }

    play() {
        console.log(`"Violin", a ${this.numberOfString}-stringed instrument that goes ${this.sound()}`)
    }
}