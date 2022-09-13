'use strict';

import { off } from "process";

export { };

class Plant {
    color: string;
    water: number;
    minwaterneeded: number

    constructor(color: string, water: number = 0, minwaterneeded: number = 5) {

        this.color = color;
        this.water = water;
        this.minwaterneeded = minwaterneeded
    }

    needWater() {
        if (this.water < this.minwaterneeded) {
            return true
        }
        else return false
    }
}

class Tree extends Plant {
    constructor(color: string, water: number = 0) {
        super(color, water, 10)
    }
}

class Flower extends Plant {
}

class Garden {
    plants: Plant[]
    constructor(plants: Plant[]) {

        this.plants = plants
    }

    print() {
        for (let i = 0; i < this.plants.length; i++) {
            const element = this.plants[i];

            if (element.needWater()) {
                if (element instanceof Flower) {

                    console.log(`The ${element.color} flower needs water`);

                }
                else if (element instanceof Tree) {
                    console.log(`The ${element.color} tree needs water`);

                }
            }
            else {
                if (element instanceof Flower) {

                    console.log(`The ${element.color} flower doesn't needs water`);

                }
                else if (element instanceof Tree) {
                    console.log(`The ${element.color} tree doesn't needs water`);

                }

            }
        }
        console.log();
    }

    water(amountwater: number) {

        console.log(`Watering with ${amountwater}`);

        let watermax = amountwater / this.plants.length
        for (const plant of this.plants) {
            if (plant instanceof Flower && plant.needWater()) {
                plant.water += watermax * 0.75
            }
            else if (plant instanceof Tree && plant.needWater()) {
                plant.water += watermax * 0.4
            }
        }
    }
}

let garden = new Garden([new Tree("orange"), new Tree("purple"), new Flower("yellow"), new Flower("blue")])
garden.print()

garden.water(70)
garden.print()

garden.water(40)
garden.print()



