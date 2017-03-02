var redValue = 0;
var greenValue = 0;
var blueValue = 0;

function setup() {
    createCanvas(windowWidth,windowHeight);
    fill(0);
    frameRate(90);
}

function draw() {
    
    background(0);

    noFill();
    
    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);

    stroke(redValue, greenValue, blueValue, 5);

    if (mouseIsPressed == false) {
        line(random(mouseX), random(mouseY), height / 2, width / 2);
    } else {
        background(0);
        fill(0);
    }
}
