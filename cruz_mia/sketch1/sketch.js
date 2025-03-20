var karatula;
var crowd;
var randomCol = ["#DBB261", "#5F7EB7", "#BB543D"];
var rCol;
var phrase = "Kumain ka na ba?";

function preload(){
  karatula = loadFont("LL-KARATULA-020721.otf");
  soundFormats('m4a');
  crowd = loadSound("manila.m4a");
}

function setup() {
  createCanvas(windowWidth, 550);
  background("#E1E6EE");
  textFont(karatula);
  textSize(50);
  textAlign(CENTER);
  frameRate(25);
  crowd.setVolume(0.7);
  crowd.loop();
}

function draw() {

  rCol = randomCol[floor(random(randomCol.length))];

  fill("#BB543D");
  text(phrase, width / 2, height / 2);
  if (mouseIsPressed) {
    fill(rCol);
    text(phrase, mouseX, mouseY);
    crowd.pause();
  } else {
    if (!crowd.isPlaying()) {
      crowd.loop();
    }
  }
}
  