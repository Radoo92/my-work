'use strict';

export { };

    let size = 8;
    let chess = "";

    for (var i = 0; i < size; i++) {
        for (var j = 0; j < size; j++) {
            chess += (i + j) % 2 ? " " : "%";
        }
        chess += "\n";
    }

    console.log(chess);

