const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var slingShot;
var score = 0

function preload() {

}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    polygon1 = new Polygon(200,100);
    sling = new Slingshot(polygon1.body,{x:200, y:100});

    

    ground = new Ground(600,500,1200,20);

    ground3 = new Ground(700,300,320,20)

    box8 = new Box(700,235,30,40);
    box9 = new Box(730,235,30,40);
    box10 = new Box(760,235,30,40);
    box11 = new Box(790,235,30,40);
    box12 = new Box(820,235,30,40);
    box13 = new Box(670,235,30,40);
    box14 = new Box(640,235,30,40);
    box15 = new Box(610,235,30,40);
    box16 = new Box(580,235,30,40);
    
    box17 = new Box(610,195,30,40);
    box18 = new Box(640,195,30,40);
    box19 = new Box(670,195,30,40);
    box20 = new Box(700,195,30,40);
    box21 = new Box(730,195,30,40);
    box22 = new Box(760,195,30,40);
    box23 = new Box(790,195,30,40);

    box24 = new Box(640,155,30,40);
    box25 = new Box(670,155,30,40);
    box26 = new Box(700,155,30,40);
    box27 = new Box(730,155,30,40);
    box28 = new Box(760,155,30,40);

    box29 = new Box(670,125,30,40);
    box30 = new Box(700,125,30,40);
    box31 = new Box(730,125,30,40);

    box32 = new Box(700,95,30,40);
}
   function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);

    text("SCORE :"+score,750,40);
    
    ground.display();
    ground3.display();
    polygon1.display();
    sling.display();
    fill("cyan");   
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    fill("magenta")
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    fill("yellow")
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    fill("grey")
    box29.display();
    box30.display();
    box31.display();
    fill("white")
    box32.display();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    box27.score();
    box28.score();
    box29.score();
    box30.score();
    box31.score();
    box32.score();

}

function mouseDragged (){
 Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY})
}

function mouseReleased (){
 sling.fly();
}
