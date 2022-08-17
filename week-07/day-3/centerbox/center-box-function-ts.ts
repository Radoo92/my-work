'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Function that draws square
// Draw a square the center
function drawThree(size: number){
    ctx.strokeStyle = "blue"
    ctx.strokeRect(canvas.width / 2, canvas.height /2 , size, size);
}

let size: number = 50;

for (let i: number = 1; i < 4; i++) {
    drawThree(size); // Draw at least 3 squares
    size = size + 20;
}

export { };