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



    // ==== answer set up choice ===

    // Player choses, after seeing the question, if they want to see 2, 4 or no choice to answer.

    //Three buttons (double, square, cash), with their respective string and x position:
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

    //All other characteristics of the three buttons (double, square, cash) are the same:
    this.answerChoice = {
      on: true,
      y: (height / 5) * 4.2,
      width: 200,
      height: 75,
      roundCorner: 20,
      strokeWeight: 5,
      textFill: {
        r: 25,
        g: 97,
        b: 172
      },
      buttonFill: {
        r: 193,
        g: 225,
        b: 210,
      },
      hoverFill: {
        r: 191,
        g: 88,
        b: 156,
      },
      strokeFill: {
        r: 25,
        g: 97,
        b: 172,
      }
    }

    //all three options put into an array (to display, fill, etc)
    this.answerChoices = [
      this.doubleChoiceButton,
      this.squareChoiceButton,
      this.cashChoiceButton,
    ];

    // ==== (Possible) Answers ====

    //String defined in child class; x,y position is defined by the choice of double or square answers.
    this.answerA = undefined;
    this.answerB = undefined;
    this.answerC = undefined;
    this.answerD = undefined;


    // Possible answer defined by voice input via annyang
    this.annyangCommand = undefined;

    //Defined in child class
    this.winningDoubleButton = undefined;
    this.losingDoubleButton = undefined;
    this.winningSquareButton = undefined;

    //To display win button whether it's
    this.winningButton = undefined;

    // If player chooses `double`, two choices will appear with a given string, x and y
    this.doubleButton = {
      on: false,
      a: {
        string: undefined,
        x: width / 4,
        y: (height / 10) * 8.5,
      },
      b: {
        string: undefined,
        x: (width / 4) * 3,
        y: (height / 10) * 8.5,
      },
    };

    //If player chooses 'square', four choices will appear with a given string, x and y
    this.squareButton = {
      on: false,
      a: {
        string: undefined,
        x: width / 4,
        y: height / 10 * 7.8,
      },
      b: {
        string: undefined,
        x: width / 4 * 3,
        y: height / 10 * 7.8,
      },
      c: {
        string: undefined,
        x: width / 4,
        y: height / 10 * 9.2,
      },
      d: {
        string: undefined,
        x: width / 4 * 3,
        y: height / 10 * 9.2,
      },
    };

    this.cashButton = {
      on: false,
      string: ``,
      x: width / 2,
      y: (height / 10) * 8.5,
    }

    //universal to all answers' buttons (double or square) : size, color
    this.answerButtons = {
      textSize: 25,
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

    //Array of possible 'double' answers (to display, fill, etc)
    this.doubleButtons = [this.doubleButton.a, this.doubleButton.b];

    //Array of possible 'square' answers (to display, fill, etc)
    this.squareButtons = [
      this.squareButton.a,
      this.squareButton.b,
      this.squareButton.c,
      this.squareButton.d,
    ];

    //=== If you lose once, you will be able to skip to the next level because let's not make life harder than it is ===
    this.lost = false;

    this.skip = {
      image: skipImg0,
      size: 75,
      x: width / 10 * 9,
      y: height / 3,
      flickerSpeed: 20,
    }
    //array of possible skip images
    this.skipImgs = [skipImg0, skipImg1, skipImg2];

    // ====== state of the Lvl ======

    this.won = false;

    //when won, the game will wait this.winTimer seconds before proceeding to the next lvl
    this.winTimer = 2;
    this.currentWinTimer = 0

    //===Background color===
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
    this.displayCashAnswer();
    this.checkWin();
    this.checkLose();
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
    if (this.answerChoice.on) {
      this.lost = false;
      this.won = false;
      this.doubleButton.on = false;
      this.squareButton.on = false;
      this.cashButton.on = false;
      for (let i = 0; i < this.answerChoices.length; i++) {
        //button (fill color changes if hovering over)
        push();
        if (
          mouseX >
          this.answerChoices[i].x - this.answerChoice.width / 2 &&
          mouseX <
          this.answerChoices[i].x + this.answerChoice.width / 2 &&
          mouseY >
          this.answerChoice.y - this.answerChoice.height / 2 &&
          mouseY <
          this.answerChoice.y + this.answerChoice.height / 2
        ) {
          fill(
            this.answerChoice.hoverFill.r,
            this.answerChoice.hoverFill.g,
            this.answerChoice.hoverFill.b
          );
        } else {
          fill(
            this.answerChoice.buttonFill.r,
            this.answerChoice.buttonFill.g,
            this.answerChoice.buttonFill.b
          );
        }
        rectMode(CENTER);
        strokeWeight(this.answerChoice.strokeWeight);
        stroke(
          this.answerChoice.strokeFill.r,
          this.answerChoice.strokeFill.g,
          this.answerChoice.strokeFill.b
        );
        rect(
          this.answerChoices[i].x,
          this.answerChoice.y,
          this.answerChoice.width,
          this.answerChoice.height,
          this.answerChoice.roundCorner
        );
        pop();

        //text
        push();
        fill(
          this.answerChoice.textFill.r,
          this.answerChoice.textFill.g,
          this.answerChoice.textFill.b
        );
        textAlign(CENTER, CENTER);
        textSize(this.questionTextSize);
        text(
          this.answerChoices[i].string,
          this.answerChoices[i].x,
          this.answerChoice.y
        );
        pop();
      }
    }
  }

  displayDoubleAnswers() {
    if (this.doubleButton.on === true) {
      for (let i = 0; i < this.doubleButtons.length; i++) {
        push();
        if (
          mouseX > this.doubleButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.doubleButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.doubleButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.doubleButtons[i].y + this.answerButtons.height / 2
        ) {
          fill(
            this.answerButtons.fillHover.r,
            this.answerButtons.fillHover.g,
            this.answerButtons.fillHover.b
          );
        } else {
          fill(
            this.answerButtons.fill.r,
            this.answerButtons.fill.g,
            this.answerButtons.fill.b
          );
        }
        rectMode(CENTER);
        strokeWeight(this.answerChoice.strokeWeight);
        stroke(
          this.answerChoice.strokeFill.r,
          this.answerChoice.strokeFill.g,
          this.answerChoice.strokeFill.b
        );
        rect(
          this.doubleButtons[i].x,
          this.doubleButtons[i].y,
          this.answerButtons.width,
          this.answerButtons.height,
          this.answerButtons.roundCorner
        );
        pop();

        push();
        //String
        if (this.doubleButtons[i] == this.winningDoubleButton) {
          this.doubleButtons[i].string = this.winningAnswer
        } else {
          this.doubleButtons[i].string = this.losingAnswers[0];
        }
        //text
        fill(
          this.answerButtons.textFill.r,
          this.answerButtons.textFill.g,
          this.answerButtons.textFill.b
        );
        textAlign(CENTER, CENTER);
        textSize(this.answerButtons.textSize);
        text(
          this.doubleButtons[i].string,
          this.doubleButtons[i].x,
          this.doubleButtons[i].y
        );
        pop();
      }
    }
  }

  displaySquareAnswers() {
    if (this.squareButton.on === true) {
      for (let i = 0; i < this.squareButtons.length; i++) {
        push();
        if (
          mouseX > this.squareButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.squareButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.squareButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.squareButtons[i].y + this.answerButtons.height / 2
        ) {
          fill(
            this.answerButtons.fillHover.r,
            this.answerButtons.fillHover.g,
            this.answerButtons.fillHover.b
          );
        } else {
          fill(
            this.answerButtons.fill.r,
            this.answerButtons.fill.g,
            this.answerButtons.fill.b
          );
        }
        rectMode(CENTER);
        strokeWeight(this.answerChoice.strokeWeight);
        stroke(
          this.answerChoice.strokeFill.r,
          this.answerChoice.strokeFill.g,
          this.answerChoice.strokeFill.b
        );
        rect(
          this.squareButtons[i].x,
          this.squareButtons[i].y,
          this.answerButtons.width,
          this.answerButtons.height,
          this.answerButtons.roundCorner
        );
        pop();

        push();
        //==text==
        //String
        this.squareButton.a.string = this.possibleAnswers[0];
        this.squareButton.b.string = this.possibleAnswers[1];
        this.squareButton.c.string = this.possibleAnswers[2];
        this.squareButton.d.string = this.possibleAnswers[3];
        color

        fill(
          this.answerButtons.textFill.r,
          this.answerButtons.textFill.g,
          this.answerButtons.textFill.b
        );
        textAlign(CENTER, CENTER);
        textSize(this.answerButtons.textSize);
        text(
          this.squareButtons[i].string,
          this.squareButtons[i].x,
          this.squareButtons[i].y
        );
        pop();
      }
    }
  }

  displayCashAnswer() {
    if (this.cashButton.on) {
      push()
      fill(
        this.answerButtons.fill.r,
        this.answerButtons.fill.g,
        this.answerButtons.fill.b
      );
      rectMode(CENTER);
      strokeWeight(this.answerChoice.strokeWeight);
      stroke(
        this.answerChoice.strokeFill.r,
        this.answerChoice.strokeFill.g,
        this.answerChoice.strokeFill.b
      );
      rect(
        this.cashButton.x,
        this.cashButton.y,
        this.answerButtons.width,
        this.answerButtons.height,
        this.answerButtons.roundCorner
      );
      pop();

      //text
      push();
      fill(
        this.answerButtons.textFill.r,
        this.answerButtons.textFill.g,
        this.answerButtons.textFill.b
      );
      textAlign(CENTER, CENTER);
      textSize(this.answerButtons.textSize);
      text(
        this.cashButton.string,
        this.cashButton.x,
        this.cashButton.y
      );
      pop();

      //display player input
      this.lowerCaseWinningAnswer = this.winningAnswer.toLowerCase();
      this.lowerCaseCashAnswer = this.cashButton.string.toLowerCase();
      if (this.lowerCaseCashAnswer === this.lowerCaseWinningAnswer) {
        this.won = true;
      }
    }
  }
  //==== Display Cash answer input ====

  //From Pippin's 'magic word' example : https://github.com/pippinbarr/cart253-2020/blob/master/examples/text/magic-word/js/script.js
  keyTyped() {
    if (this.cashButton.on) {
      this.cashButton.string += key
    }
  }

  keyPressed() {
    if (keyCode === BACKSPACE) {
      this.cashButton.string = ``
    }
  }

  //win coming from annyang input, redirects to checkWin
  win() {
    this.won = true;
  }

  checkWin() {
    if (this.won) {
      if (this.currentWinTimer < this.winTimer) {
        if (this.doubleButton.on) {
          this.winningButton = this.winningDoubleButton
        } else if (this.squareButton.on) {
          this.winningButton = this.winningSquareButton
        } else if (this.cashButton.on) {
          this.winningButton = this.cashButton
          this.cashButton.string = this.winningAnswer
        }
        //redraw rectangle over it with the proper color? not the most efficient coding but... If it works, it works.
        push()
        rectMode(CENTER)
        fill(
          this.answerButtons.fillHover.r,
          this.answerButtons.fillHover.g,
          this.answerButtons.fillHover.b
        );
        strokeWeight(this.answerChoice.strokeWeight);
        stroke(
          this.answerChoice.strokeFill.r,
          this.answerChoice.strokeFill.g,
          this.answerChoice.strokeFill.b
        );
        rect(
          this.winningButton.x, this.winningButton.y,
          this.answerButtons.width,
          this.answerButtons.height,
          this.answerButtons.roundCorner
        );
        pop()
        //text
        push();
        fill(
          this.answerButtons.textFill.r,
          this.answerButtons.textFill.g,
          this.answerButtons.textFill.b
        );
        textAlign(CENTER, CENTER);
        textSize(this.answerButtons.textSize);
        text(
          this.winningButton.string,
          this.winningButton.x,
          this.winningButton.y
        );
        pop();

        //had +1 to timer every 1 second
        if (frameCount % 60 === 0) {
          this.currentWinTimer++
        }
      } else if (this.currentWinTimer >= this.winTimer) {
        this.nextLvl();
      }
    }




  }

  checkLose() {
    if (this.lost) {
      if (frameCount % this.skip.flickerSpeed === 0) {
        this.skip.image = random(this.skipImgs);
      }
      push()
      imageMode(CENTER);
      image(this.skip.image, this.skip.x, this.skip.y, this.skip.size, this.skip.size);
      pop()
    }
  }

  nextLvl() {

  }




  mousePressed() {

    if (this.squareButton.on) {
      for (let i = 0; i < this.squareButtons.length; i++) {
        if (
          mouseX > this.squareButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.squareButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.squareButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.squareButtons[i].y + this.answerButtons.height / 2
        ) {
          if (
            this.squareButtons[i].x === this.winningSquareButton.x &&
            this.squareButtons[i].y === this.winningSquareButton.y
          ) {
            this.won = true;
          } else {
            this.lost = true;
          }
        }
      }
    }

    if (this.doubleButton.on) {
      for (let i = 0; i < this.doubleButtons.length; i++) {
        if (
          mouseX > this.doubleButtons[i].x - this.answerButtons.width / 2 &&
          mouseX < this.doubleButtons[i].x + this.answerButtons.width / 2 &&
          mouseY > this.doubleButtons[i].y - this.answerButtons.height / 2 &&
          mouseY < this.doubleButtons[i].y + this.answerButtons.height / 2
        ) {
          if (
            this.doubleButtons[i].x === this.winningDoubleButton.x &&
            this.doubleButtons[i].y === this.winningDoubleButton.y
          ) {
            this.won = true;
          } else {
            this.lost = true;
          }
        }
      }
    }

    if (this.answerChoice.on) {
      for (let i = 0; i < this.answerChoices.length; i++) {
        if (
          mouseX >
          this.answerChoices[i].x - this.answerChoice.width / 2 &&
          mouseX <
          this.answerChoices[i].x + this.answerChoice.width / 2 &&
          mouseY >
          this.answerChoice.y - this.answerChoice.height / 2 &&
          mouseY <
          this.answerChoice.y + this.answerChoice.height / 2
        ) {
          if (this.answerChoices[i].x === this.doubleChoiceButton.x) {
            this.doubleButton.on = true;
          } else if (this.answerChoices[i].x === this.squareChoiceButton.x) {
            this.squareButton.on = true;
          } else if (this.answerChoices[i].x === this.cashChoiceButton.x) {
            this.cashButton.on = true;
          }
          this.answerChoice.on = false;
        }
      }
    }
    if (this.lost) {
      if (
        mouseX > this.skip.x - this.skip.size / 2 &&
        mouseX < this.skip.x + this.skip.size / 2 &&
        mouseY > this.skip.y - this.skip.size / 2 &&
        mouseY < this.skip.y + this.skip.size / 2
      ) {
        this.nextLvl()
      }
    }
  }


}