// the "oblique stategy" was: Allow an easement (an easement is the abandonment of a stricture). 
// I abandoned the stricture of clicking the mouse to change the color/radius of the brush.
// in this sketch, the brush will change on its own every 2 seconds 

let dotColor;
let dotRad = 50;

//set the switch interval to change the pattern every 1 second
var switchInterval = 2000;
var timeOfLastSwitch = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  dotColor = color(20, 255, 250);
  noStroke();
  //initialize the timer 
  timeStarted = millis();
}

function draw() { 
  
  fill(dotColor);
  ellipse(mouseX, mouseY, dotRad, dotRad);

  //check to see if the switch interval time has lapsed 
  if (millis() - timeOfLastSwitch > switchInterval) {
    
    //switch the color of the circle 
    let r = noise(frameRate() / 300, millis() / 300) * 200;
    let g = noise(millis() / 300) * 200;
    let b = 230;
    dotColor = color(r, g, b);
    //switch the radius of the circle 
    dotRad = noise(millis() / 400) * 100;
    
    print("change");
    
    //after it switches, reset the time of last switch to the current time  
    timeOfLastSwitch = millis();
  }
  
  console.log(dotColor);
}

//resize the canvas when the browswer window is resized 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}