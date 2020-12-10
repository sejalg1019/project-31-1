const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  
  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
  
  for (var j = 40; j <=width; j=j+50)
  {
    plinkos.push(new Plinko(j,75,10));
  }
  
  for (var j = 15; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,175,10));
  }

  for(var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  ground = new Ground(240,height,480,20);
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);



  ground.display();
  drawSprites();
}
