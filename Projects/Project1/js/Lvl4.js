//Lvl4
//If you're here, ... who's guarding hades?
class Lvl4 extends Lvl {
  constructor() {
    super();

    //Question's image and string
    this.image = lvl4Image;
    this.questionString = `But if you're here, ...`;

    //wining string if using annyang
    this.annyangCommand = "who's guarding hades";

    //All possible answers:
    this.answerA = `who killed the victim?`;
    this.answerB = `who called me?`;
    this.answerC = `who took your
place in hell?`;
    this.answerD = `who's guarding hades?`;
    //put into an array:
    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    //winning answer vs losing array
    this.winningAnswer = this.answerD;
    this.losingAnswers = [this.answerA, this.answerB, this.answerC]


    //winning button position
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