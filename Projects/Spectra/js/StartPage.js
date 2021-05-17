class StartPage extends Scene {
  constructor() {
    super();
    this.background = {
      img: startMallImg,
      imageMode: CENTER,
      size: {
        width: 800,
        height: 600,
      },
      position: {
        x: width / 2,
        y: height / 2,
      },
    }

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
      size: {
        width: 5,
        height: undefined // defined in the displayStartLogo method with a ratio of 3:4 of the width value
      },
      maxSize: {
        width: width,
        height: height
      },
      minSize: {
        width: 5,
        height: 0
      },
      resizeValue: { //how fast the image will resize its width per frame
        zoomIn: 10, //when it is zooming in
        zoomOut: -10 //when it is zooming out
      }
    }
  }

  update() {
    super.update();
    this.setBackground();
    this.animateStartLogo();
    this.closeStartLogo();
    this.displayStartLogo();

  }

  setBackground() {
    push();
    imageMode(this.background.imageMode)
    image(this.background.img, this.background.position.x, this.background.position.y, this.background.size.width, this.background.size.height);
    pop();
  }

  animateStartLogo() {
    if (this.startLogo.opening) //only process if the startLogo should be opening
    {
      if (this.startLogo.size.width <= this.startLogo.maxSize.width) {
        this.startLogo.size.width += this.startLogo.resizeValue.zoomIn;
      }
    }
  }

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

  displayStartLogo() {
    //Changes between three images of title every FlickerSpeed
    if (frameCount % this.startLogo.flickerSpeed === 0) {
      this.startLogo.img = random(this.startLogo.possibleImgs);
    }
    //display logo image
    push();
    this.startLogo.size.height = this.startLogo.size.width / 4 * 3 //Define the height of the image as 3/4 the size of the width
    imageMode(this.startLogo.imageMode);
    image(this.startLogo.img, this.startLogo.position.x, this.startLogo.position.y, this.startLogo.size.width, this.startLogo.size.height);
    pop();
  }


  mousePressed() {
    super.mousePressed();
    if (this.startLogo.size.width >= this.startLogo.maxSize.width) {
      this.startLogo.closing = true;
    }
  }
}