function isTouching(fixedObject, movingObject)
{
  if((movingObject.x - fixedObject.x) <= (movingObject.width/2 + fixedObject.width/2)
    && fixedObject.x - movingObject.x <= (fixedObject.width/2 + movingObject.width/2) 
    && movingObject.y - fixedObject.y <= (movingObject.height/2 + fixedObject.height/2) 
    && fixedObject.y - movingObject.y <= (movingObject.height/2 + fixedObject.height/2))
    
  {
      return true;
  }
  else{
     return false
  } 
} 
 
function bounceOff (object1, object2)
{
  if ((object1.y - object2.y <= object1.height/2 + object2.height/2)
   && (object2.y - object1.y <= object1.height/2 + object2.height/2))
   {
    object1.velocityY = -1*object1.velocityY;
    object2.velocityY = -1*object2.velocityY;
   }
   if ((object1.x - object2.x <= object1.width/2 + object2.width/2)
   && (object2.x - object1.x <= object1.width/2 + object2.width/2))
   {
    object1.velocityX = -1*object1.velocityX;
    object2.velocityX = -1*object2.velocityX;
   }
}