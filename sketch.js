var  wall;

var speed, bullet, weight;

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);

  

 
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  weight=random(30,50);

  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed;
  bullet.shapeColor=color(225);

  
if(hasCollided(bullet, wall)=== true)
{ 
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/( thickness * thickness * thickness);

if(damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);  
}
}
  
}

function draw() {
  background("black");

 

 console.log(bulletRightEdge);
  drawSprites();
}

function hasCollided(lbullet, lwall)
{
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;

  if(bullet.bulletRightEdge>=wallLeftEdge)
{
  
  return true
}
return false;
}

