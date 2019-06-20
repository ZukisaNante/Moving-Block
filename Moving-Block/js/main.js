//Chaser movements
/* var goRight = 10;
let gogoSpeed = 5;
chacerLook = function(){
  background(202, 255, 97); 
  fill(66, 66, 66);
  ellipse(goRight, 200, 50, 50);
  
  if (goRight > 400) {
      goSpeed = -5;
      

  }
  if (goRight < 0) {
      goSpeed = 5;
  }

  // move the ball
  goRight = goRight + goSpeed;
  
}
document.getElementById('chaser').innerHTML = chacerLook;
 */
//init object globally
			var objImage= null;
			function init(){
				objImage=document.getElementById("foodHunter");				
				//objImage.style.position='relative';
				//objImage.style.left='0px';
				//objImage.style.top='0px';
			}
			function getKeyAndMove(e){				
				var key_code=e.which||e.keyCode;
				switch(key_code){
					case 37: //left arrow key
						moveLeft();
						break;
					case 38: //Up arrow key
						moveUp();
						break;
					case 39: //right arrow key
						moveRight();
						break;
					case 40: //down arrow key
						moveDown();
						break;						
				}
			}
			function moveLeft(){
				objImage.style.left=parseInt(objImage.style.left)-5 +'px';
			}
			function moveUp(){
				objImage.style.top=parseInt(objImage.style.top)-5 +'px';
			}
			function moveRight(){
				objImage.style.left=parseInt(objImage.style.left)+5 +'px';
			}
			function moveDown(){
				objImage.style.top=parseInt(objImage.style.top)+5 +'px';
			}
      window.onload=init;
      
      //test
      var x = 20;
// how far the ball moves every time
var speed = 5;
draw = function() {

  if (x > 400) {
      speed = -5;
  }
  if (x < 0) {
      speed = 5;
  }

  // move the ball
  x = x + speed;
};







































































































































































