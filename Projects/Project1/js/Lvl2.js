class Lvl2 extends Lvl {
  constructor() {
    super();
    this.image = lvl2Image;

    this.questionString = `Why are you not having fun?`;

    this.annyangCommand = "I specifically requested it";

    this.answerA = `I ordered you to`;

    this.answerB = `I specifically requested it`;

    this.answerC = `I want it that way`;

    this.answerD = `blablabla`;

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
    currentState = new Lvl3;
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