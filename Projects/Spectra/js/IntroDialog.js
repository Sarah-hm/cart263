class IntroDialog extends Dialog {
  constructor() {
    super();
    this.backgroundImg = {
      img: mallStoreFrontImg,
      size: {
        width: 1100,
        height: 600
      },
      position: {
        x: 550,
        y: height / 2
      },
    }


  }

  update() {
    // super.update();
    this.setBackgroundImg();
    this.animateAndDisplayDialogBox();
  }

  setBackgroundImg() {
    push();
    imageMode(CENTER);
    image(this.backgroundImg.img, this.backgroundImg.position.x, this.backgroundImg.position.y, this.backgroundImg.size.width, this.backgroundImg.size.height);
    pop();
  }

  animateAndDisplayDialogBox() {
    super.animateAndDisplayDialogBox();
  }
}