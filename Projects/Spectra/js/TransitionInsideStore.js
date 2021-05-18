class TransitionInsideStore extends Scene {
  constructor() {
    //Declare all super constructor variables
    super();
    //variables of all intro frames before dialog box
    this.frames = {
      //FIRST FRAME : store front zooms in while losing opacity until it disappears completely
      firstFrame: {
        img: mallStoreFrontImg,
        size: {
          width: 1100,
          height: 600
        },
        position: {
          x: 550,
          y: height / 2
        },
        offset: -4, //when zooming in, will offset position x by 2 to zoom in on store front more precisely
        resizeValue: {
          width: 11 / 2,
          height: 6 / 2, //ratio of 11:6 width:height,
          minimum: 1100, //minimum width of image
          maximum: 2200 // maximum width of image
        },
        // animationSpeed: 5,
        //Opacity
        tint: {
          gray: 255,
          alpha: undefined, //will be defined in the map() with zoom(scale) input
        },
        //Opacity mapped by position X changing, until it reaches landing position, therefore 0 opacity
        tintMapping: {
          inheritedVariable: undefined, //defined in the animate and display method as image's X position
          minInheritedValue: 1100, //initial X position of frame
          maxInheritedValue: 2200, //final (landing) X position of frame
          minMappedValue: 255, //maximum alpha of frame is 255
          maxMappedValue: 0, //mininmum alpha of frame is 0
        },
      },
      //SECOND FRAME: Inside Store
      secondFrame: {
        img: insideStoreImg,
        size: {
          width: 800,
          height: 600,
        },
        position: {
          x: width / 2,
          y: height / 2,
        },
        //Where and how fast the animate goes
        animationSpeed: {
          x: -5,
          y: undefined,
        },
        //Opacity
        tint: {
          gray: 255,
          alpha: undefined,
        },
        //Opacity mapped by zoom effect. More zoom in, the lesser opacity until 0.
        tintMapping: {
          inheritedVariable: undefined, //Defined in the animate method as the size of the frame
          minInheritedValue: 1600, //initial size (width of image) is 1600
          maxInheritedValue: 3000, //Maximum size(width of image) is 3000
          minMappedValue: 255, //initial alpha of frame is 255
          maxMappedValue: 0, // final alpha of frame is 0
        },
      },
    }
  }

  update() {
    super.update();

    //Animate store front to zoom in and discover the inside of the store
    //In decreasing order to your see the first frame on top of the second
    this.animateAndDisplaySecondFrame();
    this.animateAndDisplayFirstFrame();

    //Check if animation is completed. If so, go to next scene;
    this.checkIfAnimationsCompleted();

  }


  animateAndDisplayFirstFrame() {
    //======= Display first frame (store front)=======
    //zooms in while moving slightly to the right so as to give the impression were walking in in a store

    //If the width of the image is not it's maximum value, keep 'zooming' in by making the image bigger, make it lose opacity and display it
    //Once at maximum size, image will be fully transparent and not display anymore
    if (
      this.frames.firstFrame.size.width < this.frames.firstFrame.resizeValue.maximum
    ) {

      //Make the image bigger in width and height with a ratio of 11:6
      this.frames.firstFrame.size.width += this.frames.firstFrame.resizeValue.width;
      this.frames.firstFrame.size.height += this.frames.firstFrame.resizeValue.height;
      //Make the image move slightly to the right
      this.frames.firstFrame.position.x += this.frames.firstFrame.offset

      //tint map: as the image gets bigger, the more transparent the image will become (until 0)
      //Set the inherited variable of the alpha map as the current size (using width) of the image
      this.frames.firstFrame.tintMapping.inheritedVariable = this.frames.firstFrame.size.width;
      //map the image tint's alpha from fully opaque to fully transparent based on first frame's minimum and maximum width
      this.frames.firstFrame.tint.alpha = map(
        this.frames.firstFrame.tintMapping.inheritedVariable,
        this.frames.firstFrame.tintMapping.minInheritedValue,
        this.frames.firstFrame.tintMapping.maxInheritedValue,
        this.frames.firstFrame.tintMapping.minMappedValue,
        this.frames.firstFrame.tintMapping.maxMappedValue
      );

      //Display first frame of the top of an escalator
      push();
      imageMode(CENTER);
      //Set the tint (especially the alpha) of the frame
      tint(
        this.frames.firstFrame.tint.gray,
        this.frames.firstFrame.tint.alpha
      );
      //display the image
      image(
        this.frames.firstFrame.img,
        this.frames.firstFrame.position.x,
        this.frames.firstFrame.position.y,
        this.frames.firstFrame.size.width,
        this.frames.firstFrame.size.height
      );
      pop();
    }
  }

  animateAndDisplaySecondFrame() {
    //======= Display second frame (inside the store)=======

    push();
    imageMode(CENTER);
    //display the image
    image(
      this.frames.secondFrame.img,
      this.frames.secondFrame.position.x,
      this.frames.secondFrame.position.y,
      this.frames.secondFrame.size.width,
      this.frames.secondFrame.size.height
    );
    pop();
  }


  checkIfAnimationsCompleted() {
    //If the first frame's size (in width) has reached its maximum resize Value, the animation is completed and currentState should become IntroEmployee
    if (this.frames.firstFrame.size.width === this.frames.firstFrame.resizeValue.maximum) {
      currentState = new IntroEmployee();
    }
  }


}