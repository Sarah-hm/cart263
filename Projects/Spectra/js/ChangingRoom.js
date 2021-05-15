class ChangingRoom extends Scene {
  constructor() {
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
    this.avatar = {
      img: undefined, //will be defined in the child class, either female or male
      imageMode: CENTER,
      size: {
        width: 270,
        height: 670
      },
      position: {
        x: width / 2,
        y: height / 2
      }
    }
  }

  update() {
    super.update();
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

  }

}