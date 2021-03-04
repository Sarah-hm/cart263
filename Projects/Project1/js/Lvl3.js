//Lvl3
//From now on, call me... velvet thunder
class Lvl3 extends Lvl {
  constructor() {
    super();

    //Question's image and string
    this.image = lvl3Image;
    this.questionString = `From now on, call me...`;

    //wining string if using annyang
    this.annyangCommand = "velvet thunder";

    //All possible answers:
    this.answerA = `velvet thunder`;
    this.answerB = `cheddar lover`;
    this.answerC = `dry blanket`;
    this.answerD = `your superior officer`;
    //put into an array:
    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    //winning answer vs losing array
    this.winningAnswer = this.answerA;
    this.losingAnswers = [this.answerB, this.answerC, this.answerD]

    //winning button position
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