var x = 0;
var y = 0;

function setup(){
    createCanvas(1080,720);
}

function draw(){
    background(247, 203, 219) // automatic semicolon insertion
    rect(x,y,10,10);
    x = x + 1;
    x = x % 1050; // modulo operator
    y = y + 5;
    y = y % 700;
}