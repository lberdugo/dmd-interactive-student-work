var num = 12;
var b = [];
var word = ["tabi"];
var subaDisplay;

function preload() {
  subaDisplay = loadFont("../Suba-Display.ttf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < num; i++) {
    b[i] = new tabi(0, 0, 0);
  }
  b.push(new tabi(70, 114, 124));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(149, 153, 72);
  spotlight(mouseX, mouseY, 200);

  for (i = 0; i < b.length; i++) {
    b[i].move();
    b[i].bounce();
    b[i].display();
  }
}

function spotlight(x, y, radius) {
  beginShape();
  fill(0);
  vertex(0, 0);
  vertex(width, 0);
  vertex(width, height);
  vertex(0, height);

  beginContour();
  let numTimes = 360;
  for (let i = 0; i < numTimes; i++) {
    vertex(
      x + radius * cos((TWO_PI * i) / numTimes),
      y - radius * sin((TWO_PI * i) / numTimes)
    );
  }
  endContour();
  endShape(CLOSE);
}

function mousePressed() {
  if (b[b.length - 1].clicked() == true) {
    for (i = 0; i < b.length; i++) {
      b[i].pause();
    }
  }
}

class tabi {
  constructor(r, g, b) {
    this.x = random(width);
    this.y = random(height);
    this.xspeed = random(1, 2);
    this.yspeed = random(1, 2);
    this.r = r;
    this.g = g;
    this.b = b;
  }

  move() {
    this.x += this.xspeed;
    this.y += this.yspeed;
  }

  pause() {
    this.xspeed = 0;
    this.yspeed = 0;
  }

  clicked() {
    if (dist(mouseX, mouseY, this.x, this.y) < textWidth("TABI") / 2) {
      console.log("blue one clicked!");
      return true;
    }
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
    var d = dist(mouseX, mouseY, this.x, this.y);
    if (d < 200 - textWidth("TABI") / 2.5) {
      fill(this.r, this.g, this.b);
      textAlign(CENTER, CENTER);
      textSize(75);
      textFont(subaDisplay);
      text("TABI", this.x, this.y);
    }
  }
}
