let poem = ["Perpetually Sore"];
let font;
let w = [];

let bubbles = [];
let flower;
let kittens = [];

function preload() {
  flower = loadImage('kittens/flower.png');
  for (let i = 0; i < 6; i++) {
    let k = 'kittens/kitten'+i+'.png';
    kittens[i] = loadImage(k);
    font = loadFont ('bolton.ttf')
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(32);
  
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(500, 200);
    // let kitten = random(kittens);
    let b = new Bubble(x, y, r);
    bubbles.push(b);
  }

  for (let i = 0; i < poem.length; i++) {
    w.push(new Jitter(poem[i]));
  }
}


function mousePressed(){
  
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].clicked(mouseX, mouseY);
  }
  
  for (let i = 0; i < w.length; i++) {
    w[i].clicked();
  }
}


function draw() {
  background('#4036C3');
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }
  
  for (let i = 0; i < w.length; i++) {
    w[i].drawWord();
  }
}


class Jitter {
  constructor(word) {
    this.x = 100;
    this.y = random(475);
    this.speedrange = 2;
    this.word = word;
  }
  
  

  drawWord() { 
    if(this.mouseIsOver()){
      fill(255, 0, 0);
    } else{
      fill(0);
      textFont(font);
      fill(255);
      textSize (111);
    }
    
    var s = random(-1*this.speedrange, this.speedrange);
    text(this.word, this.x + s, this.y + s);
  }
  
  mouseIsOver(){
    if(mouseX > this.x &&
      mouseX < this.x + textWidth(this.word) &&
      mouseY > this.y - 2 * textAscent() &&
      mouseY < this.y){return true; } else {return false;}
  }
  
  clicked(){
    if(this.mouseIsOver()){
      this.speedrange++;

    }
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.kitten = kittens[floor(random(kittens.length))];
  }

  clicked(px, py) {
    //let d = dist(px, py, this.x, this.y);
    //if (d < this.r) {
    if (
      px > this.x &&
      px < this.x + this.r &&
      py > this.y &&
      py < this.y + this.r
    ) {
      this.kitten = flower; //random(kittens);
    }
  }

  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }

  show() {
    image(this.kitten, this.x, this.y, this.r, this.r);
    // stroke(255);
    // strokeWeight(4);
    // fill(this.brightness, 125);
    // ellipse(this.x, this.y, this.r * 2);
  }
}
