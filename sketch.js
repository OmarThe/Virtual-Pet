var dog,sadDog,happyDog, database;
var foodS,foodStock;
var addFood,feedTheDog;
var foodObj;
var feed;
var hours = new Date();
var lastFed;

function preload(){
sadDog=loadImage("Dog.png");
happyDog=loadImage("happy dog.png");
}

function setup() {
  database=firebase.database();
  createCanvas(1000,400);

  foodObj = new Food();

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  //create feed the dog button here
  feedTheDog=createButton("Feed the Dog");
  feedTheDog.position(700,95);
  feedTheDog.mousePressed(feedDog);

  addFood=createButton("Add Food");
  addFood.position(800,95);
  addFood.mousePressed(addFoods);

}

function draw() {
  background(46,139,87);
  foodObj.display();

  //write code to read fedtime value from the database 
  if(lastFed < hours.getHours()){
    dog.addImage(sadDog);
    dog.scale=0.15;
  }else if(lastFed == 23 && hours.getHours()==0){
    dog.addImage(sadDog);
    dog.scale=0.15;
  }
  
 
  //write code to display text lastFed time here
  if(lastFed == 0){
    stroke("white")
    text("Last Fed : 12 AM",350,30)
  } else if(lastFed == 1){
    stroke("white")
    text("Last Fed : 1 AM",350,30)
  } else if(lastFed == 2){
    stroke("white")
    text("Last Fed : 2 AM",350,30)
  } else if(lastFed == 3){
    stroke("white")
    text("Last Fed : 3 AM",350,30)
  } else if(lastFed == 4){
    stroke("white")
    text("Last Fed : 4 AM",350,30)
  } else if(lastFed == 5){
    stroke("white")
    text("Last Fed : 5 AM",350,30)
  } else if(lastFed == 6){
    stroke("white")
    text("Last Fed : 6 AM",350,30)
  } else if(lastFed == 7){
    stroke("white")
    text("Last Fed : 7 AM",350,30)
  } else if(lastFed == 8){
    stroke("white")
    text("Last Fed : 8 AM",350,30)
  } else if(lastFed == 9){
    stroke("white")
    text("Last Fed : 9 AM",350,30)
  } else if(lastFed == 10){
    stroke("white")
    text("Last Fed : 10 AM",350,30)
  } else if(lastFed == 11){
    stroke("white")
    text("Last Fed : 11 AM",350,30)
  } else if(lastFed == 12){
    stroke("white")
    text("Last Fed : 12 PM",350,30)
  } else if(lastFed == 13){
    stroke("white")
    text("Last Fed : 1 PM",350,30)
  } else if(lastFed == 14){
    stroke("white")
    text("Last Fed : 2 PM",350,30)
  } else if(lastFed == 15){
    stroke("white")
    text("Last Fed : 3 PM",350,30)
  } else if(lastFed == 16){
    stroke("white")
    text("Last Fed : 4 PM",350,30)
  } else if(lastFed == 17){
    stroke("white")
    text("Last Fed : 5 PM",350,30)
  } else if(lastFed == 18){
    stroke("white")
    text("Last Fed : 6 PM",350,30)
  } else if(lastFed == 19){
    stroke("white")
    text("Last Fed : 7 PM",350,30)
  } else if(lastFed == 20){
    stroke("white")
    text("Last Fed : 8 PM",350,30)
  } else if(lastFed == 21){
    stroke("white")
    text("Last Fed : 9 PM",350,30)
  } else if(lastFed == 22){
    stroke("white")
    text("Last Fed : 10 PM",350,30)
  } else if(lastFed == 23){
    stroke("white")
    text("Last Fed : 11 PM",350,30)
  }

 
  drawSprites();
}


function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS);
}

function feedDog(){
  dog.addImage(happyDog);
  lastFed = hours.getHours();

  foodS=foodS-1;
  database.ref('/').update({
    Food:foodS
  })

  lastFed = hours.getHours();
  database.ref('/').update({
    FeedTime : lastFed
  })
}

function addFoods(){
  foodS++;
  database.ref('/').update({
    Food:foodS
  })
}
