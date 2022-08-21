'use strict';

// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0
function divide(num: number){
    try {
        if(num == 0) {
            throw "error"; 
        } else {(console.log(10 / num));
    }
}
    catch(error) {
        console.log("fail");
    }
}

divide(10);
divide(0);

