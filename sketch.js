
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var boyImage, stoneImage, mangoImage, treeImage;
var M1, M2, M3, M4, M5, M6, M7, M8, M9, M10;
var A1, A2, A3, A4, A5, A6, A7, A8, A9, A10;
var ground, stone;
var StoneAttachment;

function preload()
{
	boyImage = loadImage("boy.png");
	stoneImage = loadImage("stone.png");
	mangoImage = loadImage("mango.img");
	treeImage = loadImage("tree.png");
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	M1 = new Mango(900, 100, 20);
	M2 = new Mango(830, 200, 20);
	//M3 = new Mango(900, 100, 20);
	//M4 = new Mango(900, 100, 20);
	//M5 = new Mango(900, 100, 20);
	//M6 = new Mango(900, 100, 20);
	//M7 = new Mango(900, 100, 20);
	//M8 = new Mango(900, 100, 20);
	//M9 = new Mango(900, 100, 20);
	//M10 = new Mango(900, 100, 20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



