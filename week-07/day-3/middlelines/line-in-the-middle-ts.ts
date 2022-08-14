const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

canvas.width = 600;
canvas.height = 400;

ctx.beginPath();
ctx.moveTo(0, canvas.height / 2);
ctx.strokeStyle = "#ff0000";
ctx.lineTo(canvas.width, canvas.height / 2);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(canvas.width / 2, 0);
ctx.strokeStyle = "#00ff00";
ctx.lineTo(canvas.width / 2, canvas.height);
ctx.stroke();


export { };


