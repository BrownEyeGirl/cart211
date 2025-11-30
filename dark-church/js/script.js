


// Setup function for the instance
let mySketch = function(p) {
    let video; 
    p.setup = function() {
        p.createCanvas(p.windowWidth, p.windowHeight); // Create a canvas for this instance

        // VIDEO 
       video = p.createCapture(p.VIDEO); // create webcam input source
       video.size(640, 480);  // specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
       video.hide(); 
    };
    
      // Draw function for the instance
      p.draw = function() {
        p.background(255); // Set the background color (grayscale value 220)
        // You can also use RGB values: p.background(255, 0, 0); for red
        // Or a CSS color string: p.background("#FF00FF"); for magenta
         // Display the video just like an image! 
        p.tint(255, 150); 
        p.image(video,0,0,p.width,p.height);
        p.filter(p.INVERT);//will make you a GHOST
        p.filter(p.GRAY);

       
      };

      p.windowResized = function() {
        p.resizeCanvas(p.windowWidth, p.windowHeight);
     }
    };
    
    // Create a new p5 instance and attach it to an HTML element (e.g., a div with id "my-canvas")
    let myp5 = new p5(mySketch, 'my-canvas'); 
    
    



/* APPLE */
function sketch2(p) {
    let appleLogo;
    let x, y;       // Position
    let xSpeed, ySpeed; // Speed and direction
    let gardenImg; 
    let enterButton;
    let gateImg; 
    let eaten = false; 
    
    p.preload= function() {
      // Load your image — make sure this file is in your project folder or use a URL
      appleLogo = p.loadImage('assets/sanctuary/red_apple.png');
      gardenImg = p.loadImage('assets/sanctuary/garden.jpg');
      gateImg = p.loadImage('assets/sanctuary/sensitive-content.png');

    }
    
    p.setup = function() {
      let canva2 = p.createCanvas(400, 400);
      canva2.parent('apple-output');
      
      // Start position and random speed
      x = p.random(p.width - 100);
      y = p.random(p.height - 100);
      xSpeed = 5;
      ySpeed = 4;
      appleLogo.resize(60, 0);
      p.background(0);
      gateImg.resize(p.width, 0);
      p.image(gateImg, 0, 0);
      
      enterButton = p.select('#enterButton');
      enterButton.position(p.width/2-65, p.height/2+130);

      enterButton.mousePressed(() => {
        enterButton.hide(); 
        eaten=true; 
       });

    // Assign a function to run when clicked
   // enterButton.mousePressed(p.eaten);



    }
    
    p.draw = function() {
      if(eaten) {
        p.eaten();
      }
    }

    p.eaten = function() {
        
            p.background(0);
            gardenImg.resize(0, p.width);
            p.image(gardenImg, 0, 0);
            
            // Draw the image
            p.image(appleLogo, x, y);
            
            // Move the logo
            x += xSpeed;
            y += ySpeed;
            
            // Bounce off edges
            if (x <= 0 || x + appleLogo.width >= p.width) {
                xSpeed *= -1;
            }
            if (y <= 0 || y + appleLogo.height >= p.height) {
                ySpeed *= -1;
            }
        
    }
  }
  







  /* GOD */ 
function sketch3(p) {
    // elements
    let arrow; 
    let cloud;
    let confess;
    let factor;  

    let click = {
        x: 0, 
        y: 0,
        strength: 255
    }


    p.setup = function() {

        // Load images 
        arrow = p.loadImage('assets/god/cursor3.png');
       // arrow.resize(10, 0);
        cloud = p.loadImage('assets/god/god3.png'); 
        cloud.resize(p.width, p.height);

        let cnv = p.createCanvas(400, 400); 
        cnv.parent('god-output'); 

        // background(244, 253, 255);
       // p.background(0); 
        //cloud.resize(0, width); 

        // CLICKS
       confess = p.loadImage('assets/god/confess.png'); 
       // clickCount = 0; 
        factor = 50; 
        p.drawCloud();

    }

    p.draw = function() {
        //p.background(255);  // reset background
        //p.rect(10, 10, 20, 20);
        //p.image(arrow, 10, 10);
        //p.drawCloud(); 
    }

    
    p.mouseClicked = function() {
        //clickCount++; 
        click.x = p.mouseX; 
        click.y = p.mouseY; 
        click.strength = 255; 
        p.background(255)
        p.drawCloud(); 

         if(factor > 8) {
            factor-=1; 
         }
        
    } 
 
    p.drawCloud = function() {
        // sets x and y at new click clickcount
        //factor = int(random(10, 20));
       // let vibrate = p.int(p.random(1, 3)); 
        cloud.resize(p.width, p.height);
        confess.resize(100, 0);

        for(let xC = 0; xC < 400; xC+=factor) {
            for(let yC = 0; yC < 400; yC+=factor) {
                // turn the cloud greyscale
                sq = cloud.get(xC, yC); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
                grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
                grayVal = p.map(grayVal, 0, 200, 255, 0);
                p.tint(255, grayVal);
                //vibrate = p.int(p.random(1, 3)); 
                p.image(arrow, xC, yC); //int(rantom(xC, xC+5)), yC);
                //p.rect(10, 10, 20, 20);
                //frameRate(10);

                // CONFESS
                p.tint(255, click.strength); 
                
                p.image(confess, click.x-confess.width/2, click.y-confess.height/2); 

            }
        }
    }
}





