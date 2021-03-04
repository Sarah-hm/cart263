//LVL6 : Bonus
// Fremulon - Not a doctor.
class Lvl6 extends Lvl {
  constructor() {
    super();
    this.image = lvl6Image;

    this.questionString = `no context Bonus!`;

    this.annyangCommand = "not a doctor";

    this.answerA = `NINE-NINE!`;

    this.answerB = `not a doctor`;

    this.answerC = `I am a doctor`;

    this.answerD = `See you next time`;

    this.winningAnswer = this.answerB;
    this.losingAnswers = [this.answerA, this.answerC, this.answerD]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.a;
    this.winningSquareButton = this.squareButton.b;

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