//Create variables here
var dog,dogHappy,database,foodS,foodStock;

function preload()
{
  dog = loadImage("dogImg.png");
  dogHappy = loadImage("dogImg1.png")
  
	//load images here
}

function setup() {
  database = firebase.database();

  createCanvas(500,500);
  dog = createSprite(250,250,50,50);

  var dogposition = database.ref('dog/position');
  dogposition.on("value", readPosition);
  foodStock = database.red('food');
  foodStock.on('value', readStock);

  
}


function draw() {  
  background(46,139,87);

  if(keyDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogHappy);
    }
    if(keyDown(DOWN_ARROW)){
    writePosition(0,1);
    }
    if(keyDown(LEFT_ARROW)){
    writePosition(-1,0);
    }
    if(keyDown(RIGHT_ARROW)){
    writePosition(1,0);
    }


  drawSprites();
  //add styles here

}

function writePosition(x,y){
  database.ref('god/position').set({
    'x' : position.x + x,
    'y' : position.y + y
  })
}

function readPosition(data){
  position = data.val();
  dog.x = position.x;
  dog.y = positioon.y;

}
function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  database.ref('/').updte({

  })
}

