
function preload(){
  icecubeImg=loadImage("ice cube.png")
  ironboxImg=loadImage("iron box.png")
  woodboxImg=loadImage("wood box.png")
}
function setup() {
  createCanvas(1200,800);

  for (var i = 50; i < 800; i=i+110) 
  {
    var sprite= createSprite(350,i, 20, 100);
sprite.shapeColor="blue"
  }

  for (var i = 50; i < 800; i=i+110) 
  {
    var sprite1= createSprite(380,i, 20, 100);
 sprite1.shapeColor="green"
  }


  
  for (var i = 50; i < 800; i=i+110) 
  {
    var sprite2= createSprite(850,i, 20, 100);
 sprite2.shapeColor="red"
  }
  
  for (var i = 50; i < 800; i=i+110) 
  {
    var sprite3= createSprite(880,i, 20, 100);
 sprite3.shapeColor="purple"
  }
}
function draw() {
  background(255,255,255);  
  drawSprites();
}
