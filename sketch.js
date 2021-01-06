const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, ground, groundSprite , helicopterSprite;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	//packageSprite = Bodies.createSprite(width/2, 200, 10,10);
	//packageSprite.addImage(packageIMG);
	//packageSprite.scale=0.2;
	 
//var drop  = {
    //restitution: 0.5
  //}

  	//packageSprite = Bodies.rectangle (width/2, 200, 10, drop)

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite = Bodies.rectangle(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	//engine = Engine.create();
	//world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	//World.add(world, packageBody);
	
   // var package = {
		//restitution: 0.5
	 // }
	  
	//groundSprite = Bodies.rectangle(200,100,20,package);
	  //World.add(world, ball);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //keyPressed();
  drawSprites();
 
}

//function keyPressed() {
// if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	//packageSprite.x= packageBody.position.x ;
	//packageSprite.y= packageBody.position.y ;
	
    
  //}
//}



