const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

ctx.strokeStyle = "#00ff00";
ctx.beginPath();
ctx.moveTo(0,0);
ctx.lineTo(canvas.width, canvas.height);
ctx.stroke();

ctx.strokeStyle = "#ff0000";
ctx.beginPath();
ctx.moveTo(canvas.width, 0);
ctx.lineTo(0, canvas.height);
ctx.stroke();


export { };