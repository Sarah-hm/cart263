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

    this.winningAnswer = this.answerC;
    this.losingAnswers = [this.answerA, this.answerB, this.answerD]

    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.c;
  }

  update() {
    super.update();
  }

  displayDoubleAnswers() {
    super.displayDoubleAnswers()
    if (this.doubleButton.on === true) {
      this.doubleButton.a.string = this.losingAnswers[0]
      this.doubleButton.b.string = this.winningAnswer

    }
  }


  displaySquareAnswers() {
    super.displaySquareAnswers()
    if (this.squareButton.on === true) {
      this.squareButton.a.string = this.losingAnswers[0]
      this.squareButton.b.string = this.losingAnswers[1]
      this.squareButton.c.string = this.winningAnswer
      this.squareButton.d.string = this.losingAnswers[2]

      for (let i = 0; 0 < this.squareButtons.length; i++) {
        push()
        console.log([i])
        if (mouseX > this.squareButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.squareButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.squareButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.squareButtons[i].y + this.answerButtons.height / 2) {
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
          console.log(this.squareButtons[i].x)
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

  win() {
    super.win();

  }

  mousePressed() {
    super.mousePressed();

    if (this.squareButton.on) {
      for (let i = 0; 0 < this.squareButtons.length; i++) {
        if (mouseX > this.squareButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.squareButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.squareButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.squareButtons[i].y + this.answerButtons.height / 2) {
          if (this.squareButtons[i].x === this.squareButton.a.x && this.squareButtons[i].y === this.squareButton.a.y) {
            console.log(`button a`);
          }
        }
      }
    }
  }
}