var banana, bananaImage ,jungle
var Monkey_01, Monkey_02, Monkey_03, Monkey_04, Monkey_05, Monkey_06, Monkey_07, Monkey_08, Monkey_09, Monkey_10
var stone


function preload(){
  
  banana = loadImage("banana.png");
  jungle = loadImage("jungle.jpg");
  
Monkey= loadImage
("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  
  stone = loadImage("stone.png")
}





function setup() {
  createCanvas(600, 400);
  
 Monkey = createSprite(50,180,20,20);
  Monkey = addImage("01",Monkey_01);
}
function draw() {
  background(220);
}