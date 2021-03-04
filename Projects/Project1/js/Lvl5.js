//LVL5 : 
//Everytime somone steps up and says who they are, the world... becomes a better, more interesting place
class Lvl5 extends Lvl {
  constructor() {
    super();
    this.image = lvl5Image;

    this.questionString = `the world ...`;

    this.annyangCommand = "becomes a better more interesting place";

    this.answerA = `velvet thunder`;

    this.answerB = `cheddar lover`;

    this.answerC = `becomes a better,
more interesting place`;

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