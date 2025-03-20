let myFont;
var fade = 2;
var imgs = [];
var imgObjects = [];

function preload() {
  myFont = loadFont("assets/PlayfairDisplay-Regular.ttf");

  //preload images
  imgs[0] = loadImage("1.png");
  imgs[1] = loadImage("2.png");
  imgs[2] = loadImage("3.png");
  imgs[3] = loadImage("4.png");
  imgs[4] = loadImage("5.png");
  imgs[5] = loadImage("6.png");
  imgs[6] = loadImage("7.png");
  imgs[7] = loadImage("8.png");
  imgs[8] = loadImage("9.png");
  imgs[9] = loadImage("10.png");
  imgs[10] = loadImage("11.png");
  imgs[11] = loadImage("12.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // the class is structured like this:
  // constructor(x, y, img, opacity, isAFader, isAShaker, isOn)

  imgObjects[0] = new Delaney(180,50, imgs[0], 255, false, true, false);
  imgObjects[1] = new Delaney(470,50, imgs[1], 255, true, false, false);
  imgObjects[2] = new Delaney(770,50, imgs[2], 255, false, true, false);
  imgObjects[3] = new Delaney(1070,50, imgs[3], 255, false, true, false);
  imgObjects[4] = new Delaney(180,320, imgs[4], 255, true, false, false);
  imgObjects[5] = new Delaney(470,320, imgs[5], 255, false, true, false);
  imgObjects[6] = new Delaney(770, 320, imgs[6], 255, false, true, false);
  imgObjects[7] = new Delaney(1070,320, imgs[7], 255, true, false, false);
  imgObjects[8] = new Delaney(180,610, imgs[8], 255, false, true, false);
  imgObjects[9] = new Delaney(470,610, imgs[9], 255, false, true, false);
  imgObjects[10] = new Delaney(770,610, imgs[10], 255, true, false, false);
  imgObjects[11] = new Delaney(1070,610, imgs[11], 255, false, true, false);
}

function draw() {
  //background color & font setup
  background("#E6DED4");
  textFont(myFont);
  textAlign(CENTER);

  //"click squares to find love"
  textSize(15);
  fill(193, 3, 2, 255);
  text("(click the patterns to find love)", width/2, 30);

  // L O V E letters
  textSize(200);
  fill(193, 3, 2);
  text("L", 320, 530);
  text("O", 600, 250);
  text("V", 900, 820);
  text("E", 1200, 530);

  //image objects
  for (let i = 0; i < imgObjects.length; i++) {
    imgObjects[i].display();
    imgObjects[i].move();
    imgObjects[i].fade();
  }
}

function mousePressed() {
  for (let i = 0; i < imgObjects.length; i++) {
    imgObjects[i].clickedOn();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Delaney {
  constructor(x, y, img, opacity, isAFader, isAShaker, isOn) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.opacity = opacity;
    this.isAFader = isAFader; // either true or false
    this.isAShaker = isAShaker; // either true or false
    this.isOn = isOn;
  }

  display() {
    tint(255, this.opacity);
    image(this.img, this.x, this.y);
  }

  move() {
    if (this.isAShaker == true && this.isOn == true) {
      let xspeed = random(-1, 1);
      this.x += xspeed;
    }
  }

  fade() {
    if (this.isAFader == true && this.isOn == true) {
      this.opacity -= fade;
    }
  }

  clickedOn() {
    if (
      mouseX > this.x &&
      mouseX < (this.x+263) &&
      mouseY > this.y &&
      mouseY < (this.y + 263)
    ) {
      if (this.isOn == false) {
        this.isOn = true;
      }
      else{
        this.isOn= false;
      }
    }
  }
}
  