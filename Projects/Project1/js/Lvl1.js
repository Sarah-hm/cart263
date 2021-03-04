//Lvl1
//You're not cheddar, you're... just a common bitch
class Lvl1 extends Lvl {
  constructor() {
    super();
    //Question's image and string
    this.image = lvl1Image;
    this.questionString = `You're not Cheddar, you're ...`;

    //wining string if using annyang
    //side note: love how annyang censors profanity (because annyang censors the last word, writing it expicitily didn't work)
    this.annyangCommand = "just a common b****";

    //All possible answers:
    this.answerA = `parmigiano`;
    this.answerB = `just a dog `;
    this.answerC = `just a common bitch`;
    this.answerD = `a common canine`;
    //put into an array:
    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    //winning answer vs losing array
    this.winningAnswer = this.answerC;
    this.losingAnswers = [this.answerA, this.answerB, this.answerD]

    //winning button position
    this.winningDoubleButton = this.doubleButton.b;
    this.winningSquareButton = this.squareButton.c;

  }

  update() {
    super.update();
  }

  nextLvl() {
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