//the sketch is inspired by my big dipper arduino project 

let starColor;
let starRad;
let starX;  
let starY; 

function setup() {
  createCanvas(windowWidth - 20, windowHeight - 20);
  background(0);
  noStroke();
  
  fill(255);
  textSize(20);
  text('make your own constellations!', 10, 30 );
  fill(200);
  textSize(14);
  text('click anywhere on the screen to place a star',10, height- 30 );
  text('click r to start over',10, height - 10);


}


function draw() {

  
  if (mouseIsPressed) {  
    let r = random(70, 100);
    let g = random(50, 100);
    let b = random(100, 150);
    let opacity = random(150, 200);
    starColor = color(r, g, b, opacity);
    fill(starColor);
    
    starRad = random(10, 20);
    starX = random(20, width - 20);
    starY = random(20, height - 20);
    
    ellipse(mouseX, mouseY, starRad, starRad);
    
  }
  
    if (key === 'r' || key === 'R' ) {
      refresh();
      print(key);
      key = 'p';
    }
}

function refresh(){
  background(0);
  noStroke();
  
  fill(255);
  textSize(20);
  text('make your own constellations!', 10, 30 );
  fill(200);
  textSize(14);
  text('click anywhere on the screen to place a star',10, height- 30 );
  text('click r to start over',10, height - 10);

}


//resize the canvas when the browswer window is resized 
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
