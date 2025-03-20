var fade = 0.09;
var opacity = 0;
let img1;
let myFont;
var button;
function preload() {

  myFont = loadFont("assets/PlayfairDisplay-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#E6DED4");
  img = createImg("you.png");
  img.position(380,250);

  button = createImg("refresh.png");
  button.position(1430,790);
  button.mousePressed(resetSketch);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  stroke(0, 0, 0);
  strokeWeight(2);
  line(450, 400, 1050, 400);

  strokeWeight(20);
  stroke(193, 3, 2);
  fill(193, 3, 2);
  if (mouseIsPressed === true) {
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
   
  textFont(myFont);
  textSize(15);
  noStroke();
  fill(193, 3, 2, opacity);
  textAlign(CENTER);
  text("(use the mouse to write what you love!)", 750, 550);

  opacity = opacity + fade;
}

function mousePressed() {
  img.remove();
}

function resetSketch() {
  window.location.reload(); 
}

