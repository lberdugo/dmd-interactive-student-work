let imgPaths = ['kittens/kitten0.png', 'kittens/kitten1.png', 'kittens/kitten2.png', 'kittens/kitten3.png','kittens/kitten4.png','kittens/kitten5.png'];
let imgs = [];

function preload() {
  font = loadFont ('bolton.ttf');
  
  for (let i = 0; i < imgPaths.length; i++) {
    imgs[i] = loadImage(imgPaths[i]);
  }
  
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#4036C3");
  textSize(90);
  textAlign(CENTER);
  textFont(font);
}

function draw() {
  fill(255);
  text("She carried a lot I suppose...", width/2, height/2);
}

function mousePressed() {
  imageMode(CENTER);
  let randomIndex = floor(random(imgs.length));
  let randomImg = imgs[randomIndex];
  image(randomImg, mouseX, mouseY);
}







