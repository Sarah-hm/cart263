class Lvl {
  constructor() {
    // QUESTION:
    this.questionPositionX = width / 2;
    this.questionPositionY = (height / 5) * 3.5;
    this.questionString = undefined;
    this.questionFont = `courier`;
    this.questionFontFill = {
      r: 255,
      g: 255,
      b: 255,
    };
    this.questionTextSize = 32;

    //IMAGE/GIF
    this.image = undefined;
    this.imagePositionX = width / 2;
    this.imagePositionY = height / 3;
    this.imageWidth = 600;
    this.imageHeight = 333;

    // ===== Answer choices (double, square, cash) =====

    this.doubleButton = {
      string: `double`,
      x: width / 5,
    };

    this.squareButton = {
      string: `square`,
      x: width / 2,
    };

    this.cashButton = {
      string: `cash`,
      x: width / 5 * 4,
    };


    this.answerChoicesButtonY = height / 5 * 4.2;
    this.answerChoicesButtonWidth = 200;
    this.answerChoicesButtonHeight = 75;
    this.answerChoicesButtonRoundedCorner = 20;

    this.answerChoicesTextFill = {
      r: 25,
      g: 97,
      b: 172
    }
    this.answerChoicesButtonFill = {
      r: 193,
      g: 225,
      b: 210,
    };
    this.answerChoicesButtonHoverFill = {
      r: 191,
      g: 88,
      b: 156,
    };
    this.answerChoicesButtonStrokeWeight = 5;
    this.answerChoicesButtonStrokeFill = {
      r: 25,
      g: 97,
      b: 172
    }

    //POSSIBLE ANSWERS
    //side note: love how annyang censores curse words
    this.annyangCommand = undefined;

    this.answerAString = undefined;
    this.answerAPositionX = width / 4;
    this.answerAPositionY = (height / 10) * 6;

    this.answerBString = undefined;
    this.answerBPositionX = width / 4;
    this.answerBPositionY = (height / 10) * 6;

    this.answerCString = undefined;
    this.answerCPositionX = width / 4;
    this.answerCPositionY = (height / 10) * 6;

    this.answerDString = undefined;
    this.answerDPositionX = width / 4;
    this.answerDPositionY = (height / 10) * 6;

    this.answerWidth = 200;
    this.answerHeight = 100;
    this.answerTextSize = 20;

    //Background color:
    this.backgroundFill = {
      r: 59,
      g: 61,
      b: 126,
    };
  }

  update() {
    this.setBackground();
    this.displayQuestion();
    this.displayAnswerChoices();
    this.displayImage();
    this.displayAnswers();
  }

  setBackground() {
    background(
      this.backgroundFill.r,
      this.backgroundFill.g,
      this.backgroundFill.b
    );
  }

  displayQuestion() {
    push();
    textAlign(CENTER);
    textSize(this.question);
    textStyle(ITALIC);
    textSize(this.questionTextSize);
    fill(
      this.questionFontFill.r,
      this.questionFontFill.g,
      this.questionFontFill.b
    );
    text(this.questionString, this.questionPositionX, this.questionPositionY);
    pop();
  }

  displayAnswerChoices() {
    // let answerChoicesX = []
    //double

    let answerChoices = [this.doubleButton, this.squareButton, this.cashButton];
    for (let i = 0; i < answerChoices.length; i++) {
      push()
      if (
        mouseX > answerChoices[i].x - this.answerChoicesButtonWidth / 2 &&
        mouseX < answerChoices[i].x + this.answerChoicesButtonWidth / 2 &&
        mouseY > this.answerChoicesButtonY - this.answerChoicesButtonHeight / 2 &&
        mouseY < this.answerChoicesButtonY + this.answerChoicesButtonHeight / 2
      ) {
        fill(
          this.answerChoicesButtonHoverFill.r,
          this.answerChoicesButtonHoverFill.g,
          this.answerChoicesButtonHoverFill.b
        );
      } else {
        fill(
          this.answerChoicesButtonFill.r,
          this.answerChoicesButtonFill.g,
          this.answerChoicesButtonFill.b
        );
      }
      rectMode(CENTER);
      strokeWeight(this.answerChoicesButtonStrokeWeight);
      stroke(this.answerChoicesButtonStrokeFill.r, this.answerChoicesButtonStrokeFill.g, this.answerChoicesButtonStrokeFill.b);
      rect(answerChoices[i].x, this.answerChoicesButtonY, this.answerChoicesButtonWidth, this.answerChoicesButtonHeight, this.answerChoicesButtonRoundedCorner);
      pop()
      //text
      push()
      fill(this.answerChoicesTextFill.r, this.answerChoicesTextFill.g, this.answerChoicesTextFill.b)
      textAlign(CENTER, CENTER);
      textSize(this.questionTextSize)
      text(answerChoices[i].string, answerChoices[i].x, this.answerChoicesButtonY)
      pop()


    }


    // for (let i=0, i<answerChoices.length,i++){
    //
    // }

    //square

    //cash
  }

  displayImage() {
    push();
    translate(this.imagePositionX, this.imagePositionY);
    imageMode(CENTER);
    // scale(0.9);
    image(this.image, 0, 0, this.imageWidth, this.imageHeight);
    pop();
  }

  displayAnswers() {}

  win() {
    fill(255);
    text(`you win`, width / 2, (height / 10) * 9);
    console.log(`you win`);
  }

  mousePressed() {

  }
}