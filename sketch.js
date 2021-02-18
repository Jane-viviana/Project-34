var engine;
var world;
var ground;
var box;
function preload() {
//preload the images here

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
   engine = Matter.Engine.create();
   world = engine.world;

   //creating ground
   ground = new Ground(1000,700,3000,15);

   //creating box
   /*for(var k = 550; k>20; k=k-80){
    box.push(new Box(400,k));
  }*/
  box = new Box(700,400);
}

function draw() {
  background(0);
  //updating engine
  Matter.Engine.update(engine);
  //displaying ground
  ground.display();
  //displaying box
  /*for(var i = 0; i<box.length; i++){
    box[i].display();
  }*/
  box.display();
}

