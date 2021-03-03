class Lvl1 extends Lvl {
  constructor() {
    super();
    this.image = lvl1Image;

    this.questionString = `You're not Cheddar, you're ...`;

    //side note: love how annyang censors profanity
    this.annyangCommand = "just a common b****";

    this.answerA = `parmigiano`;

    this.answerB = `just a dog `;

    this.answerC = `just a common b*tch`;

    this.answerD = `a common canine`;

    this.winningAnswer = this.answerC;
    this.losingAnswers = [this.answerA, this.answerB, this.answerD];

    this.winningDoubleButton = this.doubleButton.b;
    this.losingDoubleButton = this.doubleButton.a;

    this.winningSquareButton = this.squareButton.c;
    this.losingSquareButton = [
      this.squareButton.a,
      this.squareButton.b,
      this.squareButton.d,
    ];
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

  mousePressed() {
    super.mousePressed();


  }
}