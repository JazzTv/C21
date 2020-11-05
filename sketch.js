var fixedRect, movingRect;
var rect1, rect2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  movingRect = createSprite(500, 200, 50, 50);
  rect1 = createSprite(100,100,50,50);
  // rect1.velocityY = 5;
  rect2 = createSprite(100,400,50,50);
  rect2.velocityY = -3;
}

function draw() {
  background(255,255,255);  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  console.log("Distance = " + (movingRect.x - fixedRect.x) );
  console.log("Width/2 = " + (movingRect.width/2 + fixedRect.width/2) );

  if(isTouching(fixedRect, movingRect))
  {
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
 if (isTouching(rect1,rect2)) 
 {
   rect1.shapeColor = "blue";
   rect2.shapeColor = "blue";
 } 
 else
 {
  rect1.shapeColor = "yellow";
  rect2.shapeColor = "yellow";
 }

  bounceOff (rect1, rect2);
    drawSprites();
}

