
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperObject;
var dustbin1,dustbin2,dustbin3;
var ground;



function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject= new Paper(100,100);
	dustbin1= new Dustbin(1200,600);

	ground = new Ground(800,690);
	Engine.run(engine);

  
}


function draw() {
 
  background("skyblue");
  paperObject.display();
 dustbin1.display()

 ground.display();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:-85,y:-85});
	}
}


