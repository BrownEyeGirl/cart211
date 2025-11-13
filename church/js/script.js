

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
        p.background(220); // Set the background color (grayscale value 220)
        // You can also use RGB values: p.background(255, 0, 0); for red
        // Or a CSS color string: p.background("#FF00FF"); for magenta
         // Display the video just like an image! 
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
    
    



// Test Canvas
function sketch2(p) {
    p.setup = function() {
      let can1 = p.createCanvas(50, 50);
      //can1.parent('output');
      can1.center(); 
      p.background(220);
    };
  
    p.draw = function() {
      p.ellipse(p.mouseX, p.mouseY, 20, 20);
    };


  }
  







  /* GOD */ 
function sketch3(p) {
    

    p.setup = function() {

        // Load images 
       // arrow = p.loadImage('assets/god/cursor3.png');
        //arrow.resize(7, 0);
        //cloud = p.loadImage('assets/god/god3.png'); 
       // cloud.resize(p.width, p.height);

        cnv = p.createCanvas(200, 200); 
        cnv.parent('output2'); 
        // background(244, 253, 255);
        p.background(255, 0, 0); 
        //cloud.resize(0, width); 

        // CLICKS
       // confess=p.loadImage('assets/god/confess2.png'); 
       // clickCount = 0; 
        //factor = 50; 

    }

    p.draw = function() {
        p.background(255, 0, 0);  // reset background
        //drawCloud(); 
    }

    /*
    mouseClicked() = function() {
        clickCount++; 
        click.x = mouseX; 
        click.y = mouseY; 
        click.strength = 255; 

        if(factor > 8) {
            factor-=1; 
        }
        
    }

    function drawCloud() {
        // sets x and y at new click clickcount
        //factor = int(random(10, 20));
        let vibrate = int(random(1, 3)); 
        cloud.resize(width, height);

        for(let xC = 0; xC < width; xC += factor) {
            for(let yC = 0; yC < height; yC += factor) {
                // turn the cloud greyscale
                sq = cloud.get(xC, yC); // gets colour at x,y. returns array [R, G, B, A] but since the image is black and white 
                grayVal = (0.299 * sq[0]) + (0.587 * sq[1]) + (0.114 * sq[2]) // FORMULA WRITTEN BY CHATGPT, accounts for human perception of light to take RGB and turn it grayscale
                grayVal = p.map(grayVal, 0, 200, 255, 0);
                p.tint(255, grayVal);
                vibrate = int(random(1, 3)); 
                p.image(arrow, xC+vibrate, yC+vibrate); //int(rantom(xC, xC+5)), yC);
                //frameRate(10);

                // CONFESS
                tint(255, click.strength); 
                confess.resize(150, 0);
                image(confess, click.x-confess.width/2, click.y-confess.height/2); 
                if(click.strength > 0) {
                    click.strength -=0; 
                } 

            }
        }
    }*/
}



  







    // Create new p5 instances for each sketch
    new p5(sketch3);
    new p5(sketch1);
    new p5(sketch2);
  