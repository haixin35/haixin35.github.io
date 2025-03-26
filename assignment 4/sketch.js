//confetti
// colours
//shapes random
//speeds
//stretch goal
//rotations random

var position = 0;
var positions = [];
var colours = [];
var shapes = [];
var rotations = [];
var speeds = [];
var yippee;

var numberOfConfetto = 500;
var partyOn = false;

function setup(){
    createCanvas(windowWidth, windowHeight);
    yippee = createAudio('yippee-meme-sound-effect.mp3');
    noStroke();
    var button = createButton('Party party yeah');
    button.position(0,0);
    button.mousePressed(function(){
        partyOn = !partyOn;
    });

    for(var i = 0; i < numberOfConfetto; i++){
        colours[i] = color( random(255), random(255), random(255) );
        positions[i] = random(height);
        shapes[i] = shapeDecider();
        speeds[i] = random(6) + 1;
        rotations[i] = random(TWO_PI);
    }
}


function draw(){
    background('black');
    if(partyOn){
        party();
        yippee.play();
    }
}

function party(){
    for(var i = 0; i < colours.length; i++){
        fill( colours[i] );
        push();
        translate((i*10)%width , positions[i] );
        rotate(rotations[i]);
         if(shapes[i] === 'confetto'){
            rect( 0, 0, 15, 5);
         }
         if(shapes[i] === 'circle'){
            ellipse( 0, 0, 10, 10);
         }
         if(shapes[i] === 'face'){
            text('˶ᵔ ᵕ ᵔ˶', 0, 0);
         }   
         pop();
         positions[i] += speeds[i];
         positions[i] = positions[i] % height;
    } 
}

// starting point
function test(){
    fill('cornflowerBlue');
    rect(20,position++,15,5);
    rect(180,position,15,5);
    rect(70,position,15,5);
    rect(120,position,15,5);
    ellipse(250, position, 15,15);
    text('˶ᵔ ᵕ ᵔ˶', 300, position)
    position = position % windowHeight;
}

function shapeDecider(){
    var shape = 'confetto';
    if(random() > 0.6 ){
        shape = 'circle';
    }
    if(random()> 0.9){
        shape = 'face'
    }
    return shape;
}