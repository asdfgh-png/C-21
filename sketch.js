var canvas;
var music;
var sq ;
var b1 , b2, b3 ,b4 ;

function preload(){
    music = loadSound("music.mp3");
   
}


function setup(){
    canvas = createCanvas(710,600);

    //create 4 different surfaces
    sq = createSprite(random(50,650),100,50,50) ;
    sq.shapeColor = "white";
     sq.velocityY = 3;
    sq.velocityX = 5 ;

    b1 = createSprite(70,590,160,20);
    b1.shapeColor = "green" ;
    b2 = createSprite(260,590,160,20);
    b2.shapeColor = "orange" ;
    b3 = createSprite(450,590,160,20);
    b3.shapeColor = "blue" ;
    b4 = createSprite(640,590,160,20);
    b4.shapeColor = "red" ;
 
    //create box sprite and give velocity
    
}

function draw() {
    background(rgb(169,169,169));
//create edgeSprite
// sq changes colour to the colour of the box when touches the box and then bounces off
 if(sq.isTouching(b1)&&(sq.bounceOff(b1))){
    sq.shapeColor = b1.shapeColor ;
   // music.play();
    }
    
 if(sq.isTouching(b2)&&(sq.bounceOff(b2))){
    sq.shapeColor = b2.shapeColor ;
   music.play();
 }
 if(sq.isTouching(b3)&&(sq.bounceOff(b3))){
    sq.shapeColor = b3.shapeColor ;
    music.play();
}

// sq would stop moving when it touches the fourth block
if(sq.isTouching(b4)&&(sq.bounceOff(b4))){
   sq.shapeColor = "white";
   sq.velocityX = 0 ;
   sq.velocityY = 0 ;
   music.stop();
}
// keeps sq inside the canvas
 edges= createEdgeSprites();
 sq.bounceOff(edges);
     drawSprites();

//add condition to check if box touching surface and make it box
}

// isTouching
function isTouching(b1,sq){
    if(sq.y - b1.y <= sq.height/2 + b1.height/2){
       sq.shapeColor = b1.shapeColor ;
       
    }
   
}
// BounceOff
function bounceOff(b1,sq){
   if (sq.y - b1.y < b1.height/2 + sq.height/2
       && b1.y - sq.y < b1.height/2 + sq.height/2){
       sq.velocityX = sq.velocityX * (-4);
}
}