'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

let size: number = 300;
let color: string [] = ["red", "yellow", "pink","blue","orange","green"];

function rainbow(size: number, color: string) {
    ctx.fillRect(canvas.width / 2 - size / 2, canvas.height / 2 - size / 2, size, size);
    ctx.fillStyle = color;
    
}

for (let i = 0; i < color.length; i+=1){
    rainbow(size, color[i]);
    size = size - 40
}
export { };