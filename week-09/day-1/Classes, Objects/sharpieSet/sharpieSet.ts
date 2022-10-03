'use strict';

// Reuse your Sharpie class
import { Sharpie } from "./sharpie";

// Create SharpieSet class
// it contains a list of Sharpie, named listOfSharpies
class SharpieSet {
    listofSharpies: Sharpie[] = [];

    // it has a method that adds a new Sharpie to the set: add(sharpie: Sharpie)
    add(sharpie: Sharpie) {
        this.listofSharpies.push(sharpie);
    }

    // it has a method that returns the number of usable Sharpies: countUsable() -> sharpie is usable if it contains ink
    countUsable(): number {
        let useable: number = 0;
        for (let i: number = 0; i < this.listofSharpies.length; i++) {
            if (this.listofSharpies[i].inkAmount > 0) {
                useable++;
            }
        }
        return useable;
    }

    // it has a method that removes all unusable Sharpies: removeTrash()
    removeTrash(): void {
        for (let i: number = 0; i < this.listofSharpies.length; i++) {
            if (this.listofSharpies[i].inkAmount == 0) {
                this.listofSharpies.splice(i, 1);
            }
        }
    }
}