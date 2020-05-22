var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,ground2,ground3,ground4,ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 250);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	 ground= new Log(400,220,800,15);

	 ground2= new Log2(650,203,175,20);

	 ground3= new Log2(555,170,20,85);

	 ground4= new Log2(745,170,20,85);
	 
	 ball= new Garbage(100,150,30,30);
     


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ball.display();
  
}



