'use strict'

//Create a list
const myExpense: number[] = [500, 1000, 1250, 175, 800, 120];

function getSum() {
    let value = 0;
    for (let i = 0; i < myExpense.length; i++) {
        value += myExpense[i];
    }
    
    //we spend
    console.log(value);
    
    //greatest expense
    console.log(Math.max(...myExpense));
    
    //cheapest spending
    console.log(Math.min(...myExpense));
    
    //average amount
    console.log((value / myExpense.length).toFixed(4));
    
}

getSum();

export {};