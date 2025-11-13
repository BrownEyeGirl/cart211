/*





*/





function setup() {

}

function draw() {

}




/**
 * BITE THE APPLE 
 * SKyla Trousdale 
 * 
 * 
 */


/*
let angle;
let forbidden; 

function setup() {
  createCanvas(700, 700);
  colorMode(HSB);
  angleMode(DEGREES);

  forbidden = loadImage('assets/sanctuary/apple.png');
  forbidden.resize(100, 0);
}

function draw() {
  background(255);

  push(); 
  tint(255, 50);
  forbidden.resize(0, height/2+100);
  image(forbidden, width/2-forbidden.width/2, height-forbidden.height);
  pop(); 


 push();
  // Calculate the angle based on the mouse position, maximum 90 degrees
  //angle = (mouseX / width) * 90;
  angle = ((millis()/100) / width) * 90;
  angle = min(angle, 360*10);

  // Start the tree from the middle and bottom of the screen
  translate(width / 2, height);

  // Draw a line 120 pixels
  stroke(200, 255, 255);
  line(0, 0, 0, -120);

  // Move to the end of that line
  translate(0, -120);

  // Start the recursive branching
  branch(150, 0);
  
  pop(); 

  
 
}

function branch(h, level) {
  
  // Set the hue based on the recursion level
  stroke(200, level*10, 255); // colour

  // Each branch will be 2/3 the size of the previous one
  h *= 0.66;

  // Draw if our branch length > 2, otherwise stop the recursion
  if (h > 2) {
    // Draw the right branch
    // Save the current coordinate system
    push();

    // Rotate by angle
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -h);

    // Move to the end of the branch
    translate(0, -h);

    // Call branch() recursively
    branch(h, level + 1);

    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
  }

  /*else {
    // Draw the right branch
    // Save the current coordinate system
    push();

    // Rotate by angle
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -h);

    // Move to the end of the branch
    translate(0, -h);

    // Call branch() recursively
    branch(h, level + 1);

    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
}*/






/** 
 * Perlin Noise 
 * Skyla Trousdale 
 * 
 * - perlin noise is for procedural textures in graphics 
 * - gives you smooth random numbers (related to previously picked numbers)
 * 
 * tutorial base: https://www.youtube.com/watch?v=Qf4dIN99e2w
 */

/*
function setup() {
    createCanvas(600, 600);
  
    describe('A gray cloudy pattern that changes.');
  }
  
  function draw() {
    // Set the noise level and scale.
    let noiseLevel = 255;
    let noiseScale = 0.001;
  
    // Iterate from top to bottom.
    for (let y = 0; y < height; y += 1) {
      // Iterate from left to right.
      for (let x = 0; x < width; x += 1) {
        // Scale the input coordinates.
        let nx = noiseScale * x;
        let ny = noiseScale * y;
        let nt = noiseScale * frameCount;
  
        // Compute the noise value.
        let c = noiseLevel * noise(nx, ny, nt);
  
        // Draw the point.
        stroke(c);
        point(x, y);
      }
    }
  } */ 

/**
 * BITE THE APPLE 
 * SKyla Trousdale 
 * 
 * 
 */



/*let angle;

function setup() {
  createCanvas(700, 700);
  colorMode(HSB);
  angleMode(DEGREES);
}

function draw() {
  background(255);

  // Calculate the angle based on the mouse position, maximum 90 degrees
  //angle = (mouseX / width) * 90;
  angle = ((millis()) / width) * 90;
  angle = min(angle, 360*10);

  // Start the tree from the middle and bottom of the screen
  translate(width / 2, height);

  // Draw a line 120 pixels
  stroke(0, 255, 255);
  line(0, 0, 0, -120);

  // Move to the end of that line
  translate(0, -120);

  // Start the recursive branching
  branch(150, 0);

  describe(
    'A tree drawn by recursively drawing branches, with angle determined by the user mouse position.'
  );
}

function branch(h, level) {
  // Set the hue based on the recursion level
  stroke(220, level*10, 70); // colour

  // Each branch will be 2/3 the size of the previous one
  h *= 0.66;

  // Draw if our branch length > 2, otherwise stop the recursion
  if (h > 2) {
    // Draw the right branch
    // Save the current coordinate system
    push();

    // Rotate by angle
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -h);

    // Move to the end of the branch
    translate(0, -h);

    // Call branch() recursively
    branch(h, level + 1);

    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
  }

  /*else {
    // Draw the right branch
    // Save the current coordinate system
    push();

    // Rotate by angle
    rotate(angle);

    // Draw the branch
    line(0, 0, 0, -h);

    // Move to the end of the branch
    translate(0, -h);

    // Call branch() recursively
    branch(h, level + 1);

    // Restore the saved coordinate system
    pop();

    // Draw the left branch
    push();
    rotate(-angle);
    line(0, 0, 0, -h);
    translate(0, -h);
    branch(h, level + 1);
    pop();
}
  }*/