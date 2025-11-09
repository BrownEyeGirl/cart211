/** This shows how we create offerings to god with our clicks
 * 
 */



/**
 * Skyla Trousdale
 * Binary Art 
 * 2025
 * 
 */


"use strict";

// canvas vars 
let img;
let w;
let h;

// binary 
let userText; 
let binaryText;
let reader; 
//let ascii = ['0100 0001 ', '0100 0010 ', '0100 0011 ','0100 0100 ', '0100 0101	', '0100 0110 ', '0100 0111 ', '0100 1000 ', '0100 1001	', '0100 1010 ', '0100 1011 ', '0100 1100 ', '0100 1101	', '0100 1110 ', '0100 1111 ', '0101 0000 ', '0101 0001 ', '0101 0010 ', '0101 0011 ', '0101 0100 ', '0101 0101 ', '0101 0110 ', '0101 0111 ', '0101 1000 ', '0101 1001 ', '0101 1010 '];
let alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

// buttons
let myButton; 

// preload image 
function preload() {
    img = loadImage('assets/god/face.png');
}

// Set Up Canvas, Binary Text, Image
function setup() {

    

    // Canvas 
    w = (600);
    h = (600);  
    let cnv = createCanvas(w, h); 
    cnv.mouseMoved(drawPixBasic);

    // button 
    //createCanvas(400, 400);
    myButton = createButton('Click Me'); // Create the button with a label
    myButton.position(10, 10); // Position the button on the page


    // Binary Text 
    userText = 'enter some text'; 
    binaryText = '';
    reader = 0; //starts at index 0 


    // Image Configuration 
    imageMode(CENTER);
    noStroke();
    background(0);
    img.loadPixels();
    img.filter(GRAY); // options: GREY, INVERT, THRESHOLD

    // slider 
   /* slider1 = createSlider(0, 255, 50); // starts slider at 50 
    slider1.position(0, 200);
    slider1.size(80);*/
}


// Start Project 
function draw() {
    // Play w Visuals 
}

/* VISUALIZER PLAYGROUND */ 

/* Draws Binary Text in Grid */
function drawPixBasic() { 
    //convertToBinary(); 
   
    background('#150DF7'); // resets 
    reader = 0; 

    // Generates grid by column (x) and row (y) 
    for(let y = 10; y < h; y+=5) { // columns for pix  
        for(let x = 0; x < w; x+=5) { // rows for pix

            let sq = img.get(x, y); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
            let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
            
            // sets style 
            fill(255); //turns text blue 
            textSize(map(grayVal, 0, 255, 1, 8));  // maps the grayscale value formula onto my text size range (5-15px)
            
            // loops to beginning of text string  
           /* if(reader >= userText.length()) {
                reader = 0; 
            }*/

            text('x', x, y); // userText.charAt(reader)
            //console.log(reader);
            reader += 1;
            //pop();  //The origin is back to (0, 0) and rotation is back to 0.
        }
    }
}






/* Converts User Input to Binary *
function convertToBinary() { // Code from Javascript Docs 
    userText = userText.toLowerCase();

    for(let phrasePos = 0; phrasePos < userText.length; phrasePos++) { // cycles through each character in the phrase 
        for(let abc = 0; abc < 26; abc++) { // cycles through abcs for each character 
            if(userText[phrasePos] == alph[abc]) { // finds which character in the alphabet its equal to 
                binaryText += ascii[abc];
                //break; 
            }
        }
    }
    
    
    console.log("Binary: " + binaryText); 
} */
