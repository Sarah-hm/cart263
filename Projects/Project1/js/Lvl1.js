class Lvl1 extends Lvl {
  constructor() {
    super()
    this.image = lvl1Image;

    this.questionString = `You're not Cheddar, you're ...`

    //side note: love how annyang censors profanity
    this.annyangCommand = 'just a common b****'

    this.answerA = `undefined`;

    this.answerB = `just a dog `;

    this.answerC = `just a common b*tch`;

    this.answerD = `undefined`;

  }

  update() {
    super.update();
  }

  displayDoubleAnswers() {
    super.displayDoubleAnswers()
    if (this.doubleButton.on === true) {
      this.doubleButtons.a.string = this.answerB
      this.doubleButtons.b.string = this.answerC
    }
  }


  displaySquareAnswers() {
    super.displaySquareAnswers()

    if (this.squareButton.on === true) {
      this.squareButton.a.string = this.answerA;
      this.squareButton.b.string = this.answerB;
      this.squareButton.c.string = this.answerC;
      this.squareButton.d.string = this.answerD

      for (let i = 0; 0 < this.squareButtons.length; i++) {
        push()
        console.log(this.squareButtons.length)
        if (mouseX > this.squareButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.squareButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.squareButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.squareButtons[i].y + this.answerButtons.height / 2
        ) {
          fill(
            this.answerButtons.fillHover.r,
            this.answerButtons.fillHover.g,
            this.answerButtons.fillHover.b,
          );
        } else {
          fill(
            this.answerButtons.fill.r,
            this.answerButtons.fill.g,
            this.answerButtons.fill.b,
          );
        }
        rectMode(CENTER);
        strokeWeight(this.answerChoicesButtonStrokeWeight);
        stroke(this.answerChoicesButtonStrokeFill.r, this.answerChoicesButtonStrokeFill.g, this.answerChoicesButtonStrokeFill.b);
        rect(this.squareButtons[i].x, this.squareButtons[i].y, this.answerButtons.width, this.answerButtons.height, this.answerButtons.roundCorner);
        pop()

        //text
        push()
        fill(this.answerButtons.textFill.r, this.answerButtons.textFill.g, this.answerButtons.textFill.b)
        textAlign(CENTER, CENTER);
        textSize(this.questionTextSize)
        text(this.squareButtons[i].string, this.squareButtons[i].x, this.squareButtons[i].y)
        pop()

      }
    }

  }

  displayCashInput() {

  }

  mousePressed() {
    super.mousePressed();
  }
}