function sketchChapel(p) {

    let img;
    let colours = ['white', 'white', 'lightblue']; 
    let colour; 
    let x = 0; 
    let y = 0; 


    p.setup = function() {
        img = p.loadImage('assets/churchwindows.png'); // Example image URL
        
        let cnv = p.createCanvas(400, 600);
        
        cnv.parent('chapel-output');
    };

    p.draw = function() {
        p.background(255);
        p.generateStatic();
        img.resize(400, 0);
        p.image(img, 0, 0); // Display and scale to canvas size
        
    };

    p.generateStatic = function() {
        //p.fill(0);
       // p.rect(10, 10, 30, 10);

       for(let row = 0; row < p.width; row+=10) { //=p.map(p.mouseY, 0, p.windowHeight, 2, 20)) {
            for(let col = 0; col < p.height; col+=10) { // col+=p.map(p.mouseY, 0, p.windowHeight, 2, 20)) {
               // x = row; 
               // y = col; 
                
                p.noStroke(); 
                //colour = colours[2]; 
                p.fill(colours[p.int(p.random(0, colours.length))]); 
                
               p.rect(row, col, 10+(p.mouseX%100)%10, 10+(p.mouseY%100)%10);
                //p.rect(row, col, p.map(p.mouseX, 0, p.windowWidth, 2, 20), map(p.mouseY, 0, p.windowHeight, 2, 20))
            
            }
        }

    }
};



/**
 * Rhythm
 * Skyla Trousdale 
 * 
 * Graphic element: 
 */

function sketchAngel(p) {

/**
 * Sets up canvas
*/
    let h; 
    let w; 

    let col = {
        r: 0, 
        g: 255, 
        b: 0
    }

    let bean = {
        x: 100,
        y: 100,
        h: 40,
        w: 40
    }

    p.setup = function() {

        w = 400; 
        h = 400; 
        let cnv = p.createCanvas(w, h);
        cnv.parent('angel2-output');

        p.background(0);

    }


    /**
     * Draw symetrical circles (reflected on y)
    */
    p.draw = function() {
        p.generateCircles(); 
    }


    p.generateCircles = function() {

        let x = 100; // sets initial circle pos 
        let y = 100;
        bean.y = y; 
        bean.x = x; 

        for (let i = 0; i < 3; i++) { // iterates through to generate a grid of circles 
            for (let j = 0; j < 3; j++) {
                p.push(); 
                p.fill(200);
                p.ellipse(bean.x, bean.y, p.random(bean.w-2,bean.w+2), p.random(bean.h-1, bean.h+1));
                p.pop(); 

                p.push();
                p.fill(0);
                p.ellipse(bean.x, bean.y, p.random(5,15), p.random(5, 15));
                p.pop(); 

                bean.x += x;

            }
            bean.x = x; // resets the column 
            bean.y += y; //moves down a row 
        }
    }
}




/**
 * Tension
 * Skyla Trousdale 
 * 
 * Graphic element: Circles
 */

function sketchLight(p) {
    /**
     * Sets up canvas
    */
    let h; 
    let w; 

    let r1 = 150;
    let r2 = 300;
    let n = 150;

    let col = {
        r: 0, 
        g: 255, 
        b: 0
    }

    p.setup = function() {
        w = 400; 
        h = 400; 
        let cnv = p.createCanvas(w, h);
        cnv.parent('light-output'); 
        p.background(255);

    }

    /**
     * Draw symetrical circles (reflected on y)
    */
    p.draw = function() {
        p.radialLines();
    }


    p.radialLines = function() {
        p.background(0, 0, 0);
        p.translate(width/2, height/2);
        
        for (let i = 0; i < n; i += 1) {

            let x2 = (r2)*cos(i*2*3.14/n); // GOOGLE HELPED ME WITH THIS MATH !!! 
            let y2 = (r2)*sin(i*2*3.14/n);
            
            p.noFill();
            p.strokeWeight(p.random(1, 4));
            p.stroke(p.random(230,255), p.random(230,255), p.random(230,255));
            p.line(p.mouseX-w/2, p.mouseY-h/2, x2, y2);
        }
        
        
        
        p.noStroke();
        p.fill(255);
        p.circle(0, 0, 5);
    }
}

    // Create new p5 instances for each sketch
    //new p5(sketch1);
    new p5(sketch3);
    new p5(sketchChapel); 
    new p5(sketch2);
    new p5(sketchAngel);
    new p5(sketchLight);