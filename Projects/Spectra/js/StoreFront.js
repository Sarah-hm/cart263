class StoreFront {
  constructor() {

    this.defaultSettings = {
      bg: {
        r: 255,
        g: 255,
        b: 255
      }
    }

    this.introImgs = {
      firstFrame: {
        img: mallEscalatorsImg,
        size: {
          width: 1600,
          height: 600
        },
        position: {
          x: width,
          y: height / 2
        },
        landingPosition: {
          x: 0,
          y: height / 2
        },
        animationSpeed: undefined,
        animationMapping: {
          inheritedVariable: undefined,
          minInheritedValue: 0,
          maxInheritedValue: width,
          minMappedValue: 1,
          maxMappedValue: 7
        },
        tint: {
          gray: 255,
          alpha: undefined,
        },
        tintMapping: {
          inheritedVariable: undefined,
          minInheritedValue: width,
          maxInheritedValue: 0,
          minMappedValue: 255,
          maxMappedValue: 0
        }
      },
      secondFrame: {
        img: mallMezzanineImg,
        size: {
          width: 1600,
          height: 1200
        },
        resizeValue: {
          width: 10,
          height: undefined
        },
        maxSize: 4000,
        position: {
          x: width,
          y: height
        },
        landingPosition: {
          x: 0,
          y: 0
        },
        animationSpeed: {
          x: -2,
          y: undefined
        },
        tint: {
          gray: 255,
          alpha: undefined,
        },
        tintMapping: {
          inheritedVariable: undefined,
          //minimum and maximum width the image can have
          minInheritedValue: 1600,
          maxInheritedValue: 4000,
          minMappedValue: 255,
          maxMappedValue: 0
        }
      }
    }
  }

  update() {
    this.setBackground();
    this.animateIntroImgs();
  }

  setBackground() {
    background(this.defaultSettings.bg.r, this.defaultSettings.bg.b, this.defaultSettings.bg.g);
  }

  //Animate first pictures of the mall with interactive animation speed based on mouse position
  animateIntroImgs() {

    //======= Display second frame (looking over inside a mall from mezzanine)=======
    if (this.introImgs.secondFrame.position.x > this.introImgs.secondFrame.landingPosition.x) {
      //Put animation speed x a ratio of 3:4 to animation speed y so the trajectory follows the ratio of the canvas
      this.introImgs.secondFrame.animationSpeed.y = this.introImgs.secondFrame.animationSpeed.x / 4 * 3

      this.introImgs.secondFrame.position.x += this.introImgs.secondFrame.animationSpeed.x;
      this.introImgs.secondFrame.position.y += this.introImgs.secondFrame.animationSpeed.y
      //Display second frame of the mezzanine of a mall
      push();
      imageMode(CENTER)
      // tint(this.introImgs.secondFrame.tint.gray, this.introImgs.secondFrame.tint.alpha);
      image(this.introImgs.secondFrame.img, this.introImgs.secondFrame.position.x, this.introImgs.secondFrame.position.y, this.introImgs.secondFrame.size.width, this.introImgs.secondFrame.size.height);
      pop();
    }
    //If the image is on its final position, it will zoom in (increasing heigh, width) and starts losing opacity until fully transparent
    else if (
      this.introImgs.secondFrame.position.x <= this.introImgs.secondFrame.landingPosition.x && this.introImgs.secondFrame.size.width <= this.introImgs.secondFrame.maxSize
    )

    {
      //set resize value of y is a ratio of 3:4 to the resize value of x so it's resizing with the ratio of the canvas
      this.introImgs.secondFrame.resizeValue.height = this.introImgs.secondFrame.resizeValue.width / 4 * 3
      this.introImgs.secondFrame.size.width += this.introImgs.secondFrame.resizeValue.width;
      this.introImgs.secondFrame.size.height += this.introImgs.secondFrame.resizeValue.height;

      //tint map: as the image zooms in, the more transparent the image will become (until 0)
      //Set the inherited variable of the alpha map as the current width of the image
      this.introImgs.secondFrame.tintMapping.inheritedVariable = this.introImgs.secondFrame.size.width;


      //map the image tint's alpha from fully opaque to fully transparent based on first frame's X position (with a maximum of the canvas' width)
      this.introImgs.secondFrame.tint.alpha = map(this.introImgs.secondFrame.tintMapping.inheritedVariable, this.introImgs.secondFrame.tintMapping.minInheritedValue, this.introImgs.secondFrame.tintMapping.maxInheritedValue, this.introImgs.secondFrame.tintMapping.minMappedValue, this.introImgs.secondFrame.tintMapping.maxMappedValue);

      //Display second frame of the mezzanine of a mall
      push();
      imageMode(CENTER)
      tint(this.introImgs.secondFrame.tint.gray, this.introImgs.secondFrame.tint.alpha);
      image(this.introImgs.secondFrame.img, this.introImgs.secondFrame.position.x, this.introImgs.secondFrame.position.y, this.introImgs.secondFrame.size.width, this.introImgs.secondFrame.size.height);
      pop();

    }



    //======= Display first frame (escalators in a mall)=======
    //Moves to the left with speed based on mouseX, loses alpha until transparent
    //If the image isn't at its landing position yet, make it go left with a speed mapped on mouseX's position.Transparency goes from 0 to 100 as it approaches landing position
    if (this.introImgs.firstFrame.position.x > this.introImgs.firstFrame.landingPosition.x) {
      //animation speed map : define inherited variable as mouseX; map it to the width of canvas and the min and max animation speed of the image; move the image
      this.introImgs.firstFrame.animationMapping.inheritedVariable = mouseX;
      this.introImgs.firstFrame.animationSpeed = map(this.introImgs.firstFrame.animationMapping.inheritedVariable, this.introImgs.firstFrame.animationMapping.minInheritedValue, this.introImgs.firstFrame.animationMapping.maxInheritedValue, this.introImgs.firstFrame.animationMapping.minMappedValue, this.introImgs.firstFrame.animationMapping.maxMappedValue);
      this.introImgs.firstFrame.position.x -= this.introImgs.firstFrame.animationSpeed

      //tint map: as the image goes left, the more transparent the image will become (until 0)
      //Set the inherited variable of the alpha map as the current x position of the image
      this.introImgs.firstFrame.tintMapping.inheritedVariable = this.introImgs.firstFrame.position.x;
      //map the image tint's alpha from fully opaque to fully transparent based on first frame's X position (with a maximum of the canvas' width)
      this.introImgs.firstFrame.tint.alpha = map(this.introImgs.firstFrame.tintMapping.inheritedVariable, this.introImgs.firstFrame.tintMapping.minInheritedValue, this.introImgs.firstFrame.tintMapping.maxInheritedValue, this.introImgs.firstFrame.tintMapping.minMappedValue, this.introImgs.firstFrame.tintMapping.maxMappedValue);

      //Display first frame of the top of an escalator
      push()
      imageMode(CENTER)
      tint(this.introImgs.firstFrame.tint.gray, this.introImgs.firstFrame.tint.alpha);
      image(this.introImgs.firstFrame.img, this.introImgs.firstFrame.position.x, this.introImgs.firstFrame.position.y, this.introImgs.firstFrame.size.width, this.introImgs.firstFrame.size.height);
      pop();


    }


  }
}