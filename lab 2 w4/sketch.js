var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'red',
    draw: function (){
        fill( this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.y || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var yellowBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'yellow',
    draw: function (){
        fill( this.colour);
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var limeBrick = {
    x: 10,
    y: 20,
    w: 30,
    h: 30,
    c: 10,
    xSpeed: 2,
    ySpeed: 2,
    colour: 'lime',
    draw: function (){
        fill( this.colour);
        rect(this.x, this.y, this.w, this.h, this.c);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};
// redBrick.x++ returns value then increments
// ++redBrick.x increments value and then returns
    
function setup(){
    createCanvas(720,480);
}

function draw(){
    background('blue');
    redBrick.draw();
    redBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
    limeBrick.draw();
    limeBrick.move();
}