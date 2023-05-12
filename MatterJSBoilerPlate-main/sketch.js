
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, groundObj, leftSide, rightSide; 
var world;
var radius = 40;


function setup() {
	createCanvas(800, 700);
	var ball_options={ isStatic:false, restitution:0.3, friction:0, density:1.2 }

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ball = Bodies.circle ( 260, 100, radius/2, ball_options)
World.add (world, ball)
groundObj = new Ground (width/2, 670, width, 10);
leftSide = new Ground (500, 600, 20, 70);
rightSide = new Ground (600, 600, 20, 70);
	Engine.run(engine);
  rectMode (CENTER)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius);
   groundObj.display();
    leftSide.display();
	 rightSide.display()
  
 
}
function keyPressed() { if (keyCode === UP_ARROW)
{ Matter.Body.applyForce(ball,ball.position,{x:85,y:-85}); 
	} 
}



