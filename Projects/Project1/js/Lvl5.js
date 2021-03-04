//LVL5 :
//Everytime somone steps up and says who they are, the world... becomes a better, more interesting place
class Lvl5 extends Lvl {
  constructor() {
    super();
    //Question's image and string
    this.image = lvl5Image;
    this.questionString = `the world ...`;

    //wining string if using annyang
    this.annyangCommand = "becomes a better more interesting place";

    //All possible answers:
    this.answerA = `population increases by 1`;
    this.answerB = `becomes more intriguing
and refreshing`;
    this.answerC = `becomes a better,
more interesting place`;
    this.answerD = `says 'yas queen'`;
    //put into an array:
    this.possibleAnswers = [this.answerA, this.answerB, this.answerC, this.answerD]

    //winning answer vs losing array
    this.winningAnswer = this.answerC;
    this.losingAnswers = [this.answerA, this.answerB, this.answerC]

    //winning button position
    this.winningDoubleButton = this.doubleButton.a;
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