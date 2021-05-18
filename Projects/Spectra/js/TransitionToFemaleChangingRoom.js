/**
Mini subclass of transitional animation towards changing room.

ChoosingSection.js's background becomes slowly less opaque and shows the female changing room is the background
*/
class TransitionToFemaleChangingRoom extends Scene {
  constructor() {
    //Declare all super constructor variables
    super();
    //variables of all intro frames before dialog box
    this.frames = {
      //FIRST FRAME : InsideStore zooms in until transition to changing room
      firstFrame: {
        img: insideStoreImg,
        size: {
          width: 800,
          height: 600,
        },
        position: {
          x: width / 2,
          y: height / 2
        },
        offset: -4, //when zooming in, will offset position x by 2 to zoom in on store front more precisely
        resizeValue: {
          width: 11 / 2,
          height: 6 / 2, //ratio of 11:6 width:height,
          minimum: 800, //minimum width of image
          maximum: 1500 // maximum width of image
        },
        // animationSpeed: 5,
        //Opacity
        tint: {
          gray: 255,
          alpha: undefined, //will be defined in the map() with zoom(scale) input
        },
        //Opacity mapped by position X changing, until it reaches landing position, therefore 0 opacity
        tintMapping: {
          inheritedVariable: undefined, //defined in the animate and display method; mapped on maximum
          minInheritedValue: 800, //mininmum width of image
          maxInheritedValue: 1500, //maximum width of image
          minMappedValue: 255, //initial alpha is 255
          maxMappedValue: 0, //final alpha is 0
        },
      },
    }
  }

  //runs every frame
  update() {
    super.update(); //Runs the super class update() method

    this.displayChangingRoom(); //display the appropriate changing room in the background

    this.animateAndDisplayFirstFrame(); //animate and display the inside of the store

    this.checkIfAnimationsCompleted(); //check if animation is completed; if so, change so next scene

  }

  displayChangingRoom() {
    //If changing room hasn't already been opened, open it and turn it to true so it only does it once
    if (!this.changingRoomOpened) {
      this.changingRoomOpened = true;
      currentChangingRoom = new FemaleChangingRoom();
    }
  }


  animateAndDisplayFirstFrame() {
    //======= Display first frame (inside Store)=======
    //zooms in while moving slightly to the right so as to give the impression were walking in in a store

    //If the width of the image is not it's maximum value, keep 'zooming' in by making the image bigger, make it lose opacity and display it
    //Once at maximum size, image will be fully transparent and not display anymore
    if (
      this.frames.firstFrame.size.width < this.frames.firstFrame.resizeValue.maximum
    ) {

      //Make the image bigger in width and height with a ratio of 11:6
      this.frames.firstFrame.size.width += this.frames.firstFrame.resizeValue.width;
      this.frames.firstFrame.size.height += this.frames.firstFrame.resizeValue.height;

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

      //Display the inside Store img with a mode, a tint, an image, a position and a size
      push();
      imageMode(CENTER);
      //set tint (more specifically alpha)
      tint(
        this.frames.firstFrame.tint.gray,
        this.frames.firstFrame.tint.alpha
      );
      //display image
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


  //Check if animation is completed
  checkIfAnimationsCompleted() {
    //If the first frame image's size (width) is = to it's maximum value, annimation is completed
    if (this.frames.firstFrame.size.width >= this.frames.firstFrame.resizeValue.maximum) {
      //The player has previously chosen the feminine Section (in ChoosingSection.js); go to female Changing Room
      //Go to the In the changing room scene, which does nothing but wait
      currentState = new InTheChangingRoom();
      //Toggle changing room to open and send the customer (player) to the female avatar changing room
    }
  }


}