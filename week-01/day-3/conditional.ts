'use strict';

// if a is even increment output1 by one

let q: number = 24;
let output1: number = 0;

if (q % 2 == 0)  {
    output1 = (0+1)
    console.log(output1);
    
}

// if x is between 10 and 20 set output2 to "Sweet!"
// if less than 10 set output2 to "Less!",
// if more than 20 set output2 to "More!"

let x: number = 13;
let output2: string = '';

if (10 < x && x < 20) {
    output2 = ("Sweet!")
    console.log(output2)

}

else if (x < 10) {
    output2 = ("Less!")
    console.log(output2)
    
}

else if (x > 20) {
    output2 = ("More!")
    console.log(output2);
    
}

// if credits are at least 50,
// and is_bonus is false decrement w by 2
// if credits are smaller than 50,
// and is_bonus is false decrement w by 1
// if is_bonus is true c should remain the same

let w: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if ((credits >= 50 ) && (isBonus == false)) {
    w -=2
    console.log(w, credits, isBonus);
   
}

else if ((credits < 50) && (isBonus == false)){
    w -=1
    console.log(w, credits, isBonus);
    
}

else if (isBonus = true) {
    w = 123
    console.log(w, credits, isBonus);
    
}


// if r is dividable by 4
// and time is not more than 200
// set output3 to "check"
// if time is more than 200
// set output3 to "Time out"
// otherwise set output3 to "Run Forest Run!"

let r: number =  8;
let time: number = 120;
let output3: string = '';

if ((r % 4 ==0) &&  (time < 200)){
    output3 = "check"
    console.log(output3);
    
}
 else if (time >=200) {
    output3 = "Time out"
    console.log(output3);
    
 }


