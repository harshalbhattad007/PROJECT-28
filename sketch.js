
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
function preload()
{
	boy = loadImage("images/boy.png");
	tree = loadImage("images/tree.png");
	
}

function setup() {
	createCanvas(2000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1=new mango(1100,100,30);
  mango2=new mango(1170,130,30);
  mango3=new mango(1240,160,30);
  mango4=new mango(1310,190,30);
  mango5=new mango(1380,220,30);
	Engine.run(engine);


  stoneObj=new Stone(235,420,30);
  connect=new Slingshot(stoneObj.body,{x:130,y:420})
}


function draw() {
  rectMode(CENTER);
  background("white");
  image(boy,100,340,200,300);
  image(tree,1000,0,500,600);
  stoneObj.display()
  connect.display()
mango1.display ()
  mango2.display ()
  mango3.display ()
  mango4.display ()
  mango5.display ();
  hit(stoneObj,mango1);
  hit(stoneObj,mango2);
  hit(stoneObj,mango3);
  hit(stoneObj,mango4);
  hit(stoneObj,mango5);
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    connect.fly();
}

function hit(ls,lm){
  mangoP = lm.body.position;
  stoneT = ls.body.position;
var D = dist(stoneT.x,stoneT.y,mangoP.x,mangoP.y)
if(D<=ls.r+lm.r){
  Matter.Body.setStatic(lm.body,false);
}


  
}



