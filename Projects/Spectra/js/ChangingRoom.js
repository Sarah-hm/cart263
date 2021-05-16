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
      masculine: {
        utilityPants: {
          img: utilityPantsImg,
          width: 92.206,
          height: 234.5716
        },
        tShirt: {
          img: manTshirtImg,
          width: 139.8,
          height: 177.1
        },
        shirt: {
          img: manShirtImg,
          width: 160.1,
          height: 157
        },
        parka: {
          img: parkaImg,
          width: 175.1,
          height: 255.8
        },
        formalPants: {
          img: formalPantsImg,
          width: 81.2403,
          height: 230.3061
        },
      },
      feminine: {
        bodysuit: {
          img: bodysuitImg,
          width: 162.8,
          height: 146.6
        },
        turtleNeck: {
          img: turtleNeckImg,
          width: 160.7,
          height: 152.5
        },
        jeanSkirt: {
          img: jeanSkirtImg,
          width: 122.3,
          height: 103.1
        },
        overallDress: {
          img: overallDressImg,
          width: 91.5,
          height: 170.9
        },
        shirt: {
          img: womanShirtImg,
          width: 180.4,
          height: 99.1
        }
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


    this.masculineClothings = [this.clothes.masculine.utilityPants, this.clothes.masculine.tShirt, this.clothes.masculine.shirt, this.clothes.masculine.parka, this.clothes.masculine.formalPants];
    this.feminineClothings = [this.clothes.feminine.bodysuit, this.clothes.feminine.jeanSkirt, this.clothes.feminine.turtleNeck, this.clothes.feminine.overallDress, this.clothes.feminine.shirt];

    this.feminineGarments = []; //will be defined in the createGarment for() loop
    this.masculineGarments = [];

    this.clothesCreated = false; //Defines if the clothes have already been displayed on the canvas or not
    this.clothesDragged = false; //Defines if at least of on the clothes from garments array is being dragged


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

  createGarment(x, y, img, width, height) {
    let garment = {
      x: x,
      y: y,
      vx: 0,
      vy: 0,
      speed: 2,
      img: img,
      width: width,
      height: height,
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
        this.masculineGarments[i] = this.createGarment(random(this.masculineSection.borderLeft, this.masculineSection.borderRight), random(0 + this.verticalBorder, height - this.verticalBorder), this.masculineClothings[i].img, this.masculineClothings[i].width, this.masculineClothings[i].height)
      }

      for (let i = 0; i < this.feminineClothings.length; i++) {
        this.feminineGarments[i] = this.createGarment(random(this.feminineSection.borderLeft, this.feminineSection.borderRight), random(0 + this.verticalBorder, height - this.verticalBorder), this.feminineClothings[i].img, this.feminineClothings[i].width, this.feminineClothings[i].height)
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

  animateFeminineGarments(garment) {

    if (!garment.hovered) {
      garment.x = constrain(garment.x, this.feminineSection.borderLeft, this.feminineSection.borderRight)
      garment.y = constrain(garment.y, 0 + this.verticalBorder, height - this.verticalBorder)
    }

    if (!garment.onAvatar) {
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

    if (!this.clothesDragged) {
      if (
        mouseX > garment.x - garment.width / 2 &&
        mouseX < garment.x + garment.width / 2 &&
        mouseY > garment.y - garment.height / 2 &&
        mouseY < garment.y + garment.height / 2) {
        for (let i = 0; i < this.masculineGarments.length; i++) {
          this.masculineGarments[i].hovered = false
        }
        garment.hovered = true
      } else {
        garment.hovered = false
      }
    }


    if (garment.hovered || garment.dragged || garment.onAvatar) {
      garment.zoomRatio = 1
    } else {
      garment.zoomRatio = 1.5
    }
  }

  dragGarments(garment) {
    if (garment.hovered && mouseIsPressed) {
      garment.x = mouseX;
      garment.y = mouseY;
      garment.dragged = true
      this.clothesDragged = true;
    } else if (!mouseIsPressed) {
      garment.dragged = false
      this.clothesDragged = false;
    }
  }

  garmentsOnAvatar(garment) {
    if (garment.dragged &&
      mouseX > this.avatar.position.x - this.avatar.size.width / 2 &&
      mouseX < this.avatar.position.x + this.avatar.size.width / 2 &&
      mouseY > this.avatar.position.y - this.avatar.size.height / 2 &&
      mouseY < this.avatar.position.y + this.avatar.size.height / 2) {
      garment.onAvatar = true
    }
    //If the garment is dragged but anywhere outside of the avatar image, then set the garment.onAvatar to false
    else if (garment.dragged) {
      if (mouseX < this.avatar.position.x - this.avatar.size.width / 2 ||
        mouseX > this.avatar.position.x + this.avatar.size.width / 2 ||
        mouseY < this.avatar.position.y - this.avatar.size.height / 2 ||
        mouseY > this.avatar.position.y + this.avatar.size.height / 2
      ) {
        garment.onAvatar = false;
      }
    }
  }

  executeGarments() {
    for (let i = 0; i < this.masculineGarments.length; i++) {

      this.animateMasculineGarments(this.masculineGarments[i]);
      this.hoverGarments(this.masculineGarments[i]);
      this.dragGarments(this.masculineGarments[i]);
      this.garmentsOnAvatar(this.masculineGarments[i]);
      this.displayGarments(this.masculineGarments[i]);
    }

    for (let i = 0; i < this.feminineGarments.length; i++) {

      this.animateFeminineGarments(this.feminineGarments[i]);
      this.hoverGarments(this.feminineGarments[i]);
      this.dragGarments(this.feminineGarments[i]);
      this.displayGarments(this.feminineGarments[i]);
    }
  }



  mousePressed() {
    console.log(this.masculineGarments[1])
  }

}