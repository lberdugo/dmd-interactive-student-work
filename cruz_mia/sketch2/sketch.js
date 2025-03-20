var karatula;
var crowd;
var original = "Kumain ka na ba?";
var translation = "Did you eat yet?";
var randomCol = ["#DBB261", "#BB543D"];
var rCol;

function preload(){
  karatula = loadFont("LL-KARATULA-020721.otf");
  soundFormats('m4a');
  crowd = loadSound("manila.m4a");
}

function setup() {
  createCanvas(600, 550);
  background("#E1E6EE");
  crowd.setVolume(0.7);
  textFont(karatula);
  textSize(60);
  textAlign(CENTER);
  frameRate(10);
  crowd.loop();
  
  let bbox = karatula.textBounds(original, width/2, height/2, 60);
  noFill();
  noStroke();
  rect(bbox.x, bbox.y, bbox.w, bbox.h);

  rCol = randomCol[floor(random(randomCol.length))];
}

function draw() {

  if(mouseX > 73 && mouseX < 530  && mouseY > 253 && mouseY < 300){
    fill(rCol);
    background("#E1E6EE");
    text(translation, width/2, height/2);
    crowd.pause();
  } else {
     fill("#5F7EB7");
     background("#E1E6EE");
     text(original, width/2, height/2);
     if(!crowd.isPlaying()){
       crowd.loop();
     }
  }
  
}
