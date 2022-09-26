const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;

const x: number = 10;
const y: number = 10;
const w: number = 10;
const h: number = 10;

for (let i = 0; i < 20; i++) {
   ctx.fillStyle = "purple";
   ctx.fillRect(x, y, w, h);
   ctx.strokeRect(x, y, w, h);
   ctx.translate(x, y);
}

export { };