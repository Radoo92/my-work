'use strict';

import { Station } from "./station";
import { Car } from "./car";

/*Create Station and Car classes
Station
it stores how much gas is avaliable: gasAmount
it can refill a car: refill(car: Car):
decreases the gasAmount by the capacity of the car (let us suppose that the car is empty) and
increases the car's gasAmount
Car
it stores how much gas is actually present: gasAmount
it stores the capacity of the tank: capacity
create a constructor for the Car class where you:
initialize gasAmount -> 0
initialize capacity -> 100*/

let car = new Car();
let station = new Station(200);

console.log("gasamount of the car before filling: " + car.gasAmount);
console.log("gasamount of the station before filling: " + station.gasAmount);

station.refill(car);

console.log("gasamount of the car after filling: " + car.gasAmount);
console.log("gasamount of the station before filling: " + station.gasAmount);