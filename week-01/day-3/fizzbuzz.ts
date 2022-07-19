'use strict';

for (let i: number = 1; i <= 100; i++) {
    let abc: string = "";
    if (i % 3 == 0) { abc += "Fizz"; }
    if (i % 5 == 0) { abc += "Buzz"; }
    if (abc != "") {
        console.log(abc);
        
    }

    else {

        console.log(i);
        
    }

}


