const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

var engine, world;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function preload(){

}


function setup(){
    var canvas = createCanvas(windowWidth/2, windowHeight/1.5);
    engine = Engine.create();
    world = engine.world;


    let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();

    let options = {
        mouse: canvasmouse
    }

    mConstraint = MouseConstraint.create(engine, options);
    World.add(world, mConstraint);



    bob1 = new Pendulum(windowWidth/4 - 120, windowHeight/2, "#ba4ade");
    bob2 = new Pendulum(windowWidth/4 - 60, windowHeight/2, "#ad4ccd");
    bob3 = new Pendulum(windowWidth/4, windowHeight/2, "#6e41b4");
    bob4 = new Pendulum(windowWidth/4 + 60, windowHeight/2, "#4330c0");
    bob5 = new Pendulum(windowWidth/4 + 120, windowHeight/2, "#175ec4");


    rope1 = new Sling(bob1.body, {x: bob1.body.position.x, y: bob1.body.position.y - 250});
    rope2 = new Sling(bob2.body, {x: bob2.body.position.x, y: bob2.body.position.y - 250});
    rope3 = new Sling(bob3.body, {x: bob3.body.position.x, y: bob3.body.position.y - 250});
    rope4 = new Sling(bob4.body, {x: bob4.body.position.x, y: bob4.body.position.y - 250});
    rope5 = new Sling(bob5.body, {x: bob5.body.position.x, y: bob5.body.position.y - 250});
}


function draw(){
    background("black");
    Engine.update(engine);

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();

    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
}


function mouseDragged(){
    Matter.Body.setPosition(Pendulum.body, {x: mouseX, y: mouseY});
}