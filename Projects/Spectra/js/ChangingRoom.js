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
        overallDressImg: {
          img: overallDressImg,
          width: 91.5,
          height: 170.9
        },

      }
    }


    this.masculineClothings = [this.clothes.masculine.utilityPants, this.clothes.masculine.tShirt, this.clothes.masculine.shirt, this.clothes.masculine.parka, this.clothes.masculine.formalPants]
  }

  update() {
    this.setBackground();
    this.displayAvatar();
    this.displayClothes();
    console.log(femaleAvatarImg.width)
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
    push();
    imageMode(CENTER);
    image(utilityPants, width / 2 + 1, height / 3 * 2 - 25, this.clothes.masculine.utilityPants.width, this.clothes.masculine.utilityPants.height);
    pop();
  }

  mousePressed() {

  }

}