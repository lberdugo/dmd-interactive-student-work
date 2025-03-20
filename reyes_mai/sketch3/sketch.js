var font;
var points = [];
var b = [];
var bbox;
var offsetX = 0;
var offsetY = 0;

function preload() {
  font = loadFont("Suba-Display.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  let bbox = font.textBounds("PO", 0, 0, 400);

  let offsetX = bbox.w / 2;
  let offsetY = bbox.h / 2;

  points = font.textToPoints(
    "PO",
    windowWidth / 2 - offsetX,
    windowHeight / 2 + offsetY,
    400,
    {
      sampleFactor: 0.09,
      simplifyThreshold: 0,
    }
  );
  console.log(points[0]);

  for (let i = 0; i < points.length; i++) {
    b[i] = new Ball(points[i].x, points[i].y);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let i = 0; i < points.length; i++) {
    b[i].move();
    b[i].bounce();
    b[i].display();
  }
  textFont(font);
}

class Ball {
  constructor(x, y, xspeed, yspeed) {
    this.x = x;
    this.y = y;
    this.xspeed = 0;
    this.yspeed = 0;
  }

  move() {
    if (dist(mouseX, mouseY, this.x, this.y) < 20) {
      this.xspeed = random(-1, 1);
      this.yspeed = random(-1, 1);
    }

    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  bounce() {
    if (this.x > width || this.x < 0) {
      this.xspeed = this.xspeed * -1;
    }

    if (this.y > height || this.y < 0) {
      this.yspeed = this.yspeed * -1;
    }
  }

  display() {
    fill(149, 153, 72);
    noStroke();
    ellipse(this.x, this.y, 8, 8);
  }
}
