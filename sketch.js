const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world;
var ground,ball;
var binImg,bin;

function preload(){
    binImg = loadImage("dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    Paper1 = new Paper();

    bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

launcher1=new Launcher(Paper1.body,{x:250,y:400})

    binPart1 = new Dustbin(902,505,10,120);
    binPart2 = new Dustbin(962,565,130,10);
    binPart3 = new Dustbin(1024,505,10,120);
}

function draw(){
    background(0);
    Engine.update(engine);
  ground.display();
    Paper1.display();
    binPart1.display()
    binPart2.display()
    binPart3.display()
    launcher1.display()
    
      
    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(launcher1.body, {x:mouseX, y: mouseY});
}
function mouseReleased(){
launcher1.fly()
}


