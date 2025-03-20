// based off of code example from class (dan shiffman + liat berdugo)

var m = []; 
var amt = 9;
var phrases = ["Kumain ka na ba?", "Are you okay?", "How are you?"]
var randomCol = ["#DBB261", "#5F7EB7", "#BB543D"];
var karatula;
var crowd;

function preload(){
  karatula = loadFont("LL-KARATULA-020721.otf");
  soundFormats('m4a');
  crowd = loadSound("manila.m4a");
}

function setup() {
  crowd.setVolume(0.7);
  crowd.loop();
  createCanvas(windowWidth, 550);
  textFont(karatula);
  textSize(40);
  textAlign(CENTER);
  mover = new Mover();
  mover1 = new Mover();
  
  for(let i = 0; i < amt; i++){
    m.push(new Mover());
  }
}

function draw() {
  background("#E1E6EE");
  
  for(let i = 0; i < amt; i++){
    m[i].update();
    m[i].display();
    
        
    // made a vector that is mouseX, mouseY   
    let mouseVector = createVector(mouseX, mouseY);
    
    // check the distance between that vector and m[i].position
    let d = mouseVector.dist(m[i].position)
    
    // if that posititon is less than something, then turn the volume down
    if (d < 5) {
      crowd.setVolume(0.35);
    }
    
  }
}


class Mover{
  constructor(){
    this.position = createVector(random(width), random(height));
    this.velocity = createVector();
    this.acceleration = createVector();
    this.topspeed = 1;
    this.word = phrases[floor(random(phrases.length))];
    this.rCol = randomCol[floor(random(randomCol.length))];
  }

  update() {
    var mouse = createVector(mouseX,mouseY);
    this.acceleration = p5.Vector.sub(mouse,this.position);
    this.acceleration.setMag(0.1);

    this.velocity.add(this.acceleration);
    this.velocity.limit(this.topspeed);
    this.position.add(this.velocity);
  }

  display() {
    fill(this.rCol);
    text(this.word, this.position.x, this.position.y);
  }
}