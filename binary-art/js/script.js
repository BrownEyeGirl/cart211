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
let ascii = ['0100 0001', '0100 0010', '0100 0011','0100 0100'];
let alph = ['a', 'b', 'c', 'd'];


// preload image 
function preload() {
    img = loadImage('assets/thecreation.jpg');
}

// Set Up Canvas, Binary Text, Image
function setup() {

    // Canvas 
    w = img.width;
    h = img.height;  
    let cnv = createCanvas(w, h); 
    cnv.mouseClicked(drawPixBasic);


    // Binary Text 
    userText = prompt('enter some text'); 
    //binaryText = '';
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
    convertToBinary(); 
   
    background(0); // resets 
    reader = 0; 

    // Generates grid by column (x) and row (y) 
    for(let y = 10; y < img.height; y+=8) { // columns for pix  
        for(let x = 0; x < img.width; x+=8) { // rows for pix

            let sq = img.get(x, y); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
            let grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
            
            // sets style 
            fill(0, 255, 0); //turns text green 
            textSize(map(grayVal, 0, 255, 1, 10));  // maps the grayscale value formula onto my text size range (5-15px)
            
            // loops to beginning of text string  
            if(reader >= userText.length) {
                reader = 0; 
            }

            text(userText[reader], x, y);
            //console.log(reader);
            reader += 1;
            //pop();  //The origin is back to (0, 0) and rotation is back to 0.
        }
    }
}

/* Converts User Input to Binary */ 
function convertToBinary() { // Code from Javascript Docs 
    binaryText += userText.charCodeAt(0); 
    
    console.log("Binary" + binaryText); 
} 
