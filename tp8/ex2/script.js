const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");


const mario = new Image();
const bg = new Image();

mario.src = "mario.png";
bg.src = "fond.png";


let frameW, frameH;


let col = 0;
let row = 0; 
let animSpeed = 0;


let bgX = 0;

mario.onload = () => {
    frameW = mario.width / 5;
    frameH = mario.height / 5;
};

function draw() {
    
    
    
    bgX -= 2;               
    if (bgX <= -canvas.width) bgX = 0;

    ctx.drawImage(bg, bgX, 0, canvas.width, canvas.height);
    ctx.drawImage(bg, bgX + canvas.width, 0, canvas.width, canvas.height);

    
    
    

    
    animSpeed++;
    if (animSpeed % 6 === 0) {  
        col++;
        if (col >= 5) col = 0;
    }

    
    ctx.drawImage(
        mario,
        col * frameW, row * frameH, frameW, frameH,
        50, 270,                
        frameW * 1.2, frameH * 1.2
    );

    requestAnimationFrame(draw);
}

bg.onload = () => draw();

