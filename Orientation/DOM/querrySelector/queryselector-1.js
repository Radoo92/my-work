'use strict';

const king = document.getElementById('b325');
console.log('king', king);
const lamplighter = document.querySelector('.b329');
console.log('lamplighter', lamplighter);
const conceitedMan = document.getElementsByClassName('asteroid b326');
console.log('Conceited Man', conceitedMan);

const conceitedKing = document.querySelectorAll('#b325, .b326')
console.log('ConceitedKing', conceitedKing);
for (let i = 0; i < conceitedKing.length; i++) {
};

const noBusiness = document.querySelectorAll('#b325, .b326, .b329')
console.log('business', noBusiness);

const asteroids = document.querySelectorAll('div.asteroid');
for (let i = 0; i < asteroids.length; i++) {
    console.log(asteroids[i]);
};