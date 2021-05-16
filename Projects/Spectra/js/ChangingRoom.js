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
      masculine: {
        utilityPants: {
          img: utilityPantsImg,
          width: 92.4,
          height: 234.96
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
          width: 81.2,
          height: 146.3
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
        borderRight: width,
        borderLeft: width / 5 * 3,

      },
      this.feminineSection = {
        borderRight: width / 5 * 2,
        borderLeft: 0
      }

    this.verticalBorder = 40;


    this.masculineClothings = [this.clothes.masculine.utilityPants, this.clothes.masculine.tShirt, this.clothes.masculine.shirt, this.clothes.masculine.parka, this.clothes.masculine.formalPants];
    this.feminineClothings = [this.clothes.feminine.bodysuit, this.clothes.feminine.jeanSkirt, this.clothes.feminine.turtleNeck, this.clothes.feminine.overallDress, this.clothes.feminine.shirt];
  }

  update() {
    this.setBackground();
    this.displayAvatar();
    this.displayClothes();
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

  displayClothes() {
    //display the masculine clothes in the masculine section
    for (let i = 0; i < this.masculineClothings.length; i++) {
      let x = random(this.masculineSection.borderLeft, this.masculineSection.borderRight);
      x = constrain(x, this.masculineSection.borderLeft, this.masculineSection.borderRight)
      let y = random(0 + this.verticalBorder, height - this.verticalBorder)
      y = constrain(0 + this.verticalBorder, height - this.verticalBorder)
      console.log(x);
      // console.log(this.masculineClothings[i].width)
      // Displays cloths
      push();
      image(this.masculineClothings[i].img, x, y, this.masculineClothings[i].width, this.masculineClothings[i].height)
      pop();
    }
  }

  mousePressed() {

  }

}