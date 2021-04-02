
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperimg=loadImage("paper.png");
	dustbinimg=loadImage("images.png")
}

function setup() {
	createCanvas(1200, 800);
	rectMode(CENTER);
	
	engine = Engine.create();
	world = engine.world;

	lowerarm=new Box(width/2+200,635,150,20,180);
    //leftarm=new Box(width/2+200-75,595,20,100,90);
   // rightarm=new Box(width/2+200+75,595,20,100,90);
   
	Ball = Bodies.circle(50 ,630 ,20 );
	//Ball.addImage(paperimg);

	World.add(world, Ball);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
   
	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
 rect(ground.position.x,ground.position.y,width,10);
 imageMode(CENTER);
 image(paperimg,Ball.position.x,Ball.position.y,50,50);
 lowerarm.display();
 //leftarm.display()
 //rightarm.display();
 
}

function keyPressed() {
 if (keyCode === UP_ARROW) {
	 Matter.Body.applyForce(Ball,Ball.position,{x:0.06,y:-0.06});
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



