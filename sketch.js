
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var trash;
var dustbin,dustbinimg;

function preload()
{
	dustbinimg=loadImage("dustbin.png")
}

function setup() {
	createCanvas(1200, 1200);
	

	engine = Engine.create();
	world = engine.world;

	 dustbin=createSprite(900,425,50,50);
	 dustbin.addImage(dustbinimg);
	 dustbin.scale=1
	 dustbin.debug=true;

	//Create the Bodies Here.
	ground= new Ground(600,600,1200,20);
	log1= new Box(800,540,20,100);
	log2= new Box(1000,540,20,100);
	log3= new Box(900,580,180,20);
 trash=new ball(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  ground.display();
  //log1.display();
  //log2.display();
  //log3.display();
  trash.display();

  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(trash.body,trash.body.position,{x:85,y:-85});
}
  drawSprites();
 
}



