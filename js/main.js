//declaring  variables
var keys = {}; //storing the codes and current used/pressed keys
/* keys.right= 38;
keys.DOWN = 40;
keys.LEFT = 37;
keys.RIGHT = 39; */
//Declaring variables
var container = document.getElementById("boxGameArea");
var foodHunter = document.getElementById("foodHunter");
var foodHunterLeft = 0;
var foodHunterUp = 0;

function controlMov(e) { //foodHunter control functions
    //console.log(e.keyCode);//results testing purposes
    if (e.keyCode == 38) { //UP
        foodHunterUp -= 10;
        foodHunter.style.top = (parseInt(foodHunterUp)) + "px";
        if (foodHunterUp <= 0) {
            foodHunterUp += 10; //Stop the object to exceed border container
        }

    }
    if (e.keyCode == 40) { //DOWN
        foodHunterUp += 10;
        foodHunter.style.top = (parseInt(foodHunterUp)) + "px";
        if (foodHunterUp >= 500) {
            foodHunterUp -= 10;
        }

    }
    if (e.keyCode == 39) { //LEFT
        foodHunterLeft += 10;
        foodHunter.style.left = foodHunterLeft + "px";
        if (foodHunterLeft >= 630) {
            foodHunterLeft -= 10;
        }
    }
    if (e.keyCode == 37) { //RIGHT
        foodHunterLeft -= 10;
        foodHunter.style.left = foodHunterLeft + "px";
        if (foodHunterLeft <= 0) { //nested if for positioning and to stop it exceeding boxGameArea
            foodHunterLeft += 10;
        }
    }
}
document.onkeydown = controlMov; // Calling the function when key is pressed