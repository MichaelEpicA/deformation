var car,wall;
var speed,height,exploding;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  speed=random(55,90);
  weight=random(400,1500);
  car.velocityX = speed;
  wall.shapeColor = color(80,80,80);
}

function draw() {
  if(wall.x - car.x < (car.width + wall.width) /2) {
    car.velocityX = 0;
    car.x = 1446;
    var deformation = 0.5 * weight * speed * speed / 22509;
    deformation = 200;
    if(deformation < 100) {
      car.shapeColor = "green";
    } else if(deformation > 100 && deformation < 180) {
      car.shapeColor = "yellow";
    } else if(deformation > 180) {
      car.shapeColor = "red";
    }

  }

  function task(i) {
   setTimeout(function() {
     console.log(i);
   }, 2000 * i)
  }
  background(0,0,0);  
  drawSprites();
}