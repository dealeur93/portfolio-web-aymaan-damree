let angle = 0;
const shoe = document.querySelector('.shoe');

function animate() {
    angle += 0.03;

    const x = Math.sin(angle) * 2;
    const y = Math.cos(angle * 2) * 1.5;
    const r = Math.sin(angle) * 1.5;

    shoe.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;

    requestAnimationFrame(animate);
}

setTimeout(() => {
    animate();
}, 1200);
