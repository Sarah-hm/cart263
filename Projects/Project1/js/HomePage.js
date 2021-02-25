class Homepage {

  constructor() {
    //image that is displayed;
    this.titleImg = titleImg0;

    //title Images to randomly choose from
    this.titleImg0 = titleImg0;
    this.titleImg1 = titleImg1;
    this.titleImg2 = titleImg2;

    //Position and Size of title img
    this.titleImgX = width / 2
    this.titleImgY = height / 2
    this.titleWidth = 900;
    this.titleHeight = 600;

    //Flickering speed between img
    this.titleFlickerSpeed = 10;

    ////Raymond Holt pictures
    //Pointing Raymond Holt = RHImg0;
    this.RHImg0 = titleRHImg0;
    this.RHImg0Width = 214;
    this.RHImg0Height = 403;
    this.RHImg0PositionX = width / 5 * 2.9;
    this.RHImg0PositionY = height + this.RHImg0Height;
    //RHImg0 movement
    this.RHImg0FinalPositionX = width / 5 * 3;
    this.RHImg0FinalPositionY = height - this.RHImg0Height / 2 + 10;
    this.RHImg0velocity = 4;

    //Two left pictures = RHImg1;
    this.RHImg1 = titleRHImg1;
    this.RHImg1Width = 442;
    this.RHImg1Height = 351;
    this.RHImg1PositionX = 0 - this.RHImg1Width / 2;
    this.RHImg1PositionY = height - this.RHImg1Height / 2 + 30;
    //RHImg0 movement
    this.RHImg1FinalPositionX = width / 5 * 1.8;
    this.RHImg1FinalPositionY = height - this.RHImg1Height / 2 + 30;
    this.RHImg1velocity = 5;

    //t-shirt wearing Raymond = RHImg2;
    this.RHImg2 = titleRHImg2;
    this.RHImg2Width = 310;
    this.RHImg2Height = 376;
    this.RHImg2PositionX = width + this.RHImg2Width / 2;
    this.RHImg2PositionY = height - this.RHImg2Height / 2 + 20;
    //RHImg0 movement
    this.RHImg2FinalPositionX = width / 5 * 3.6;
    this.RHImg2FinalPositionY = height - this.RHImg2Height / 2 + 20;
    this.RHImg2velocity = -5;

    this.InstructionImg = neutralInstructionImg;



    //background color
    this.background = {
      r: 59,
      g: 61,
      b: 126
    }
  }

  update() {
    this.setBackground();
    this.displayBackRaymondHolt();
    this.displayTitle();
    this.displayRaymondHolt();
  }

  setBackground() {
    background(this.background.r, this.background.g, this.background.b);

  }


  displayBackRaymondHolt() {
    ////RHImg2 (t-shirt Raymond, right)
    //move RHImg2
    if (this.RHImg2PositionX > this.RHImg2FinalPositionX) {
      this.RHImg2PositionX += this.RHImg2velocity
    }
    //Display RHImg2
    push()
    imageMode(CENTER);
    image(this.RHImg2, this.RHImg2PositionX, this.RHImg2PositionY, this.RHImg2Width, this.RHImg2Height)
    pop()

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

  displayRaymondHolt() {
    ////RHImg1 (two left pictures)
    //move RHImg1
    if (this.RHImg1PositionX < this.RHImg1FinalPositionX) {
      this.RHImg1PositionX += this.RHImg1velocity
    }
    //Display RHImg1
    push()
    imageMode(CENTER);
    image(this.RHImg1, this.RHImg1PositionX, this.RHImg1PositionY, this.RHImg1Width, this.RHImg1Height)
    pop()

    ////RHImg0 (pointing Raymond)
    //move RHImg0
    if (this.RHImg0PositionY > this.RHImg0FinalPositionY) {
      this.RHImg0PositionY -= this.RHImg0velocity
    }
    //Display RHImg0
    push()
    imageMode(CENTER);
    image(this.RHImg0, this.RHImg0PositionX, this.RHImg0PositionY, this.RHImg0Width, this.RHImg0Height)
    pop()
  }

}