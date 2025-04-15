// remixed with https://p5js.org/reference/p5.Image/pause/
let gif;
let paused = false;
let pausedFrame;

function preload() {
  gif = loadImage('food-coma-food.gif');
}

function setup() {
    createCanvas(220, 148);
    pausedFrame = createImage(gif.width, gif.height);
    pausedFrame.copy(gif, 0, 0, gif.width, gif.height, 0, 0, gif.width, gif.height);
}

function draw() {
    background(220);

    if (paused) {
        image(pausedFrame, 0, 0); 
    } else {
        image(gif, 0, 0); 
    }
}

function mousePressed() {
    paused = !paused; 
}
