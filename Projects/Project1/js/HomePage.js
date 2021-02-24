class Homepage {

  constructor() {
    this.titleImg = titleImg0;

    this.titleImg0 = titleImg0;
    this.titleImg1 = titleImg1;
    this.titleImg2 = titleImg2;

    this.titleImgX = width / 2
    this.titleImgY = height / 2
    this.titleWidth = 900;
    this.titleHeight = 600;

    this.titleFlickerSpeed = 10;

    this.background = {
      r: 59,
      g: 61,
      b: 126
    }
  }

  update() {
    this.setBackground()
    this.displayTitle()
  }

  setBackground() {
    background(this.background.r, this.background.g, this.background.b);
  }

  displayTitle() {
    if (frameCount % this.titleFlickerSpeed === 0) {
      let titleImages = [this.titleImg0, this.titleImg1, this.titleImg2]
      this.titleImg = random(titleImages);
    }
    push()
    imageMode(CENTER);
    image(this.titleImg, this.titleImgX, this.titleImgY, this.titleImgWidth, this.titleImgHeight);
    pop()
  }

}