var sea , seaImg , ship , shipImg,ground

function preload(){

seaImg = loadImage ("sea.png")
shipImg = loadAnimation ("ship-1.png", "ship-2.png" , "ship-3.png" , "ship-4.png")
}

function setup(){
  createCanvas(900,500);
  //create a ship sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",seaImg);
  ground.x = ground.width /2;
  
  ship = createSprite(100,150,100,50);
  ship.addAnimation("running",shipImg)
  ship.scale = 0.5 

}



function draw(){

  if(keyDown("left")){
    ship.velocityX= -1
  }
  
  if(keyDown("right")){
    ship.velocityX= 2
  }

  if(keyDown("up")){
    ship.velocityY=  -2
  console.log(ship.y)  
  if ( ship.y < 150 )
  ship.velocityY= 0
  }

  if(keyDown("down")){
    ship.velocityY= 2
  console.log(ship.y)
  if ( ship.y > 250 )
  ship.velocityY= 0

  }

  

  drawSprites()
}