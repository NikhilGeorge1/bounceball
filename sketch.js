const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;
var ball;

function setup(){
    var canvas = createCanvas(1000,10000);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
  
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,ground);
   
    var box_options={

        restitution :10 
      }
      box=Bodies.rectangle(200,200,20,20,box_options);
      World.add(world,box);
      
   
      var ball_options={

        restitution :2  
      }
      ball=Bodies.circle(229,200,20,ball_options);
      World.add(world,ball);
      
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
   ellipseMode(RADIUS);
   fill("blue")
   rect(box.position.x,box.position.y,20,20);                          
   ellipse(ball.position.x,ball.position.y,20,20);                          
                        

}

