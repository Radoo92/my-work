'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

//// Draw four different size and color rectangles
function drawRect(x: number, y:number, w: number, h: number, color: string): void
{
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.rect(x, y, w, h);
    ctx.fill();
}

let numOfRect = 3;
let colors: string[] = ["red", "blue", "brown", "green", "yellow", "pink",];
for (let i = 0; i < numOfRect; i++) {
    let maxSize = canvas.width/4;
    let maxCoordinate = canvas.width-maxSize;
    let coordinateX = Math.random()*maxCoordinate;
    let coordinateY = Math.random()*maxCoordinate;
    let randomSize = Math.random()*maxSize;
    let colorIndex = Math.floor(Math.random()*colors.length);
    let randomcolor = colors[colorIndex];

    drawRect(coordinateX, coordinateY, randomSize, randomSize, randomcolor)
   
}

export {};