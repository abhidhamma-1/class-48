

function preload(){
abhi = loadImage("forest.jpg");
coinbg1 = loadImage("coinbg.png");
boyimg =loadImage("boyimage.jpg");
 obstacle1=loadImage("obj1.png");
 obstacle2=loadAnimation("Ob2.gif");
 obstacle3=loadAnimation("ob3.gif");
 obstacle4=loadImage("obj4.png");

}

function setup() {
    createCanvas(1350,600)

 way =  createSprite(650,300,20,20);
 way.addImage(abhi);
 way.scale = 4.5;
 way.velocityX = -5





  boy = createSprite(250,485,20,20);
  boy .addImage(boyimg);
  
}

function draw() {
    background("green")
   // rectMode(CENTER);
    if(way.x < 0 ){
    way.x = 700

    }
    repeatcoin();
    obstacle();
    drawSprites();
}

function repeatcoin(){
    if(frameCount % 350 === 0 ){
    ball =  createSprite(1250,330,20,20);
   ball.y = Math.round(random(250,450));

    ball.addImage(coinbg1)
    ball.scale = 0.1;
    ball.velocityX= -2
    }
}

function obstacle(){
if(frameCount % 300 === 0 ){


obs1=createSprite(1250,500,40,40);
var ob=Math.round(random(1,4))
if(ob==1){
obs1.addImage( obstacle1);
obs1.scale=0.5
}

if(ob==2){
obs1.addAnimation("ani", obstacle2);
obs1.scale=1
}
if(ob==3){
obs1.addAnimation( "ani",obstacle3);
obs1.scale=1
    }
if(ob==4){ 
obs1.addImage( obstacle4);
obs1.scale=0.5
        }
obs1.velocityX=-2
}
}