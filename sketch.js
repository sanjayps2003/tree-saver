var sun;

function setup() {
  createCanvas(1200,800);

}

function draw() {
  background(0,0,0);  
  fill("yellow");
  sun = ellipse(600,400,60);
  
  ellipseMode(CENTER);



  drawSprites();
}


