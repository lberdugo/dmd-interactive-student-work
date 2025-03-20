let img;
let font;

function preload(){
  img =loadImage("magnifynew.png")
  font = loadFont ('bolton.ttf')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("#4036C3");
  textAlign(CENTER);
  textFont(font);
  fill(255);
  textSize (90);
  text("She found herself...", width/2, height/2); 
  
  fill ("#4036C3");
  noStroke();
  rect (mouseX,0,width,height);
  
  image (img,mouseX-200,0)
  
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}