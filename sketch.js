const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var palyer, playerBase;
var computer, computerBase;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  playerBase = new PlayerBase(windowWidth - 1015, random(450, height - 300), 180, 150);
  player = new Player(windowWidth - 995,playerBase.body.position.y - 153,50,180)

  computerBase = new ComputerBase(
    windowWidth - 300,
    random(450, height - 300),
    180,
    150
  );
  computer = new Computer(
    windowWidth - 280,
    computerBase.body.position.y - 153,
    50,
    180
  );

  
}

function draw() {
  background(189);

  Engine.update(engine);

  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

  
  computerBase.display();
  computer.display();
  playerBase.display();
  player.display();

}
