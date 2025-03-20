var colorI;
var strokeI;
let myFont;
let bgColor;
var colors = ["#E6DED4", "#F1B4B3", "#F28686", "#D92322", "#C10302"];

function preload() {
  myFont = loadFont("assets/PlayfairDisplay-Regular.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#E6DED4");
  textFont(myFont);
  colorI = colors[4];
  strokeI = colors[4];
  strokeWeight(4);

  textSize(15);
  fill(colors[4]);
  text("(click the I)", 715, 600);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  //background
  let r = floor(random(0, colors.length));
  background(colors[r]);

  //fill of the I -- must be different than the background
  let v = floor(random(0, colors.length));
  if (v == r) {
    v = r + 1;
    if (v == colors.length) {
      v = 0;
    }
  }
  colorI = colors[v];

  //stroke of the I
  strokeI = colors[floor(random(0, colors.length))];
}

function draw() {
  textSize(300);
  fill(colorI);
  stroke(strokeI);
  textAlign(CENTER);
  text("I", 755, 500);
}
