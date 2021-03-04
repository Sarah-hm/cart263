//WIN
// Last page, you won yay
class Win {
  constructor() {
    super();
    this.image = lvl6Image;

    this.questionString = `no context Bonus!`;

    this.annyangCommand = "not a doctor";

    this.answerA = `it is a doctor`;

    this.answerB = `not a doctor`;

    this.answerC = `NINE-NINE!`;

    this.answerD = `See you next time`;

    this.winningAnswer = this.answerB;
    this.losingAnswers = [this.answerA, this.answerC, this.answerD]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.b;

  }

  update() {
    super.update();
  }

  nextLvl() {
    currentState = new Win;
  }

  mousePressed() {
    super.mousePressed();
  }

  keyTyped() {
    super.keyTyped();
  }

  keyPressed() {
    super.keyPressed();
  }
}