//Variation of Sketch 1
//the color and radius change as a result of the noise function
//the colors smoothly transition into one annother usinng the lerp function 

let amt, startColor, newColor, dorRad;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //initialize some variables 
  amt = 0;
  startColor = color(255,255,255);
  newColor = color(255, 255, 255);
  dotRad = 50; 

  background(255);
  noStroke();
  fill(startColor);
  ellipse(width/2, height/2, 20, 20);
   
}

function draw() {
  fill(lerpColor(startColor, newColor, amt));
  ellipse(mouseX, mouseY, dotRad, dotRad);
  
  //set the speed at which the colors change
  amt += 0.1;
  
  //when the new color is reached, set the new color as the start color 
  if(amt >= 1){
    amt = 0.0;
    startColor = newColor;
    
    //randomize the colors between some purples shades 
    let r = noise(frameRate() / 300, millis() / 300) * 200;
    let g = noise(millis() / 300) * 200;
    let b = 230;
    newColor = color(r, g, b);
  }
  dotRad = noise(millis() / 400) * 100;
}

//resize the canvas when the browswer window is resized 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}