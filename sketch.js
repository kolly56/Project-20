var wall,car,speed,weight,d;



function setup() {
  createCanvas(800,400);
 wall=createSprite(780, 200, 40, 400);
car=createSprite(0,200,20,20);
speed=random(55,90);
weight=random(400,1500);
car.velocityX=speed;
}

function draw() {
  background(0);  
  drawSprites();
  if(wall.x-car.x<(car.width+wall.width)/2)
  {
    car.velocityX=0;
  d=0.5*weight*speed*speed/22509;
if(d>180){
  car.shapeColor="red";
}
 else 
 if(d<180 && d>100){
  car.shapeColor="yellow";}

  else{
if(d<100){
  car.shapeColor="green";
}
  }
  
  }
}