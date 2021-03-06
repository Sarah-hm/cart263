/**
First scene:
A 'start' logo appears at the center of the screen where you can click to make it sashay away and lead to the start of the game (animation first)
*/
class StartPage extends Scene {
  constructor() {
    //Declare all super constructor variables
    super();
    //Declare background image variable
    this.background = {
      img: mallEscalatorsImg,
      imageMode: CENTER,
      size: {
        width: 1600,
        height: 600,
      },
      position: {
        x: width,
        y: height / 2,
      },
    }

    //====First frame =====
    //First picture over looking the inside of a mall; the alpha decreases when the start logo starts closing
    this.firstFrame = {
      img: startMallImg,
      imageMode: CENTER,
      size: {
        width: width,
        height: height
      },
      position: {
        x: width / 2,
        y: height / 2
      },
      //Opacity
      tint: {
        gray: 255,
        alpha: undefined, //will be defined in the map() with startLogo's width
      },
      //Opacity mapped by startLogo's image width zooming out, the less opaque the image becomes the more zoom out the logo is (when closing)
      tintMapping: {
        inheritedVariable: undefined, //Will be defined in the setFirstFrame method as the startlogo.size.width
        minInheritedValue: width, //Maximum width that the start logo can have
        maxInheritedValue: 0, //Mimumum width that the start logo can have
        minMappedValue: 255, //maximum alpha that the first Frame can have
        maxMappedValue: 0, //miminum alpha that the first Frame can have
      },
    }

    //Start logo variables
    this.startLogo = {
      img: startLogoImg0, //image the logo is going to start by displaying
      possibleImgs: [startLogoImg0, startLogoImg1, startLogoImg2], //all possible images to logo might be displaying;
      flickerSpeed: 10, // Flickering speed between logo Imgs
      opening: true, //Defines if the startLogo is opening (zooming in) at the start of the animate. Turned on until closing is turned true
      closing: false, //Defines if the startLogo has been clicked and should therefore close
      closed: false, //Defines if the startLogo has been completely closed after closing
      imageMode: CENTER,
      position: {
        x: width / 2,
        y: height / 2
      },
      //initial size
      size: {
        width: 5,
        height: undefined // defined in the displayStartLogo method with a ratio of 3:4 of the width value
      },
      //maximum size when opening
      maxSize: {
        width: width,
        height: height
      },
      //minimum size when closing
      minSize: {
        width: 5,
        height: 0
      },
      resizeValue: { //how fast the image will resize its width per frame
        zoomIn: 10, //when it is zooming in
        zoomOut: -10 //when it is zooming out
      },
      angleMode: DEGREES,
      angle: 0, //the image's starting angle
      spinSpeed: 2 // how fast the image will turn on its axis per frame
    }
  }

  //runs every frame
  update() {
    super.update(); //Runs the super class update() method
    this.setBackground(); //sets the background Image
    this.setFirstFrame();
    this.animateStartLogo();
    this.closeStartLogo();
    this.displayStartLogo();

  }

  //Display background image
  setBackground() {
    push();
    imageMode(this.background.imageMode)
    image(this.background.img, this.background.position.x, this.background.position.y, this.background.size.width, this.background.size.height);
    pop();
  }

  //Display the image of the inside of the mall at the foreground on the entire canvas
  setFirstFrame() {
    if (this.startLogo.closing) //only process if the startLogo is closing
    { //tint map: as the start logo zooms out, the more transparent the first frame will become (until 0)
      //Set the inherited variable of the alpha map as the size (width) of the logo
      this.firstFrame.tintMapping.inheritedVariable = this.startLogo.size.width
      //map the image tint's alpha from fully opaque to fully transparent based on first frame's X position (with a maximum of the canvas' width)
      this.firstFrame.tint.alpha = map(
        this.firstFrame.tintMapping.inheritedVariable,
        this.firstFrame.tintMapping.minInheritedValue,
        this.firstFrame.tintMapping.maxInheritedValue,
        this.firstFrame.tintMapping.minMappedValue,
        this.firstFrame.tintMapping.maxMappedValue
      );
    }

    //display the image
    push();
    imageMode(this.firstFrame.imageMode);
    tint(this.firstFrame.tint.gray, this.firstFrame.tint.alpha);
    image(this.firstFrame.img, this.firstFrame.position.x, this.firstFrame.position.y, this.firstFrame.size.width, this.firstFrame.size.height);
    pop();
  }

  //animate start logo to get bigger if opening; rotate if closing
  animateStartLogo() {
    if (this.startLogo.opening) //only process if the startLogo is opening
    {
      if (this.startLogo.size.width <= this.startLogo.maxSize.width) {
        this.startLogo.size.width += this.startLogo.resizeValue.zoomIn;
      }
    }
    if (this.startLogo.closing) //Only process if the startLogo is closing
    {
      this.startLogo.angle += this.startLogo.spinSpeed //make the start logo rotate by the spin speed per frame
    }
  }

  //If start logo is closing, make it small until it reaches its minimum width and then change current State to intro
  closeStartLogo() {
    if (this.startLogo.closing) //only process if the startLogo should be closing
    {
      this.startLogo.opening = false //turn opening false so the logo doesn't zoom in again
      if (this.startLogo.size.width >= this.startLogo.minSize.width) { //As long as the width of the image isn't its minimum width, make it smaller
        this.startLogo.size.width += this.startLogo.resizeValue.zoomOut
      }
      if (this.startLogo.size.width <= this.startLogo.minSize.width) {
        this.startLogo.closed = true;
      }
    }

    if (this.startLogo.closed) //Only process if startLogo is closed
    {
      currentState = new Intro();
    }
  }

  //randomly display one of the three Startlogo image every flickerSpeed amount of frame to give a neon light like effect
  displayStartLogo() {
    //Changes between three images of title every FlickerSpeed
    if (frameCount % this.startLogo.flickerSpeed === 0) {
      this.startLogo.img = random(this.startLogo.possibleImgs);
    }
    //display logo image
    push();
    this.startLogo.size.height = this.startLogo.size.width / 4 * 3 //Define the height of the image as 3/4 the size of the width
    translate(this.startLogo.position.x, this.startLogo.position.y);
    angleMode(this.startLogo.angleMode)
    rotate(this.startLogo.angle);
    imageMode(this.startLogo.imageMode);
    image(this.startLogo.img, 0, 0, this.startLogo.size.width, this.startLogo.size.height);
    pop();
  }

  //if mouse is pressed when startLogo's size is its maximum size, then start closing the logo (to lead to new state)
  mousePressed() {
    super.mousePressed();
    if (this.startLogo.size.width >= this.startLogo.maxSize.width) {
      this.startLogo.closing = true;
    }
  }
}