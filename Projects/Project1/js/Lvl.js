class Lvl {

  constructor() {
    // QUESTION:
    this.questionPositionX = width / 2
    this.questionPositionY = height / 5
    this.questionString = `You're not Cheddar, you're`
    this.questionFont = `courier`
    this.questionFontFill = {
      r: 255,
      g: 255,
      b: 255
    }
    this.questionTextSize = 32

    //IMAGE/GIF
    this.image = undefined;
    this.imagePositionX = width / 2;
    this.imagePostionY = height / 2;
    this.imageWidth = undefined;
    this.imageHeight = undefined;


    //POSSIBLE ANSWERS
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
    textSize(this.questionTextSize)
    fill(this.questionFontFill.r, this.questionFontFill.g, this.questionFontFill.b);
    text(this.questionString, this.questionPositionX, this.questionPositionY);
    pop();
  }

  displayImage() {

  }

  displayAnswers() {

  }
}