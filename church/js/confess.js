/**
 * Confess / Devote 
 * 
 * Cloud of arrows for every click 
 * Skyla Trousdale 
 * 
 * 
 */

// ARROW / CLOUD
let arrow;

// CLOUD
let cloud; 
let x = [100, 0, 0]; 
let y = [0, 100, 0]; 

// CLICKS 
let clickCount; 




/* Load Images */ 
function preload() {
    arrow = loadImage('assets/god/cursor.png');
    cloud = loadImage('assets/god/god2.png'); 
    cloud.resize(0, width);

    x[0] = int(width/2);
    y[0] = height/2; 
}


function setup() {
    cnv = createCanvas(600, 600); 
    background(244, 253, 255); 
    cloud.resize(0, width); 

}

function draw() {

     // increase click count
     clickCount++; 

     // draw a new click 
     drawCloud(); 

     frameRate(100000);
}

function mouseClicked() {

    // increase click count
    clickCount++; 

    // draw a new click 
    drawCloud(); 
    
}


function drawCloud() {
    // sets x and y at new click clickcount
    x[clickCount] = int(random(0, width)); 
    y[clickCount] = int(random(0, height)); 
    
    // turn the cloud greyscale
    cloud.resize(0, height); 
    let sq = cloud.get(x[clickCount], y[clickCount]); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
    let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
    grayVal = int(map(grayVal, 0, 300, 20, 10));

    arrow.resize(10, 0); 
    tint(255, grayVal);
    image(arrow, x[clickCount], y[clickCount]);

    //image(arrow, 5, 5);

    // draw arrows at each coordinate 
    for(let i = 0; i <= x.length; i++) {
        //arrow.resize(0, 50);
       image(arrow, x[i], y[i]); // draws arrow at new position
       // console.log(x[clickCount]);
    }


    // cycle x, y 
    /*for(let c = 0; c<width; c++) {
        for(let r = 0; r<height; r++) {

        }
    }*/
}