/*
WEBCAM INPUT
Getting webcam input with p5.js is super easy! We create a variable for it, start the capture in setup(), and can display the result with the image() command! In upcoming examples, we'll also see how we can access the pixels from the webcam
*/

// Like an image, we need a variable to connect our webcam to our sketch
let video;

function setup() {
  createCanvas(windowWidth, windowHeight);

  // VIDEO 
  video = createCapture(VIDEO); // create webcam input source
  video.size(640, 480);  // specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  video.hide(); // ensures 2 videos dont appear


  //canvas.parent('p5-container'); // Attach canvas to a specific div


  // BUTTONS 
  // Create a button
  let myButton = select('#myButton');
   myButton.position(200, 200); 
   myButton.mousePressed(pressIt);



  
}

function draw() { 
  // Display the video just like an image! 
  image(video,0,0,width,height);
  //filter(GRAY)
  //filter(THRESHOLD,0.5);//Converting the image to black and white. Value must be between 0.0 (black) and 1.0 (white). If no level is specified, 0.5 is used.
 // filter(OPAQUE);
  //filter(INVERT);//will make you a GHOST
  filter(POSTERIZE, 15);//range is from 2-255. results are most noticeable in the lower ranges.
  filter(DILATE);//increases the light area.
  filter(ERODE);//reduces the light area
  //filter(BLUR, 5);// large value increses blur
}

// opens index.html in a new page
function pressIt() {
    window.open('index.html');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }