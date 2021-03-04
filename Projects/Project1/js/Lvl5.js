//LVL5 :
//Everytime somone steps up and says who they are, the world... becomes a better, more interesting place
class Lvl5 extends Lvl {
  constructor() {
    super();
    this.image = lvl5Image;

    this.questionString = `the world ...`;

    this.annyangCommand = "becomes a better more interesting place";

    this.answerA = `population increases by 1`;

    this.answerB = `becomes more intriguing
and refreshing`;

    this.answerC = `becomes a better,
more interesting place`;

    this.answerD = `says 'yas queen'`;

    this.winningAnswer = this.answerC;
    this.losingAnswers = [this.answerA, this.answerB, this.answerC]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.c;

  }

  update() {
    super.update();
  }

  nextLvl() {
    currentState = new Lvl6;
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