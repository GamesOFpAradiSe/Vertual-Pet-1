//Create variables here
var  dog, happyDog, database, foodS, foodStock

function preload()
{
	//load images here
happy = loadImage("images/happydog.png")
doge = loadImage("images/Dog.png")
bg = loadImage("bg.png")
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(width/2-50,450)
  dog.addImage(doge)
  dog.scale =0.1
  //It's database contion nothing but when we give this > now is firbase simple
database = firebase.database()
//Here we ref = reference that inside database think what is in database yes firebase 
  foodStock=database.ref('Food')
//Here they checking for any types of change in data
  foodStock.on('value',readStock)
  
}


function draw() {  
background(bg)
  drawSprites();
  //add styles here
//textFont('Italic')
textSize(15)
fill("white")
stroke("black")
strokeWeight(2)

text("note : PRESS UP_ARROW TO FEED",70,20)
text("no. of food : "+foodS,70,50)

if(keyWentDown(UP_ARROW)){

writeStock(foodS)
dog.addImage(happy)
}
}
//making readStock function
function readStock(data){
//It's for make them real mean database to var that solve
  foodS = data.val()

}

function writeStock(x){

if(x<=0){
x=0
}else {

  x = x-1
}

database.ref('/').update({

  Food:x
})

}


