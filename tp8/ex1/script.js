const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let frameW, frameH;      
let x = 200;
let y = 200;

let col = 0;             
let row = 0;             

const sprite = new Image();
sprite.src = "sprites.png";

const grass = new Image();
grass.src = "pelouse.png";

sprite.onload = () => {
    frameW = sprite.width / 4;
    frameH = sprite.height / 4;
    draw();
};

grass.onload = draw;


function draw() {
    ctx.drawImage(grass, 0, 0, 512, 512);

    ctx.drawImage(
    sprite,
    col * frameW, row * frameH, frameW, frameH,   

    x, y,
    frameW * 0.5, frameH * 0.5                    
);

}

document.addEventListener("keydown", e => {
    const speed = 8;

    if (!frameW) return;

    if (e.key === "ArrowDown") {
        row = 0;          
        y += speed;
    }

    if (e.key === "ArrowUp") {
        row = 1;          
        y -= speed;
    }

    if (e.key === "ArrowLeft") {
        row = 2;          
        x -= speed;
    }

    if (e.key === "ArrowRight") {
        row = 3;          
        x += speed;
    }

    
    col = (col + 1) % 4;

    
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x > canvas.width - frameW) x = canvas.width - frameW;
    if (y > canvas.height - frameH) y = canvas.height - frameH;

    draw();
});

