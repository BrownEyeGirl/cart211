/** 
 * Chapel Interface 
 * Skyla Trousdale 
 * 
 * Interactive static. 
 * 
 */


//let colours = ['#E7E6FE', '#BCBAFD', '#6661FA', '#150DF7', '#0D06CB']; 
let colours = ['#D6D6D6', '#ADADAD', '#C4C4C4']; 
let x = 0; 
let y = 0; 

let chapel; 

function preload() {
    chapel = loadImage('assets/churchwindows.png'); 
    //chapel.resize(0, 300);

}

function setup() {

    chapel.resize(0, 600);
    let cnv = createCanvas(chapel.width, chapel.height); 

   // cnv.parent('p5-container'); 
   //let newCanvasX = (windowWidth)/2;
   // let newCanvasY = (windowHeight)/2;
   // cnv.position(newCanvasX,newCanvasY)

    background(0);
    generateStatic(); 
  
}

function draw() {
    
    generateStatic(); 
    frameRate(20);

    push(); 
    chapel.resize(0, height)
    image(chapel, 0, 0); 
    //filter(INVERT);
    pop(); 

} 

function generateStatic() {
    for(let row = 0; row < width; row+=map(mouseX, 0, windowWidth, 2, 20)) {
        for(let col = 0; col < height; col+=map(mouseY, 0, windowHeight, 2, 20)) {
            x = row; 
            y = col; 
            
            noStroke(); 
            colour = colours[2]; 
            fill(colours[int(random(0, colours.length))]); 
            rect(x, y, map(mouseX, 0, windowWidth, 2, 20), map(mouseY, 0, windowHeight, 2, 20))
        }
    }

}

/* Moves with resize window to remain centered */
function windowResized() {
    newCanvasX = (windowWidth)/2;
    newCanvasY = (windowHeight)/2;
    cnv.position(newCanvasX,newCanvasY)
}