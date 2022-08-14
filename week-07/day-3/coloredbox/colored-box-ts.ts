const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// draw a box that has different colored lines on each edge
canvas.width = 600;
canvas.height = 400;

ctx.strokeStyle = "#ff0000";
ctx.beginPath();
ctx.moveTo(10 , 10);
ctx.lineTo(200, 10);
ctx.stroke();

ctx.strokeStyle = "#00ff00";
ctx.beginPath();
ctx.moveTo(200, 10);
ctx.lineTo(200, 200);
ctx.stroke();

ctx.strokeStyle = "#0000ff";
ctx.beginPath();
ctx.moveTo(200, 200);
ctx.lineTo(10, 200);
ctx.stroke();

ctx.strokeStyle = "#00FFFF";
ctx.beginPath();
ctx.moveTo(10, 200);
ctx.lineTo(10, 10);
ctx.stroke();

export { };