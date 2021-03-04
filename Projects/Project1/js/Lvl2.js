class Lvl2 extends Lvl {
  constructor() {
    super();
    this.image = lvl2Image;

    this.questionString = `Why is no one having a good time?`;

    this.annyangCommand = "I specifically requested it";

    this.answerA = `parmigiano`;

    this.answerB = `I specifically requested it `;

    this.answerC = `just a common bitch`;

    this.answerD = `a common canine`;

    this.winningAnswer = this.answerB;
    this.losingAnswers = [this.answerA, this.answerC, this.answerD];

    this.winningDoubleButton = this.doubleButton.a;

    this.winningSquareButton = this.squareButton.d;

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

  displaySquareAnswers() {
    super.displaySquareAnswers();
    if (this.squareButton.on === true) {
      this.squareButton.a.string = this.losingAnswers[0];
      this.squareButton.b.string = this.losingAnswers[1];
      this.squareButton.c.string = this.winningAnswer;
      this.squareButton.d.string = this.losingAnswers[2];
    }
  }

  displayCashInput() {}

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