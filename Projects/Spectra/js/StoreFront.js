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
        animationSpeed: 5,
        animationMapping: {
          inheritedVariable: mouseX,
          minInheritedValue: 0,
          maxInheritedValue: width,
          minMappedValue: 5,
          maxMappedValue: 50
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

  animateIntroImgs() {
    //Display first frame (escalators in a mall)

    //Move to the left based on last frame's position




    //If the image isn't at its landing position yet, make it go left with a speed mapped on mouseX's position.Transparency goes from 0 to 100 as it approaches landing position
    if (this.introImgs.firstFrame.position.x > this.introImgs.firstFrame.landingPosition.x) {
      //animation speed map
      this.introImgs.firstFrame.animationSpeed = map(this.introImgs.firstFrame.animationMapping.inheritedVariable, this.introImgs.firstFrame.animationMapping.minInheritedValue, this.introImgs.firstFrame.animationMapping.maxInheritedValue, this.introImgs.firstFrame.animationMapping.minMappedValue, this.introImgs.firstFrame.animationMapping.maxMappedValue);
      this.introImgs.firstFrame.position.x -= this.introImgs.firstFrame.animationSpeed



      //tint map
      //Set the inherited variable of the tint mapping object at the current x position of the image
      this.introImgs.firstFrame.tintMapping.inheritedVariable = this.introImgs.firstFrame.position.x;
      this.introImgs.firstFrame.tint.alpha = map(this.introImgs.firstFrame.tintMapping.inheritedVariable, this.introImgs.firstFrame.tintMapping.minInheritedValue, this.introImgs.firstFrame.tintMapping.maxInheritedValue, this.introImgs.firstFrame.tintMapping.minMappedValue, this.introImgs.firstFrame.tintMapping.maxMappedValue);
    }

    push()
    imageMode(CENTER)
    tint(this.introImgs.firstFrame.tint.gray, this.introImgs.firstFrame.tint.alpha);
    image(this.introImgs.firstFrame.img, this.introImgs.firstFrame.position.x, this.introImgs.firstFrame.position.y, this.introImgs.firstFrame.size.width, this.introImgs.firstFrame.size.height);
    pop();
  }
}