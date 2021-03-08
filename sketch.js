
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,line1,line2;
var box1,box2,box4,box3,box5,box6,box7,boxx8,box9,box10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20;
var launcher,rock;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(400,690,850,10);
    line1=new Ground(400,600,150,10);
    line2=new Ground(600,550,150,10);
    box1=new Box(400,580,20,30);
    box2=new Box(385,580,20,30);
    box3=new Box(415,580,20,30);
box4=new Box(430,580,20,30);
    box5=new Box(390,560,20,30);    
    box6=new Box(405,560,20,30);
    box7=new Box(420,560,20,30);
    boxx8=new Box(395,540,20,30);
    box9=new Box(415,540,20,30);
    box10=new Box(405,520,20,30);
    b11=new Box(600,530,20,30);
    b12=new Box(585,530,20,30);
    b13=new Box(615,530,20,30);
    b14=new Box(630,530,20,30);
    b15=new Box(590,510,20,30);
    b16=new Box(605,510,20,30);
    b17=new Box(620,510,20,30);
    b18=new Box(595,490,20,30);
    b19=new Box(615,490,20,30);
    b20=new Box(605,470,20,30);
    rock=new Stone(100,470,20,20);
    launcher=new slingshot(rock.body,{x:85,y:420})
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  line1.display();
  line2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  boxx8.display();
  box9.display();
  box10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  rock.display();
  launcher.display();
  
}

function mouseDragged(){
  Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function keyPressed(){
  if(keyCode===space){
    Matter.body.setPosition(rock.body,{x:85,y:420});
    launcher.attach(rock.body);
  }
}

