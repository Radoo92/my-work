'use strict';

export class Plant {
    type: string;
    color: string;
    water: number;
    isNeedWater: boolean;
    inceraseWater: number

    constructor(type: string, color: string, increaseWater: number) {
        this.type = type;
        this.color = color;
        this.water = 0;
        this.isNeedWater = true;
        this.inceraseWater = increaseWater
    }

    printInfo() {
        console.log(this.isNeedWater ? `The ${this.color} ${this.type} needs water (amount of water: ${this.water})` : `The ${this.color} ${this.type} doesnt needs water (amount of water: ${this.water})`)
    }

    watering(amount: number) {
        let useAmount = amount * this.inceraseWater;
        if (this.water < 5) {
            this.water += useAmount;
            if (this.water > 4) {
                this.isNeedWater = false;
            }
        }
    }
}