var hr,mn,sc;


function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);


}

function draw() {
  background(0); 
  translate(400,400);
  rotate(-90);
  hr=hour();
  mn=minute();
  sc=second();

  scAngle=map(sc,0,60,0,360);
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(5);
  line(0,0,100,0);
  pop();

  noFill();
  stroke(255,0,0);
  strokeWeight(5);

  arc(0,0,400,400,0,scAngle);

  mnAngle=map(mn,0,60,0,360);
  push();
  rotate(mnAngle);
  stroke(71,120,230);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  noFill();
  stroke(71,120,230);
  strokeWeight(7);

  arc(0,0,450,450,0,mnAngle);

  hrAngle=map(hr%12,0,12,0,360);
  push();
  rotate(hrAngle);
  stroke(20,250,190);
  strokeWeight(9);
  line(0,0,100,0);
  pop();

  noFill();
  stroke(20,250,190);
  strokeWeight(9);

  arc(0,0,500,500,0,hrAngle);
  
  console.log(hr);
  drawSprites();
}