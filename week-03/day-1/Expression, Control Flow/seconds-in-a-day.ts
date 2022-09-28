'use strict';

export { };

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let dayInSeconds = (24 * 60) * 60;
let secondsRemaining = currentHours * 60 * 60 + currentMinutes * 60 + currentSeconds;
console.log(dayInSeconds - secondsRemaining);