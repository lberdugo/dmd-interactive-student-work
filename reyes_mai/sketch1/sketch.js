var font;
var points = [];

function preload() {
  font = loadFont("Suba-Display.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  points = font.textToPoints("TABI", 300, 400, 400, {
    sampleFactor: 0.7,
    simplifyThreshold: 0,
  });
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  stroke(70, 114, 124);
  strokeWeight(1);
  fill(70, 124, 114);
  points.forEach((point) => {
    let distance = createVector(point.x - mouseX, point.y - mouseY);
    let distortion = distance.mult(150 / distance.mag());
    circle(point.x + distortion.x, point.y + distortion.y, 10);
  });
}
