//LVL6 : Bonus
// Fremulon - Not a doctor.
class Lvl6 extends Lvl {
  constructor() {
    super();
    //Question's image and string
    this.image = lvl6Image;
    this.questionString = `no context Bonus!`;

    //wining string if using annyang
    this.annyangCommand = "not a doctor";

    //All possible answers:
    this.answerA = `it is a doctor`;
    this.answerB = `not a doctor`;
    this.answerC = `NINE-NINE!`;
    this.answerD = `See you next time`;
    //put into an array:
    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    //winning answer vs losing array
    this.winningAnswer = this.answerB;
    this.losingAnswers = [this.answerA, this.answerC, this.answerD]

    //winning button position
    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.b;

  }

  update() {
    super.update();
  }

  nextLvl() {
    currentState = new Win();
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