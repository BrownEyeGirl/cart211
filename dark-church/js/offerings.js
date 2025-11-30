let cursor;
let pos; // current position of the image
let root; // target (root) coordinate
let speed = 2; // how fast the image moves

function preload() {
  // Load any image you want — replace this with your own file or URL
  cursor = loadImage('assets/god/cursor.svg');
  user = loadImage('assets/god/cursor.svg');
}

function setup() {
  createCanvas(600, 400);
  // Start in the center
  pos = createVector(width / 2, height / 2);
  // Root coordinate (destination)
  root = createVector(100, 100);
}

function draw() {
  background(220);
    user.resize(40, 0)
  image(user, mouseX, mouseY);
    drawCursor(); 
}

function mouseClicked() {
    drawCursor(); 
    pos.x = mouseX; 
    pos.y = mouseY; 
    drawCursor(); 
}

// Optional: click to change the root position
function mousePressed() {
  root.set(width/2, height/2);
}

function drawCursor() {

  // Draw target for reference
  fill(255, 0, 0);
  noStroke();
  ellipse(root.x, root.y, 10);

  // Draw the image
  imageMode(CENTER);
  image(cursor, pos.x, pos.y, 100, 100);

  // Move towards root
  let dir = p5.Vector.sub(root, pos); // direction vector
  let distance = dir.mag();

  if (distance > 1) { // stop when close enough
    dir.normalize();
    dir.mult(speed);
    pos.add(dir);
  }
}