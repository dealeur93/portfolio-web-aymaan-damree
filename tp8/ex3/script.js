const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "gouttes.png";

let animations = []; 


canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    animations.push({
        frame: 0,
        x: x,
        y: y
    });
});


function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    
    animations.forEach((drop, index) => {
        const f = drop.frame;
        const info = infoSprite[f];  

        
        ctx.drawImage(
            img,
            info.x, info.y, info.w, info.h,                
            drop.x - info.w / 2, drop.y - info.h / 2,      
            info.w, info.h
        );

        drop.frame++;

        
        if (drop.frame > 12) {
            animations.splice(index, 1);
        }
    });

    requestAnimationFrame(draw);
}

img.onload = draw;

