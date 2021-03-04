class Lvl3 extends Lvl {
  constructor() {
    super();
    this.image = lvl3Image;

    this.questionString = `From now on, call me...`;

    this.annyangCommand = "velvet thunder";

    this.answerA = `velvet thunder`;

    this.answerB = `cheddar lover`;

    this.answerC = `dry blanket`;

    this.answerD = `your superior officer`;

    this.winningAnswer = this.answerA;
    this.losingAnswers = [this.answerB, this.answerC, this.answerD]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.a;
    this.winningSquareButton = this.squareButton.a;

  }

  update() {
    super.update();
  }

  nextLvl() {
    currentState = new Lvl4;
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