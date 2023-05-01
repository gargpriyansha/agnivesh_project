const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

var ball, ballImg;
var hoop, hoopImg;
var background, backgroundImg;

function preload(){
    backgroundImg = loadImage("images/bk.png");
    hoopImg = loadImage("images/hoop.png");
    ballImg = loadImage("images/bk.png");
}

function setup(){
    createCanvas(900,500);

    engine = Engine.create ();
    world = engine.world;

    console.log(canvas.width)

}

function draw(){
    background(0)
;

    Engine.update(engine);
    drawSprites();
}