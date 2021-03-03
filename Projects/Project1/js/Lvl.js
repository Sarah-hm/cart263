class Lvl {
  constructor() {
    // ==== question with image ====
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

    //Individual parameters
    this.doubleChoiceButton = {
      string: `double`,
      x: width / 5,
    };

    this.squareChoiceButton = {
      string: `square`,
      x: width / 2,
    };

    this.cashChoiceButton = {
      string: `cash`,
      x: (width / 5) * 4,
    };

    //all three options put into an array for efficiency
    this.answerChoices = [
      this.doubleChoiceButton,
      this.squareChoiceButton,
      this.cashChoiceButton,
    ];

    //universal parameted for answer choices :
    this.answerChoicesOpened = true;
    this.answerChoicesButtonY = (height / 5) * 4.2;
    this.answerChoicesButtonWidth = 200;
    this.answerChoicesButtonHeight = 75;
    this.answerChoicesButtonRoundedCorner = 20;

    this.answerChoicesTextFill = {
      r: 25,
      g: 97,
      b: 172,
    };
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
      b: 172,
    };

    // ==== (Possible) Answers ====

    //String defined in child class; x,y position is defined by the choice of double or square answers.
    this.answerA = undefined;
    this.answerB = undefined;
    this.answerC = undefined;
    this.answerD = undefined;

    // X,Y position depending if player chose double or square answerTextSize
    this.doubleButton = {
      on: false,
      a: {
        string: undefined,
        x: width / 4,
        y: (height / 10) * 9,
      },
      b: {
        string: undefined,
        x: (width / 4) * 3,
        y: (height / 10) * 9,
      },
    };

    this.squareButton = {
      on: false,
      a: {
        string: undefined,
        x: width / 4,
        y: (height / 10) * 7.8,
      },
      b: {
        string: undefined,
        x: (width / 4) * 3,
        y: (height / 10) * 7.8,
      },
      c: {
        string: undefined,
        x: width / 4,
        y: (height / 10) * 9.2,
      },
      d: {
        string: undefined,
        x: (width / 4) * 3,
        y: (height / 10) * 9.2,
      },
    };

    this.squareButtons = [
      this.squareButton.a,
      this.squareButton.b,
      this.squareButton.c,
      this.squareButton.d,
    ];

    //universal to all buttons
    this.answerButtons = {
      width: 350,
      height: 70,
      roundCorner: 20,
      fill: {
        r: 193,
        g: 225,
        b: 210,
      },
      fillHover: {
        r: 191,
        g: 88,
        b: 156,
      },
      strokeFill: {
        r: 193,
        g: 225,
        b: 210,
      },
      textFill: {
        r: 25,
        g: 97,
        b: 172,
      },
    };

    //POSSIBLE ANSWERS

    this.annyangCommand = undefined;

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

  // ========== update ===========
  update() {
    this.setBackground();
    this.displayImage();
    this.displayQuestion();
    this.displayAnswerChoices();
    this.displayDoubleAnswers();
    this.displaySquareAnswers();
    this.displayCashInput();
  }

  setBackground() {
    background(
      this.backgroundFill.r,
      this.backgroundFill.g,
      this.backgroundFill.b
    );
  }

  displayImage() {
    push();
    translate(this.imagePositionX, this.imagePositionY);
    imageMode(CENTER);
    // scale(0.9);
    image(this.image, 0, 0, this.imageWidth, this.imageHeight);
    pop();
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
    if (this.answerChoicesOpened) {
      for (let i = 0; i < this.answerChoices.length; i++) {
        //button (fill color changes if hovering over)
        push();
        if (
          mouseX >
          this.answerChoices[i].x - this.answerChoicesButtonWidth / 2 &&
          mouseX <
          this.answerChoices[i].x + this.answerChoicesButtonWidth / 2 &&
          mouseY >
          this.answerChoicesButtonY - this.answerChoicesButtonHeight / 2 &&
          mouseY <
          this.answerChoicesButtonY + this.answerChoicesButtonHeight / 2
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
        stroke(
          this.answerChoicesButtonStrokeFill.r,
          this.answerChoicesButtonStrokeFill.g,
          this.answerChoicesButtonStrokeFill.b
        );
        rect(
          this.answerChoices[i].x,
          this.answerChoicesButtonY,
          this.answerChoicesButtonWidth,
          this.answerChoicesButtonHeight,
          this.answerChoicesButtonRoundedCorner
        );
        pop();

        //text
        push();
        fill(
          this.answerChoicesTextFill.r,
          this.answerChoicesTextFill.g,
          this.answerChoicesTextFill.b
        );
        textAlign(CENTER, CENTER);
        textSize(this.questionTextSize);
        text(
          this.answerChoices[i].string,
          this.answerChoices[i].x,
          this.answerChoicesButtonY
        );
        pop();
      }
    }
  }

  displayDoubleAnswers() {
    if (this.doubleButton.on === true) {
      for (let i = 0; i < this.answerChoices.length; i++) {
        //button (fill color changes if hovering over)
      }
    }
  }

  displaySquareAnswers() {
    if (this.squareButton.on === true) {}
  }

  displayCashInput() {
    if (this.cashAnswer.on === true) {}
  }

  win() {
    fill(255);
    text(`you win`, width / 2, (height / 10) * 9);
    console.log(`you win`);
  }

  mousePressed() {
    if (this.answerChoicesOpened) {
      for (let i = 0; i < this.answerChoices.length; i++) {
        if (
          mouseX >
          this.answerChoices[i].x - this.answerChoicesButtonWidth / 2 &&
          mouseX <
          this.answerChoices[i].x + this.answerChoicesButtonWidth / 2 &&
          mouseY >
          this.answerChoicesButtonY - this.answerChoicesButtonHeight / 2 &&
          mouseY <
          this.answerChoicesButtonY + this.answerChoicesButtonHeight / 2
        ) {
          if (this.answerChoices[i].x === this.doubleChoiceButton.x) {
            this.doubleChoiceButtons.on = true;
          } else if (this.answerChoices[i].x === this.squareChoiceButton.x) {
            this.squareButton.on = true;
          } else if (this.answerChoices[i].x === this.cashChoiceButton.x) {
            this.cashAnswer.on = true;
          }
          this.answerChoicesOpened = false;
        }
      }
    }
  }
}