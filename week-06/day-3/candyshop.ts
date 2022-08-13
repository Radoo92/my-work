'use strict';

function repairSweets() {

    let list = ['Cupcake', 2, 'Brownie', false];

    list.splice(1, 1, "Croissant");
    list.splice(3, 1, "Ice cream");

    console.log(list);

}

repairSweets()

export {};