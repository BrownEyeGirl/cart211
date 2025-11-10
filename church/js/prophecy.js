/*

Prophecy 

After 5 clicks, activates target audience reached  WEBCAM INPUT
*/

// Like an image, we need a variable to connect our webcam to our sketch

// WEBCAM 
let video;

// TARGET
let target; 

// CLICK COUNT
let clicks; 
let maxClicks = 10; 


function setup() {
  createCanvas(windowWidth, windowHeight);
    
  background(255); 

  // WEBCAM 
video = createCapture(VIDEO); // create webcam input source
  video.size(640, 480);  // specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.hide(); // ensures 2 videos dont appear

  // TARGET
    target = loadImage('assets/prophecy/target.png'); 

    // CLICKS
    clicks = 0;

}

function draw() {

    circles(); 
    fill(0); 
    ellipse(100, 100, 40); 
    console.log(clicks); 
    if(clicks > maxClicks) {
        targetAudience(); 
    }
}

// opens index.html in a new page
function pressIt() {
    window.open('index.html');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
 }

/* Click count increased every time mouse clicked */
function mouseClicked() {
    clicks++; 
}

function circles() {
    background(255);
    fill(0); 
    ellipse(100, 100, 40); 
    for(let r = 0; r < height; r += 10) {
        for(let c = 0; c < width; c+= 10) {
             
            fill(0); 
            ellipse(c, r, map(mouseX, 0, mouseY, 2, 8)); 
             
        }
    }
    
}


function targetAudience() {
     // Display the video just like an image! 
  //background(255);

  image(video,0,0, windowWidth, windowHeight);
  filter(INVERT);
  filter(GRAY);

  push(); 
    textSize(20);
  text('Target Audience Detected...', width/2-120, height/4);
  pop(); 

  image(target, width/2-target.width/2,height/2-target.height/2); 
  //target.hide(); 
}