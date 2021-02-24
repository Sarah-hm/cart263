class Lvl {

  constructor() {
    // QUESTION:
    this.questionPositionX = width / 2
    this.questionPositionY = height / 5 * 3.5
    this.questionString = `You're not Cheddar, you're ...`
    this.questionFont = `courier`
    this.questionFontFill = {
      r: 255,
      g: 255,
      b: 255
    }
    this.questionTextSize = 32

    //IMAGE/GIF
    this.image = lvl1Image;
    this.imagePositionX = width / 2;
    this.imagePositionY = height / 3
    this.imageWidth = 600;
    this.imageHeight = 333;


    //POSSIBLE ANSWERS
    //side note: love how annyang censores curse words
    this.annyangCommand = 'just a common b****'

    this.aString = `this is answer A`;
    this.aPositionX = width / 4;
    this.aPositionY = height / 10 * 6;
    this.aWidth = 200;
    this.aHeight = 100;
  }

  update() {
    this.displayQuestion();
    this.displayImage();
    this.displayAnswers();
  }

  displayQuestion() {
    push();
    textAlign(CENTER);
    textSize(this.question)
    textStyle(ITALIC);
    textSize(this.questionTextSize)
    fill(this.questionFontFill.r, this.questionFontFill.g, this.questionFontFill.b);
    text(this.questionString, this.questionPositionX, this.questionPositionY);
    pop();
  }

  displayImage() {
    push();
    translate(this.imagePositionX, this.imagePositionY)
    imageMode(CENTER);
    scale(0.9);
    image(this.image, 0, 0, this.imageWidth, this.imageHeight);
    pop();
  }

  displayAnswers() {

  }


  win() {
    fill(255);
    text(`you win`, width / 2, height / 10 * 9);
    console.log(`you win`)
  }
}