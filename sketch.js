var redValue = 0;
var greenValue = 0;
var blueValue = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);
    fill(0);
    frameRate(20);
    background(0);
}

function draw() {

    noFill();
    
    redValue = random(160,255);
    greenValue = random(60,140);
    blueValue = random(40);

    stroke(redValue, 100, blueValue);

    if (mouseIsPressed == false) {
        line(random(mouseX), random(mouseY), height / 2, width / 2);
    } else {
        background(0);
        fill(0);
    }
}
