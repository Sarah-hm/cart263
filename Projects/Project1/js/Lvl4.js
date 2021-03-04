//Lvl4
//If you're here, ... who's guarding hades?
class Lvl4 extends Lvl {
  constructor() {
    super();
    this.image = lvl4Image;

    this.questionString = `But if you're here, ...`;

    this.annyangCommand = "who's guarding hades";

    this.answerA = `velvet thunder`;

    this.answerB = `cheddar lover`;

    this.answerC = `dry blanket`;

    this.answerD = `who's guarding hades?`;

    this.winningAnswer = this.answerD;
    this.losingAnswers = [this.answerA, this.answerB, this.answerC]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.d;

  }

  update() {
    super.update();
  }

  nextLvl() {
    currentState = new Lvl5;
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