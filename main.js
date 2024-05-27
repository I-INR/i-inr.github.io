let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let width = window.innerWidth;
let height = window.innerHeight;
console.log(width);
console.log(height);
canvas.width=width;
canvas.height=height;
let moon = new Moon(context, width, height);
let star = new Stars(context, width, height, 200);
let count = 0;
const frame = () => {
    count++;
    if(count % 10 == 0) {
        star.blink();
    }
    moon.draw();
    star.draw();
    requestAnimationFrame(frame);
}
frame();

function handleClick() {
    const mising1 = document.getElementById("mising1");
    const mising2 = document.getElementById("mising2");
    // const mising3 = document.getElementById("mising3");
    mising1.classList.add('fade-out');
    mising2.classList.add('fade-out');
    // mising3.classList.add('fade-out');
}