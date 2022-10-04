'use strict';

import { Plant } from "./plant";

export class Tree extends Plant {

    constructor(color: string) {
        super("Tree", color, 0.4);
    }
}