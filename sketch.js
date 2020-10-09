var movingRect,fixedRect; 
function setup() {
   createCanvas(800,400);
   fixedRect=createSprite(200,200,30,60);
   fixedRect.shapeColor="orange";
   fixedRect.debug=true;
   movingRect=createSprite(350, 200, 60, 30);
   movingRect.shapeColor="orange";
   movingRect.debug=true;
   }
   
   function draw() {
     background("pink");
     movingRect.x=World.mouseX;
     movingRect.y=World.mouseY;
     if(fixedRect.width/2 +movingRect.width/2 > movingRect.x - fixedRect.x && 
       fixedRect.width/2 +movingRect.width/2 > fixedRect.x - movingRect.x && 
       fixedRect.height/2 +movingRect.height/2 > movingRect.y - fixedRect.y && 
       fixedRect.height/2 +movingRect.height/2 > fixedRect.y - movingRect.y) {
        fixedRect.shapeColor="red";
       movingRect.shapeColor="red";
       }
       else{
       fixedRect.shapeColor="orange";
        movingRect.shapeColor="orange";
       } 

       drawSprites(); 
      }
