var tada;
var button;
var myString = 'boo!';
var numberOfClicks = 0;
let myInput;

function setup(){
    createCanvas(windowWidth, windowHeight);
    tada = createAudio('yippee-meme-sound-effect.mp3');
    button = createButton('click me');
    button.position(35,290);
    button.hide();

    button2= createButton('no, click me');
    button2.position(200, 190);
    button2.hide();
    button2.mousePressed(function(){
        button2.hide();
        button.show();
        numberOfClicks++;
        sillything();
    });

    //object callback
    button.mousePressed(function(){
        //tada.play();
        button2.show();
        button.hide();
        numberOfClicks++;
        sillything();
    });

    myInput = createInput();
    myInput.position(170, 113);
}

function draw(){
    background('pink');
    if(mouseIsPressed){// event pulling
        background('purple');
        //tada.play();
    }
    ellipse(mouseX, mouseY, 10, 10);
    text(myString, 100, 100);
    text(numberOfClicks, 150, 150);

    let msg = myInput.value();
    text(msg, 25, 55);
}

//global callback
function mousePressed(){
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        let fs = fullscreen();
        fullscreen(!fs);
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
    button.show();
}

function sillything(){
    if(numberOfClicks > 9){
        tada.play();
    }
}