const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

function drawLine(x: number, y: number, w: number, h: number, color: string): void{
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(w, h);
    ctx.strokeStyle = color;
    ctx.stroke();
}

for (let i = 20; i < canvas.width; i += 20){
    
    drawLine(i, canvas.height, 0, i, "green");
}

for (let i = canvas.height -20; i > 0; i -= 20){

    drawLine(canvas.width, i, i, 0, "purple");
}



export {};
