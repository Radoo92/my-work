'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function drawThree(size: number){
    ctx.strokeStyle = "blue"
    ctx.strokeRect(canvas.width / 2, canvas.height /2 , size, size);
}

let size: number = 50;

for (let i: number = 1; i < 4; i++) {
    drawThree(size);
    size = size + 20;
}

export { };