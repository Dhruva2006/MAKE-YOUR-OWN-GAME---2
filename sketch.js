
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player
var bullet

function preload() {

	image = loadImage("soldier1");
}

function setup() {
	createCanvas(displayWidth, displayHeight);

	player = createSprite(displayWidth / 10, displayHeight - 100, 50, 50);
	player.addImage("image");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  if(keyDown (RIGHT_ARROW)) {
    player.x = player.x + 5;
  }

  if(keyDown (UP_ARROW)) {
    player.y = player.y -5;
  }

  if(keyDown (DOWN_ARROW)) {
    player.y = player.y + 5;
  }

  if(keyWentUp ("space")) {
    bullet = createSprite(player.x, player.y, 10, 10);
    bullet.velocityX = 10;
  }
  
  drawSprites();
 
}



