/** This shows how we create offerings to god with our clicks
 * 
 */



/**
 * GOD 
 * Skyla Trousdale
 * 
 * 2025
 * 
 */

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

// PIXEL COLOUR MANAGERS 
let sq; 
let grayVal;

// CLICKS 
let clickCount; 
let factor; 




/* Load Images */ 
function preload() {
    

}


function setup() {

    // Load images 
    arrow = loadImage('assets/god/cursor3.png');
    arrow.resize(7, 0);
    cloud = loadImage('assets/god/god2.png'); 
    cloud.resize(0, width);

    cnv = createCanvas(600, 600); 
    background(244, 253, 255); 
    cloud.resize(0, width); 

    clickCount = 0; 
    factor = 50; 

}

function draw() {

     // increase click count
    // clickCount++; 
    background(244, 253, 255); 
     // draw a new click 
    drawCloud(); 
    //factor -=1; 
    // frameRate(100);
}

function mouseClicked() {
    clickCount++; 

    if(factor > 8) {
        factor-=1; 
    }
    
}

function drawCloud() {
    // sets x and y at new click clickcount
    //factor = int(random(10, 20));
    let vibrate = int(random(1, 3)); 

    for(let xC = 0; xC < width; xC += factor) {
        for(let yC = 0; yC < height; yC += factor) {
            //x[clickCount] = xC;//int(random(0, width)); 
           // y[clickCount] = yC;//int(random(0, height)); 
            
            // turn the cloud greyscale
            sq = cloud.get(xC, yC); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
            grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
            grayVal = int(map(grayVal, 0, 300, 255, 0));

            
             tint(255, grayVal);
             
             image(arrow, xC+vibrate, yC+vibrate); //int(rantom(xC, xC+5)), yC);
             //frameRate(10);

           // fill(grayVal);
            //ellipse(xC, yC, 10);
        }
    }
}

    //image(arrow, 5, 5);

    // draw arrows at each coordinate 
    /*for(let i = 0; i < x.length; i++) {
       // arrow.resize(0, 50);
       //image(arrow, x[clickCount], y[clickCount]); // draws arrow at new position
       // console.log(x[clickCount]);
    }*/

    /*for(let xPos = 0; xPos < width; xPos+=factor) {
        for(let yPos=0; yPos < height; yPos++) {

            let sq = cloud.get(xPos, yPos); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
            let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
            grayVal = int(map(grayVal, 0, 300, 10, 20));

            arrow.resize(10, 0); 
            tint(255, grayVal);
            image(arrow, xPos, yPos);
        }
    }*/
 

    // cycle x, y 
    /*for(let c = 0; c<width; c++) {
        for(let r = 0; r<height; r++) {

        }
    }*/
