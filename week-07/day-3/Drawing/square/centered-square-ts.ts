const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

// Draw a green 10x10 square to the center of the canvas
ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(canvas.width / 2, canvas.height/ 2, 10, 10);
ctx.stroke();

export { };