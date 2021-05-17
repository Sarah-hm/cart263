class ChangingRoom {
  constructor() {
    //variables to define the background as an image
    this.background = {
      img: changingRoomBackgroundImg,
      imageMode: CORNER,
      size: {
        width: width,
        height: height
      },
      position: {
        x: 0,
        y: 0
      }
    }
    //Variables to define the avatar as an (undefined) image
    this.avatar = {
      img: undefined, //will be defined in the child class, either female or male
      imageMode: CENTER,
      size: {
        width: 270 / 3 * 2,
        height: 670 / 3 * 2
      },
      position: {
        x: width / 2,
        y: height / 2
      }
    }

    this.clothes = {
      created: false,
      imageMode: CENTER,
      utilityPants: {
        img: utilityPantsImg,
        width: 92.206,
        height: 234.5716,
        gender: "masculine"
      },
      tShirt: {
        img: manTshirtImg,
        width: 139.8,
        height: 177.1,
        gender: "masculine"
      },
      manShirt: {
        img: manShirtImg,
        width: 160.1,
        height: 157,
        gender: "masculine"
      },
      parka: {
        img: parkaImg,
        width: 175.1,
        height: 255.8,
        gender: "masculine"
      },
      formalPants: {
        img: formalPantsImg,
        width: 81.2403,
        height: 230.3061,
        gender: "masculine"
      },
      bodysuit: {
        img: bodysuitImg,
        width: 162.8,
        height: 146.6,
        gender: "feminine"
      },
      turtleNeck: {
        img: turtleNeckImg,
        width: 160.7,
        height: 152.5,
        gender: "feminine"
      },
      jeanSkirt: {
        img: jeanSkirtImg,
        width: 122.3,
        height: 103.1,
        gender: "feminine"
      },
      overallDress: {
        img: overallDressImg,
        width: 91.5,
        height: 170.9,
        gender: "feminine"
      },
      womanShirt: {
        img: womanShirtImg,
        width: 180.4,
        height: 99.1,
        gender: "feminine"
      }
    }



    this.masculineSection = {
        borderRight: width - 50,
        borderLeft: width / 5 * 3 + 50,

      },
      this.feminineSection = {
        borderRight: width / 5 * 2 - 50,
        borderLeft: 50
      }

    this.verticalBorder = 40;


    this.masculineClothings = [this.clothes.utilityPants, this.clothes.tShirt, this.clothes.manShirt, this.clothes.parka, this.clothes.formalPants];
    this.feminineClothings = [this.clothes.bodysuit, this.clothes.jeanSkirt, this.clothes.turtleNeck, this.clothes.overallDress, this.clothes.womanShirt];

    this.feminineGarments = []; //will be defined in the createGarment for() loop
    this.masculineGarments = [];

    this.clothesCreated = false; //Defines if the clothes have already been displayed on the canvas or not
    this.clothesDragged = false; //Defines if at least of on the clothes from garments array is being dragged

    this.appropriateClothingChoice = undefined; //Defined in the child class, can be : "masculine" or "feminine"

    //Declare if those microaggressions were already played, will be turned true whenever they are played.
    this.microaggressions = {
      firstWasPlayed: false,
      secondWasPlayed: false,
      thirdWasPlayed: false,
      fourthWasPlayed: false,
      fifthWasPlayed: false,
    }

    // ==== All broken game variables ====

    //Defines what level of 'brokenness' the game is currently at and all changing thresholds to increase brokenness
    this.brokenness = {
      lvl1: {
        on: false, // Turns true when a new microaggression is played
        filter: {
          threshold: 10,
          triggerThreshold: 0.01,
          timeApplied: 300
        }
      },
      lvl2: {
        on: false,
        filter: {
          threshold: 8,
          triggerThreshold: 0.02,
          timeApplied: 400
        }
      },
      lvl3: {
        on: false,
        filter: {
          threshold: 6,
          triggerThreshold: 0.03,
          timeApplied: 500
        }
      },
      lvl4: {
        on: false,
        filter: {
          threshold: 4,
          triggerThreshold: 0.04,
          timeApplied: 500
        }
      },
      lvl5: {
        on: false,
        filter: {
          threshold: 3,
          triggerThreshold: 0.05,
          timeApplied: 700
        }
      },
    }

    //filter
    this.filter = {
      mode: POSTERIZE, //set filter mode to posterize because it's cool but I couldn't explain how it works.
      threshold: 10, //threshold of colors for filter mode
      on: false, //Originally set to false; is set to true when filter is triggered to be able to turn it off and to only display it once at a time
      triggerThreshold: 0.01, //Chances of filter being toggled in the setFilter method
      timeApplied: 500 // Defines how much time the filter will be applied; default set to 1000
    }

  }

  update() {
    this.setBackground();
    this.displayAvatar();
    this.initializeGarments();
    this.executeGarments();
    this.setFilter();
  }

  setFilter() {


    if (this.brokenness.lvl1.on) //Only process if brokenness lvl 1 has been toggled (meaning filter doesn't display at all unless at least lvl1 is true)
    {
      if (this.brokenness.lvl1.on && !this.brokenness.lvl2.on) //process only if brokenness lvl1 is turned on (if microaggression 1 has played), but not lvl2 yet.
      {
        //Set the filter values to the brokenness lvl1 values
        this.filter.threshold = this.brokenness.lvl1.filter.threshold;
        this.filter.triggerThreshold = this.brokenness.lvl1.filter.triggerThreshold;
        this.filter.timeApplied = this.brokenness.lvl1.filter.timeApplied;
      } else if (this.brokenness.lvl2.on && !this.brokenness.lvl3.on) //process only if brokenness lvl2 is turned on but not lvl3 yet.
      {
        //Set the filter values to the brokenness lvl2 values
        this.filter.threshold = this.brokenness.lvl2.filter.threshold;
        this.filter.triggerThreshold = this.brokenness.lvl2.filter.triggerThreshold;
        this.filter.timeApplied = this.brokenness.lvl2.filter.timeApplied;
      } else if (this.brokenness.lvl3.on && !this.brokenness.lvl4.on) //process only if brokenness lvl3 is turned on but not lvl4 yet.
      {
        //Set the filter values to the brokenness lvl2 values
        this.filter.threshold = this.brokenness.lvl3.filter.threshold;
        this.filter.triggerThreshold = this.brokenness.lvl3.filter.triggerThreshold;
        this.filter.timeApplied = this.brokenness.lvl3.filter.timeApplied;
      } else if (this.brokenness.lvl4.on && !this.brokenness.lvl5.on) //process only if brokenness lvl4 is turned on but not lvl5 yet.
      {
        //Set the filter values to the brokenness lvl2 values
        this.filter.threshold = this.brokenness.lvl4.filter.threshold;
        this.filter.triggerThreshold = this.brokenness.lvl4.filter.triggerThreshold;
        this.filter.timeApplied = this.brokenness.lvl4.filter.timeApplied;
      } else if (this.brokenness.lvl5.on) //process only if brokenness lvl5 is turned on
      {
        //Set the filter values to the brokenness lvl2 values
        this.filter.threshold = this.brokenness.lvl5.filter.threshold;
        this.filter.triggerThreshold = this.brokenness.lvl5.filter.triggerThreshold;
        this.filter.timeApplied = this.brokenness.lvl5.filter.timeApplied;
      }


      let changeFilter = random(); // let changeFilter be a random number between 0 and 1
      if (changeFilter < this.filter.triggerThreshold) { //Process only if the random changeFilter is smaller than the established threshold
        if (!this.filter.on) {
          this.filter.on = true //turn filter on and setTimeout to turn it off in 1000 milliseconds
          setTimeout(() => {
            this.filter.on = false
          }, this.filter.timeApplied)
        }
      }
      if (this.filter.on) { // If filter is on, apply filter
        filter(this.filter.mode, this.filter.threshold)
      }
    }
  }


  setBackground() {
    push();
    imageMode(this.background.imageMode);
    image(this.background.img, this.background.position.x, this.background.position.y, this.background.size.width, this.background.size.height);
    pop();
  }

  displayAvatar() {
    push();
    imageMode(this.avatar.imageMode);
    image(this.avatar.img, this.avatar.position.x, this.avatar.position.y, this.avatar.size.width, this.avatar.size.height);
    pop();
  }

  createGarment(x, y, img, width, height, gender) {
    let garment = {
      x: x,
      y: y,
      vx: 0,
      vy: 0,
      speed: 2,
      img: img,
      width: width,
      height: height,
      gender: gender,
      zoomRatio: 1.5,
      hovered: false,
      dragged: false,
      onAvatar: false
    }
    return garment
  }

  initializeGarments() {
    if (this.clothes.created === false) {

      for (let i = 0; i < this.masculineClothings.length; i++) {
        this.masculineGarments[i] = this.createGarment(random(this.masculineSection.borderLeft, this.masculineSection.borderRight), random(0 + this.verticalBorder, height - this.verticalBorder), this.masculineClothings[i].img, this.masculineClothings[i].width, this.masculineClothings[i].height, this.masculineClothings[i].gender)
      }

      for (let i = 0; i < this.feminineClothings.length; i++) {
        this.feminineGarments[i] = this.createGarment(random(this.feminineSection.borderLeft, this.feminineSection.borderRight), random(0 + this.verticalBorder, height - this.verticalBorder), this.feminineClothings[i].img, this.feminineClothings[i].width, this.feminineClothings[i].height, this.feminineClothings[i].gender)
      }
      //Set clothes to created so this loop only runs once
      this.clothes.created = true;
    }
  }

  displayGarments(garment) {
    push()
    imageMode(this.clothes.imageMode)
    image(garment.img, garment.x, garment.y, garment.width / garment.zoomRatio, garment.height / garment.zoomRatio)
    pop()
  }

  //Animate the masculine garments constrained to the right side of the avatar to wiggle randomly, in the masculine section of the store.
  animateMasculineGarments(garment) {
    if (!garment.dragged && !garment.onAvatar) {
      garment.x = constrain(garment.x, this.masculineSection.borderLeft, this.masculineSection.borderRight)
      garment.y = constrain(garment.y, 0 + this.verticalBorder, height - this.verticalBorder)

      let change = random();
      if (change < 0.05) {
        garment.vx = random(-garment.speed, garment.speed);
        garment.vy = random(-garment.speed, garment.speed);
      }
      garment.x += garment.vx;
      garment.y += garment.vy;
    }
  }
  //Animate the feminine garments constrained to the left side of the avatar to wiggle randomly, in the feminine section of the store.
  animateFeminineGarments(garment) {
    if (!garment.dragged && !garment.onAvatar) {
      garment.x = constrain(garment.x, this.feminineSection.borderLeft, this.feminineSection.borderRight)
      garment.y = constrain(garment.y, 0 + this.verticalBorder, height - this.verticalBorder)

      let change = random();
      if (change < 0.05) {
        garment.vx = random(-garment.speed, garment.speed);
        garment.vy = random(-garment.speed, garment.speed);
      }
      garment.x += garment.vx;
      garment.y += garment.vy;
    }
  }


  hoverGarments(garment) {
    if (!this.clothesDragged) { //Only process if another garment is not already being dragged
      if ( //the mouse is inside of the garment's image bounds, toggle the hover effect (bigger img ratio) for only one of the garment
        mouseX > garment.x - garment.width / 2 &&
        mouseX < garment.x + garment.width / 2 &&
        mouseY > garment.y - garment.height / 2 &&
        mouseY < garment.y + garment.height / 2) {
        for (let i = 0; i < this.masculineGarments.length; i++) {
          this.masculineGarments[i].hovered = false //Set all garments (ei: those you go over while dragging a garment) to not hovering to limit the hover effect to one garment
        }
        for (let i = 0; i < this.feminineGarments.length; i++) {
          this.feminineGarments[i].hovered = false //Set all garments to not hovering to limit the hover effect to one garment
        }
        garment.hovered = true //turn the only (this one) garment that should have a hover effect on, on
      } else {
        garment.hovered = false //if the mouse leaves inside the image or was never there, hovered should be false
      }
    }
  }

  //Make garment draggable
  dragGarments(garment) {
    if (garment.hovered && mouseIsPressed) { //if the garment is being hovered over and player presses mouse
      garment.x = mouseX; //garment position's X will become mouseX position
      garment.y = mouseY; //garment position's Y will become mouseY position
      garment.dragged = true //dragged will be turned true
      this.clothesDragged = true; //clothesDragged will be true, meaning at least of the garments is being dragged
    }
    //Otherwise, if mouse if not Pressed
    else if (!mouseIsPressed) {
      garment.dragged = false //the garment will not have a dragged effect (false)
      this.clothesDragged = false; //clothesDragged is false, meaning no other garments is being dragged
    }
  }

  //Turn onAvatar true if the garment was dragged within the bounds of the avatar's image.
  //If the garment is dragged outside of these bounds, turn onAvatar back to false.
  garmentsOnAvatar(garment) {
    //If garment is being dragged inside the bounds of avatar's image
    if (garment.dragged &&
      mouseX > this.avatar.position.x - this.avatar.size.width / 2 &&
      mouseX < this.avatar.position.x + this.avatar.size.width / 2 &&
      mouseY > this.avatar.position.y - this.avatar.size.height / 2 &&
      mouseY < this.avatar.position.y + this.avatar.size.height / 2) {
      garment.onAvatar = true //turn on avatar true

      //If the appropriate clothing defined in child class is feminine and player is using a opposite gender garment, the game breaks further
      if (this.appropriateClothingChoice === "feminine") {
        if (garment.gender === "masculine") {
          garment.onAvatar = false; //make the garment not be able to stick to the avatar, will go back to its section
          this.breakGame();
        }
      }

      //If the appropriate clothing defined in child class is masculine and player is using a opposite gender garment, the game breaks further
      if (this.appropriateClothingChoice === "masculine") {
        if (garment.gender === "feminine") {
          garment.onAvatar = false; //make the garment not be able to stick to the avatar, will go back to its section
          this.breakGame();
        }
      }
    }
    //If the garment is dragged but anywhere outside of the avatar image, then set the garment.onAvatar to false
    else if (garment.dragged) { //if garment is being dragged outside of the bounds of avatar's image
      if (mouseX < this.avatar.position.x - this.avatar.size.width / 2 ||
        mouseX > this.avatar.position.x + this.avatar.size.width / 2 ||
        mouseY < this.avatar.position.y - this.avatar.size.height / 2 ||
        mouseY > this.avatar.position.y + this.avatar.size.height / 2
      ) {
        garment.onAvatar = false; //turn on Avatar false
      }
    }
  }

  //If the garment is either hovered over, being dragged or on the avatar, it's ratio should be of 1.
  //Otherwise, it's size ratio should be 50% smaller
  defineImgRatio(garment) {
    if (garment.hovered || garment.dragged || garment.onAvatar) {
      garment.zoomRatio = 1 //make garment size image a ratio of 1
    } else {
      garment.zoomRatio = 1.5 //make garment size image a ratio 1.5 (50% smaller)
    }
  }

  executeGarments() {
    for (let i = 0; i < this.masculineGarments.length; i++) {


      this.animateMasculineGarments(this.masculineGarments[i]);
      this.hoverGarments(this.masculineGarments[i]);
      this.dragGarments(this.masculineGarments[i]);
      this.garmentsOnAvatar(this.masculineGarments[i]);
      this.defineImgRatio(this.masculineGarments[i]);
      this.displayGarments(this.masculineGarments[i]);
    }

    for (let i = 0; i < this.feminineGarments.length; i++) {

      this.animateFeminineGarments(this.feminineGarments[i]);
      this.hoverGarments(this.feminineGarments[i]);
      this.dragGarments(this.feminineGarments[i]);
      this.garmentsOnAvatar(this.feminineGarments[i]);
      this.defineImgRatio(this.feminineGarments[i]);
      this.displayGarments(this.feminineGarments[i]);
    }
  }

  breakGame() {

    //If the first microaggression wasn't played, play it
    if (!this.microaggressions.firstWasPlayed) {
      this.playFirstMicroaggression();
    }
    //If the second microaggression wasn't played, play it and turn 'wasPlayed' to true to only play it once;
    else if (!this.microaggressions.secondWasPlayed) {
      this.playSecondMicroaggression();
    }
    //If the third microaggression wasn't played, play it and turn 'wasPlayed' to true to only play it once;
    else if (!this.microaggressions.thirdWasPlayed) {
      this.playThirdMicroaggression();
    }
    //If the fourth microaggression wasn't played, play it and turn 'wasPlayed' to true to only play it once;
    else if (!this.microaggressions.fourthWasPlayed) {
      this.playFourthMicroaggression();
    }
    //If the fifth microaggression wasn't played, play it and turn 'wasPlayed' to true to only play it once;
    else if (!this.microaggressions.fifthWasPlayed) {
      this.playFifthMicroaggression();
    }
    //If all microaggressions were played (all until the fifth), then play the ending scene.
    else if (this.microaggressions.fifthWasPlayed) {
      this.playEnding();
    }
  }

  //Turn currentState to first microaggression to play the scene;
  playFirstMicroaggression() {
    this.brokenness.lvl1.on = true;
    currentState = new FirstMicroAggression(); //Play first microaggression
  }

  //Turn currentState to second microaggression to play the scene;
  playSecondMicroaggression() {
    this.brokenness.lvl2.on = true;
    currentState = new SecondMicroAggression();
  }

  //Turn currentState to third microaggression to play the scene;
  playThirdMicroaggression() {
    this.brokenness.lvl3.on = true;
    currentState = new ThirdMicroAggression();
  }

  //Turn currentState to fourth microaggression to play the scene;
  playFourthMicroaggression() {
    this.brokenness.lvl4.on = true;
    currentState = new FourthMicroAggression();
  }

  //Turn currentState to fifth microaggression to play the scene;
  playFifthMicroaggression() {
    this.brokenness.lvl5.on = true;
    currentState = new FifthMicroAggression();
  }

  playEnding() {
    currentState = new Ending();
  }


  mousePressed() {}

}