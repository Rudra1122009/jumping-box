var canvas;
var music;
var r1,r2,r3,r4;
var box;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
r1=createSprite(0,580,360,30);
r1.shapeColor="blue";
r2=createSprite(295,580,200,30);
r2.shapeColor="orange";
r3=createSprite(515,580,200,30);
r3.shapeColor="pink";
r4=createSprite(740,580,220,30);
r4.shapeColor="green";


    //create box sprite and give velocity
box=createSprite(random(20,750),100,40,40);
box.shapeColor=rgb(255,255,255);
box.velocityX=4;
box.velocityY=9;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
edges=createEdgeSprites();
box.bounceOff(edges);


    //add condition to check if box touching surface and make it box
if(r1.isTouching(box)&&box.isTouching(r1)){
box.shapeColor="blue";

}
if(r2.isTouching(box)){
box.shapeColor="orange";
}
if(r3.isTouching(box)&&box.isTouching(r3)){
    box.shapeColor="pink";
    
    }
if(r4.isTouching(box)&&box.isTouching(r4)){
box.shapeColor="green";
}
drawSprites();
}