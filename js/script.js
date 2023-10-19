const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

ctx.beginPath();
ctx.moveTo(1,50);
ctx.lineTo(100,50);
ctx.strokeStyle:"#8B4513";
ctx.stroke();