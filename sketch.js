let earth;
let car;
let ark;
let night;
let angle = 0;


function preload(){
  earth = loadImage('image/earthmap.jpg');
  car = loadImage('image/1.png');
  ark = loadImage('image/2.png');
  night = loadImage('image/night.png');
}


function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  
}

function draw() {
 // texture (night);
 // plane (windowWidth, windowHeight);
 // pointLight(250, 250, 250,mouseX,mouseY, 100);
  background(5,15,35);
  ambientLight(50, 50, 50);
  directionalLight(250, 250, 255, 50, 35, -50);
  push();
  rotateY(mouseX*0.01);
  if(mouseX>width/2)
    rotateY(frameCount* 0.01)
  else
    rotateY(frameCount * -0.01);
  noStroke();
  texture (earth);
  sphere(100);
  pop();
  

 //   texture(night)
 //   textureMode(NORMAL)
 //   cylinder(1000,1000)
  
  push();
  translate(0,0,mouseX/1.8)
  rotateX(angle*0.1);
  rotateY(angle*0.3);
  rotateZ(angle*0.1);
  texture (car);
  box(100,50,1);
  pop();
  
  ambientLight(50, 50, 50); 
  directionalLight(250, 250, 255, 50, 35, -50);
   // push();
   // translate(0,0,mouseX)
   // rotateY(angle*0.1);
   // rotateZ(angle*0.1);
   // texture (ark);
   // box(100,50,0);
   // pop();
   angle += 0.3;
}

function windowResized() {
resizeCanvas(windowWidth, windowHeight); }