var mar, navio, ondas, navio1;
function preload(){
  ondas=loadImage("sea.png")
  navio1=loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png")
}

function setup(){
  createCanvas(400,400);
  mar=createSprite(200,200,400,400)
  navio=createSprite(150,200,100,100)
  mar.addImage(ondas)
  mar.scale=0.3
  navio.addAnimation("navio", navio1)
  navio.scale=0.3
}

function draw() {
  background("blue");
  drawSprites();

 
}
