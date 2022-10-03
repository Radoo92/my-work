// Reuse your Animal class

import { Animal } from "./animal";

// Create a Farm class
// it has a list of Animals listOfAnimals
// it has a limit that defines how many animals can be kept in the Farm and can be set when the Farm is created

class Farm {
    listOfAnimals: Animal[] = [];
    limit: number;

    constructor() {
        this.limit = 5;
    }

    // it has two methods:
    // breed() -> creates a new animal if there's place for it
    breed() {
        if (this.listOfAnimals.length <= this.limit) {
            let animal = new Animal();
            this.listOfAnimals.push(animal);
        }
    }

    // sell() -> removes the least hungry animal
    sell() {
        if (this.listOfAnimals.length > 0) {
            let animalWithLowestHunger = this.listOfAnimals[0];
            if (this.listOfAnimals.length === 1) {
                return animalWithLowestHunger;
            }
            for (let i = 1; i < this.listOfAnimals.length; i++) {
                if (this.listOfAnimals[i].getHunger() < animalWithLowestHunger.getHunger()) {
                    animalWithLowestHunger = this.listOfAnimals[i];
                }
            }
            return animalWithLowestHunger;
        }
        return null;
    }
}