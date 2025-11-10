/*
WEBCAM INPUT
Getting webcam input with p5.js is super easy! We create a variable for it, start the capture in setup(), and can display the result with the image() command! In upcoming examples, we'll also see how we can access the pixels from the webcam
*/

// Like an image, we need a variable to connect our webcam to our sketch
let video;
let myCustomFilter;


function setup() {
  createCanvas(windowWidth, windowHeight);

  // VIDEO 
  video = createCapture(VIDEO); // create webcam input source
  video.size(640, 480);  // specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
  //video.hide(); // ensures 2 videos dont appear


  //canvas.parent('p5-container'); // Attach canvas to a specific div

 
  // BUTTONS 
  // Create a button
 /* let myButton = select('#myButton');
   myButton.position(200, 200); 
   myButton.mousePressed(pressIt);

  // TIMING
  frameRate(4); 
  */
}

function draw() { 
  // Display the video just like an image! 
  background(255);

  image(video,0,0,width,height);


  /*loadPixels(); // Load canvas pixels

  for(let row = 0; row < height; row+=10) {
    for(let col = 0; col < width; col+=10) {
      let sq = pixel.get(row, col); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
      let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
            // sets style 
      fill(0); //turns text green 
      ellipse(row, col,10); 

      //textSize(map(grayVal, 0, 255, 1, 15));  // maps the grayscale value formula onto my text size range (5-15px)

    }*/

  //updatePixels();

  //filter(BLUR, 5);// large value increses blur
  filter(INVERT);//will make you a GHOST
  /*
  loadPixels(); // Load canvas pixels

  for (let i = 0; i < pixels.length; i += int(random(40,70))) {
    pixels[i] = 255; //- pixels[i];     // Red
    pixels[i + 1] = 255 - pixels[i + 1]; // Green
    pixels[i + 2] = 255 - pixels[i + 2]; // Blue
    // Alpha channel (pixels[i + 3]) is left as is
  }

  
  updatePixels();  */

  filter(GRAY);
  //filter(THRESHOLD,0.5);//Converting the image to black and white. Value must be between 0.0 (black) and 1.0 (white). If no level is specified, 0.5 is used.
 // filter(OPAQUE);
  //filter(INVERT);//will make you a GHOST
 // filter(POSTERIZE, 15);//range is from 2-255. results are most noticeable in the lower ranges.
  //filter(DILATE);//increases the light area.
  //filter(ERODE);//reduces the light area
  ///filter(BLUR, 5);// large value increses blur
}

// opens index.html in a new page
function pressIt() {
    window.open('index.html');
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }




/*

let capture;
let myCustomFilter;

function setup() {
  createCanvas(640, 480, WEBGL); // Use WEBGL mode
  capture = createCapture(VIDEO);
  capture.size(width, height);
  capture.hide();

  // Define your fragment shader source (fragSrc) here as a string
  const fragSrc = `... (paste GLSL code from above) ...`;
  myCustomFilter = createFilterShader(fragSrc); 
}

function draw() {
  // Draw the capture to an offscreen graphics buffer or apply the shader directly
  // For createFilterShader, you can apply it to the main canvas
  image(capture, -width/2, -height/2, width, height); // draw video centered for WEBGL
  
  shader(myCustomFilter); // Apply the custom shader
  // A simple way to use it as a filter on the whole canvas is:
  filter(myCustomFilter); // Note: filter() with custom shader works on the entire canvas
  // the documentation suggests it's used with filter() directly
  
  // Restore default shaders if needed for other elements
  resetShader(); 
}*/
