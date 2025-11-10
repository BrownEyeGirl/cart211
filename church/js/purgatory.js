/** 
 * Chapel Interface 
 * Skyla Trousdale 
 * 
 * 
 */


//let colours = ['#E7E6FE', '#BCBAFD', '#6661FA', '#150DF7', '#0D06CB']; 
let colours = ['#D6D6D6', '#ADADAD', '#C4C4C4']; 
let x = 0; 
let y = 0; 

let chapel; 

function preload() {
    chapel = loadImage('assets/churchwindows.png'); 
}

function setup() {
    createCanvas(windowWidth-10, windowHeight-10); 
    background(0);
    generateStatic(); 
  
}

function draw() {
    
    generateStatic(); 
    frameRate(20);

    push(); 
    chapel.resize(0, windowHeight)
    image(chapel, 0, 0); 
    image(chapel, width/3, 0); 
    image(chapel, 2*(width/3), 0); 
    filter(INVERT);
    pop(); 

} 

function generateStatic() {
    for(let row = 0; row < width; row+=5) {
        for(let col = 0; col < width; col+=5) {
            x = row; 
            y = col; 
            
            noStroke(); 
            colour = colours[2]; 
            fill(colours[int(random(0, colours.length))]); 
            rect(x, y, 5)
        }
    }

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}