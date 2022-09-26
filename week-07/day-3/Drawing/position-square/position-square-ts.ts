const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function drawSquare (x: number,y: number){
    ctx.fillRect(x, y, 50, 50);
}

let pos: number = 20;
for (let i: number = 1; i < 4; i++){
    drawSquare(pos, 20);
   pos = pos + 60

}

export { };
