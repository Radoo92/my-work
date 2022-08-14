const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function singleLine(x: number, y: number){
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + 50, y);
    ctx.stroke();
}

for (let y: number = 10; y <= canvas.height; y += canvas.height / 3) {
    singleLine(10, y);
}
export { };