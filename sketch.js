var path,boy,cash,diamonds,jwellery,sword,gameOver;
var pathImg,boyImg,cashImg,diamondsImg,jwelleryImg,swordImg,gameOverImg;
var treasureCollection = 0;
var jwellery = 0;
var diamonds = 0;
var cashG,diamondsG,jwelleryG,swordGroup;

var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("Runner-1.png","Runner-2.png");
  cashImg = loadImage("cash.png");
  diamondsImg = loadImage("diamonds.png");
  jwelleryImg = loadImage("jwell.png");
  swordImg = loadImage("sword.png");
  gameOverImg =loadImage("gameOver.png");
}

function setup(){
createCanvas(400,600);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08; 

  
gameOver=createSprite(180,250);
gameOver.addImage(gameOverImg);

cashG=new Group();
diamondsG=new Group();
jwelleryG=new Group();
swordGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
    gameOver.visible = false;

  background(0);
  boy.x = World.mouseX;
  
  edges= createEdgeSprites();
  boy.collide(edges);
  
  if(path.y > 400 ){
    path.y = height/2;

    }
    createCash();
    createDiamonds();
    createJwellery();
    createSword();
  
  
    if (cashG.isTouching(boy)) {
      cashG.destroyEach();
      treasureCollection=treasureCollection+50;
      

    }else if(jwelleryG.isTouching(boy)) {
      jwelleryG.destroyEach();
      jwellery = jwellery + 100;
    }

     if(diamondsG.isTouching(boy)){
      diamondsG.destroyEach();
      diamonds = diamonds + 1000;
    }


    if(swordGroup.isTouching(boy)){
      gameState = END;

    }
  
    if (gameState === END){
    if(swordGroup.isTouching(boy)) {
      gameState = END;
      gameOver.visible = true;
      boy.addAnimation("sahilrunning",gameOverImg);
      boy.X = 200;
      boy.Y = 300;
      cashG.destroyEach();
      cashG.setVelocityEach(0);
    }
    }
    
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,70,30);
  text("jwellery:" + jwellery,220,30);
  text("diamonds:"+ diamonds,140,60);
  }
  }

function createCash() {
  if (World.frameCount % 200 == 0) {
  var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
  cash.addImage(cashImg);
  cash.scale=0.12;
  cash.velocityY = 3;
  cash.lifetime = 150;
  cashG.add(cash);
  }
  }

function createDiamonds() {
  if (World.frameCount % 320 == 0) {
  var diamonds = createSprite(Math.round(random(50, 350),40, 10, 10));
  diamonds.addImage(diamondsImg);
  diamonds.scale=0.03;
  diamonds.velocityY = 3;
  diamonds.lifetime = 150;
  diamondsG.add(diamonds);
}
}

function createJwellery() {
  if (World.frameCount % 410 == 0) {
  var jwellery = createSprite(Math.round(random(50, 350),40, 10, 10));
  jwellery.addImage(jwelleryImg);
  jwellery.scale=0.13;
  jwellery.velocityY = 3;
  jwellery.lifetime = 150;
  jwelleryG.add(jwellery);
  }
  }

function createSword(){
  if (World.frameCount % 530 == 0) {
  var sword = createSprite(Math.round(random(50, 350),40, 10, 10));
  sword.addImage(swordImg);
  sword.scale=0.1;
  sword.velocityY = 3;
  sword.lifetime = 150;
  swordGroup.add(sword);
  }
  }