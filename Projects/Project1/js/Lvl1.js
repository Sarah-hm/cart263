//Lvl1
//You're not cheddar, you're... just a common bitch
class Lvl1 extends Lvl {
  constructor() {
    super();
    this.image = lvl1Image;

    this.questionString = `You're not Cheddar, you're ...`;

    //side note: love how annyang censors profanity (because annyang censors the last word, writing it expicitily didn't work)
    this.annyangCommand = "just a common b****";

    this.answerA = `parmigiano`;

    this.answerB = `just a dog `;

    this.answerC = `just a common bitch`;

    this.answerD = `a common canine`;

    this.winningAnswer = this.answerC;
    this.losingAnswers = [this.answerA, this.answerB, this.answerD]

    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.c;

  }

  update() {
    super.update();
  }

  displayDoubleAnswers() {
    super.displayDoubleAnswers();
    if (this.doubleButton.on === true) {

      this.doubleButton.a.string = this.losingAnswers[0];
      this.doubleButton.b.string = this.winningAnswer;
    }
  }

  nextLvl() {
    super.nextLvl();
    currentState = new Lvl2;
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