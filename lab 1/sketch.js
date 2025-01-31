

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('pink');
    fill('beige');
    stroke('white');
    for(var i  = 0; i < 5000; i++){
        rect((i*10)%width,(i*10)%innerHeight,10,10);
    }

    fill('yellow')
    stroke('black');
    if(mouseX < 200){
        rect(mouseX,mouseY,100,100);
    }else{
        rect(mouseX,mouseY,50,50,25);
    }
}
