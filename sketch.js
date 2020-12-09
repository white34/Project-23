var helicopterIMG, helicopterSprite, packageSprite, packageIMG, downSprite;
var packageBody,ground, downBody, sideBody1, sideBody2;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var down, side1Sprite, side2Sprite;
 

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	downSprite =createSprite(400, 650, 200, 20);

	downSprite.shapeColor=color("red");

	side1Sprite =createSprite(300, 620, 20, 100);

	side1Sprite.shapeColor=color("red");

	side2Sprite =createSprite(500, 620, 20, 100);

	side2Sprite.shapeColor=color("red");
	
	groundSprite=createSprite(width/2, height-35, width,10);

	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	
	downBody = Bodies.rectangle(400, 650, 200, 20, {isStatic:true} );
	World.add(world, downBody);

	sideBody1 = Bodies.rectangle(300, 620, 20, 100, {isStatic:true} );
	World.add(world, sideBody1);

	sideBody2 = Bodies.rectangle(500, 620, 20, 100, {isStatic:true} );
	World.add(world, sideBody2);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );


	World.add(world, ground);

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);
    
  }
}

