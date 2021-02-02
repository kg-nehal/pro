const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Ball(150,500,75);
	bobObject2 = new Ball(200,500,75);
	bobObject3 = new Ball(250,500,75);
	bobObject4 = new Ball(300,500,75);
	bobObject5 = new Ball(350,500,75);

	rope1 = new Rope(bobObject1.body, roof.body, -bobDiameter*2, 0);
	rope2 = new Rope(bobObject2.body, roof.body, -bobDiameter*2, 0);
	rope3 = new Rope(bobObject3.body, roof.body, -bobDiameter*2, 0);
	rope4 = new Rope(bobObject4.body, roof.body, -bobDiameter*2, 0);
	rope5 = new Rope(bobObject5.body, roof.body, -bobDiameter*2, 0);

	roof = new Roof(400,100,700,70);
	ground = new Roof(300,height,400,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  drawSprites();
 
}



