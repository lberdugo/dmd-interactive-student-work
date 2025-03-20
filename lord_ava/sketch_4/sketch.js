let sentence1 = "I remind herself.";
let sentence2 = "to stretch and forgive.";

let stretchFactor = 1000; 

function preload() {
  font = loadFont ('bolton.ttf');
  
  }

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(90);
  textAlign(CENTER);
  textFont(font);
}

function draw() {
  background("#4036C3");
  fill(255);

  push(); 
  scale(stretchFactor, 1); 
  text(sentence1, width/2, height/4); 
  pop(); 
  
  push(); 
  scale(stretchFactor, 1); 
  text(sentence2, width/2, height/2); 
  pop();
  
  stretchFactor = map(mouseX, 0, width, 1, 2);
}