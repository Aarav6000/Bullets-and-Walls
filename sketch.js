//create variables
var bullet, wall;
var speed, weight, damage, thickness;

function setup() {
  createCanvas(1600,400);

  textSize(18);
  damage =  " ";

  //randomizes the speed and weight
  speed = Math.round(random(223, 321));
  weight = Math.round(random(30, 52));
  thickness = Math.round(random(22, 83));

  //make sprite for wall
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);

  //make sprite for bullet
  bullet = createSprite(80, 200, 40, 15);
  bullet.shapeColor = 255;
  bullet.velocityX = speed;
}

function draw() {
  background(0);

  //detects if bullet is touching the wall
  if (bullet.isTouching(wall)) {
    //calculates the damager
    damage = Math.round(0.5 * weight * speed * speed /(thickness * thickness * thickness));
  }
  
  text("damage:" + damage, 1150, 80);

  if(damage > 10) {
    wall.shapeColor = rgb(255, 0, 0);
  } else if (damage <= 10 && damage > 0) {
    wall.shapeColor = rgb(0, 255, 0);
  } else {
    wall.shapeColor = rgb(80, 80, 80);
  }

  //the bullet stops at the wall
  bullet.collide(wall);

  drawSprites();
}