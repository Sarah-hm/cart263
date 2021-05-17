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
      secondtWasPlayed: false,
      thirdWasPlayed: false,
      fourthWasPlayed: false,
      fifthWasPlayed: false,
    }

  }

  update() {
    this.setBackground();
    this.displayAvatar();
    this.initializeGarments();
    this.executeGarments();
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
          this.breakGame();
        }
      }

      //If the appropriate clothing defined in child class is masculine and player is using a opposite gender garment, the game breaks further
      if (this.appropriateClothingChoice === "masculine") {
        if (garment.gender === "feminine") {
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
    if (!this.microaggressions.firstWasPlayed) {
      this.playFirstMicroaggression();
    }
  }

  playFirstMicroaggression() {
    currentState = new FirstMicroAggression();
  }

  mousePressed() {}

}