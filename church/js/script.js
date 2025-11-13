
/* BACKGROUND VID */ 
function sketch1(p) {
    //let video;

    p.setup() = function() {
        let cnv1 = p.createCanvas(600,600);
        cnv1.parent('background-id');
        p.background(0);
        // VIDEO 
       // video = p.createCapture(p.VIDEO); // create webcam input source
        //video.size(640, 480);  // specify the resolution of the webcam input (too high and you may notice performance issues, especially if you're extracting info from it or adding filters)
    }

   p.draw() = function() { 
        // Display the video just like an image! 
       p.background(0);
       // p.image(video,0,0,p.width,p.height);
       // p.filter(INVERT);//will make you a GHOST
       // p.filter(GRAY);
    }

    /*p.windowResized() = function() {
        p.resizeCanvas(windowWidth, windowHeight);
    }*/
  }


// Function for the first canvas
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
        //cnv.parent('output2'); 
        // background(244, 253, 255);
        p.background(0); 
        //cloud.resize(0, width); 

        // CLICKS
       // confess=p.loadImage('assets/god/confess2.png'); 
       // clickCount = 0; 
        //factor = 50; 

    }

    p.draw = function() {
        p.background(255);  // reset background
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
  