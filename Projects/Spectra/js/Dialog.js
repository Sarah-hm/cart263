class Dialog extends Scene {
  constructor() {
    super();

    //defines what will be needed/toggled in given scene, all defined in child objects and toggle different methods.
    this.dialog = {
        //defines if there will be a dialog box in the scene
        dialogBox: undefined,
        //defines if there will possible answer buttons in the scene
        answerButtons: undefined,
        //defines if there will be a speaker (an image of who the player is talking with) in the scene
        speaker: undefined,
        //Defines if the dialog box (and everything in it) will animate in the canvas, at the start of a communication
        fadeIn: undefined,
        //Defines if the dialog box (and everything in it) will animate out of the canvas, at the end of a communication
        fadeOut: undefined
      },

      this.dialogBox = {
        closing: false,
        closed: false,
        // ===== title box =====
        titleBox: {
          string: undefined,
          font: alienEncounterFont,
          textSize: 30,
          rectMode: CORNER,
          size: {
            width: 300,
            height: 50
          },
          cornerRoundness: 10,
          position: {
            x: width / 10,
            y: height + 50
          },
          textOffset: {
            x: 30,
            y: 37
          },
          textPosition: {
            x: undefined,
            y: undefined
          },
          landingPosition: {
            x: width / 10,
            y: height / 3 * 2
          },
          exitPosition: {
            x: width / 10,
            y: height + 50
          },
          backgroundFill: {
            r: 191,
            g: 225,
            b: 229
          },
          textFill: {
            r: 230,
            g: 36,
            b: 133
          },
          slideInSpeed: -5,
          slideOutSpeed: 10,
          easing: 0.5,
        },
        // ===== text box =====
        textBox: {
          fullTextDisplayed: false,
          string: undefined,
          font: lcdFont,
          textSize: 14,
          rectMode: CENTER,
          size: {
            width: width - 200,
            height: 150
          },
          cornerRoundness: 10,
          position: {
            x: width / 2,
            y: height + 150,
          },
          textOffset: {
            x: -width / 2.8,
            y: -40,
            x2: width / 5,
            y2: 100
          },
          textPosition: {
            x: undefined,
            y: undefined,
            x2: undefined,
            y2: undefined
          },
          landingPosition: {
            x: width / 2,
            y: height / 7 * 6
          },
          exitPosition: {
            x: width / 2,
            y: height + 150
          },
          backgroundFill: {
            r: 143,
            g: 140,
            b: 243
          },
          textFill: {
            r: 0,
            g: 0,
            b: 0
          },
          slideInSpeed: -5,
          slideOutSpeed: 5,
          easing: 0.5,
        },
        // ===== Speaker =====
        speaker: {
          img: employeeImg,
          imageMode: CENTER,
          size: {
            width: 240,
            height: 450
          },
          position: {
            x: width + 150,
            y: height / 3 * 2
          },
          landingPosition: {
            x: width / 4 * 3.3,
            y: height / 3 * 2
          },
          slideInSpeed: -5,
          slideOutSpeed: 10
        },

        // ===== Buttons and answers variables =====
        answerButton: {
          rectMode: CENTER,
          textSize: 14,
          font: lcdFont,
          strokeWeight: 8,
          cornerRoundness: 10,
          size: {
            width: width / 3.2,
            height: height / 15
          },
          position: {
            //x defined under specific answer a or b
            y: height / 10 * 9.5
          },
          exitPosition: {
            //xdefined under specific answer a or b (always the same)
            y: height + 180
          },
          fill: {
            r: 230,
            g: 36,
            b: 133
          },
          strokeFill: {
            r: 143,
            g: 140,
            b: 243
          },
          hoverFill: {
            r: 59,
            g: 205,
            b: 204
          },
          textFill: {
            r: 0,
            g: 0,
            b: 0
          },
          a: {
            x: width / 3,
            //string defined in child class
            string: undefined,
            toggle: false
          },
          b: {
            x: width / 3 * 2,
            //string defined in child class
            string: undefined,
            toggle: false
          }
        }
      }
    //Put all answer Choices (button a and button b) in an array to display in for() loop
    this.answerChoices = [this.dialogBox.answerButton.a, this.dialogBox.answerButton.b]


    //brokenness of the dialog
    this.brokenness = {
      employeeFilter: { //filter values to display defined in corresponding level of brokenness below
        on: false, //defines if a filter is already being applied
        triggerThreshold: undefined, //how many chance (on 1) of having employee filter be true;
        timeApplied: undefined, //how many milliseconds employee filter will be true;
        filterChangeInterval: undefined // how many milliseconds before changing to new filter when employee filter is true;
      },
      //Define all values based on lvl of 'brokenness'
      lvl1: {
        on: false, //Defined to true in the corresponding microaggression dialog (toggled from the ChangingRoom.js brokenness level)
        employeeFilter: {
          triggerThreshold: 0.01,
          timeApplied: 300,
          filterChangeInterval: 300
        }
      },
      lvl2: {
        on: false, //Defined to true in the corresponding microaggression dialog (toggled from the ChangingRoom.js brokenness level)
        employeeFilter: {
          triggerThreshold: 0.03,
          timeApplied: 500,
          filterChangeInterval: 475
        }
      },
      lvl3: {
        on: false, //Defined to true in the corresponding microaggression dialog (toggled from the ChangingRoom.js brokenness level)
        employeeFilter: {
          triggerThreshold: 0.1,
          timeApplied: 500,
          filterChangeInterval: 450
        }
      },
      lvl4: {
        on: false, //Defined to true in the corresponding microaggression dialog (toggled from the ChangingRoom.js brokenness level)
        employeeFilter: {
          triggerThreshold: 0.4,
          timeApplied: 500,
          filterChangeInterval: 400
        }
      },
      lvl5: {
        on: false, //Defined to true in the corresponding microaggression dialog (toggled from the ChangingRoom.js brokenness level)
        employeeFilter: {
          triggerThreshold: 0.8,
          timeApplied: 600,
          filterChangeInterval: 350
        }
      },
    }

    //employee filter images
    this.employeeImgFilters = [employeeFilterOriginalImg, employeeFilterNeonImg, employeeFilterInvertedImg];

    //Dumpster

    this.typewriter = {
      fullText: ``,
      displayText: ``,
      nextChar: 0,
      speed: 50,
      interval: undefined,
    }
  }

  update() {
    super.update();
    this.setSceneParameters();
    this.setBackgroundImg();
    this.fadeInDialogBox();
    this.fadeOutDialog();
    this.displaySpeaker();
    this.displayDialogBox();
    this.displayAnswerButtons();
  }

  setSceneParameters() {

    //If the scene parameters aren't already set, set them (prevents from not being able to fade out)
    if (!this.dialogParametersSet) {
      //if this scene those have a fade-in animation, set the position the landing position from the start
      if (!this.scene.fadeIn && !this.dialogBox.closing) {
        this.dialogBox.textBox.position.x = this.dialogBox.textBox.landingPosition.x;
        this.dialogBox.textBox.position.y = this.dialogBox.textBox.landingPosition.y;

        this.dialogBox.titleBox.position.x = this.dialogBox.titleBox.landingPosition.x;
        this.dialogBox.titleBox.position.y = this.dialogBox.titleBox.landingPosition.y;
      }
    }
  }

  setBackgroundImg() {
    if (this.scene.background) {
      push();
      imageMode(CENTER);
      image(this.backgroundImg.img, this.backgroundImg.position.x, this.backgroundImg.position.y, this.backgroundImg.size.width, this.backgroundImg.size.height);
      pop();
    }
  }

  fadeInDialogBox() {
    //Only process if the fade In dialog parameter is toggled in the child class
    if (this.scene.fadeIn) {
      //If the y position of the title box is not = to its landing position, make it go up by slideInSpeed/frame
      if (this.dialogBox.titleBox.position.y > this.dialogBox.titleBox.landingPosition.y) {
        this.dialogBox.titleBox.position.y += this.dialogBox.titleBox.slideInSpeed
      }

      //If the y position of the textBox box is not = to its landing position, make it go up by slideInSpeed/frame
      if (this.dialogBox.textBox.position.y > this.dialogBox.textBox.landingPosition.y) {
        this.dialogBox.textBox.position.y += this.dialogBox.textBox.slideInSpeed
      }
    }
  }


  fadeOutDialog() {
    if (this.scene.fadeOut) {
      if (this.dialogBox.closing) {
        //If title box is not completely off the canvas (at exit position), it should continue to go down
        if (this.dialogBox.titleBox.position.y <= this.dialogBox.titleBox.exitPosition.y) {
          this.dialogBox.titleBox.position.y += this.dialogBox.titleBox.slideOutSpeed;
          this.dialogBox.textBox.position.y += this.dialogBox.titleBox.slideOutSpeed;
          this.dialogBox.answerButton.position.y += this.dialogBox.titleBox.slideOutSpeed;
        } else if (this.dialogBox.titleBox.position.y >= this.dialogBox.titleBox.exitPosition.y) {
          this.dialogBox.closed = true; // Set dialog Box as closed to toggle either button a or b;
        }
      }

      // if all dialog (title, text, buttons) are off the canvas, the reaction of the button (a or b) should be toggled
      if (this.dialogBox.closed) {
        this.dialogBox.closing = false; //resets closing to false to be safe
        //button a toggle
        if (this.dialogBox.answerButton.a.toggle === true) {
          this.toggleButtonA();
        }
        //button b toggle
        else if (this.dialogBox.answerButton.b.toggle === true) {
          this.toggleButtonB();
        }
      }
    }
  }

  displayDialogBox() {
    if (this.scene.dialogBox) {
      //calculate position of title string based on position of title box and text offset
      this.dialogBox.titleBox.textPosition.x = this.dialogBox.titleBox.position.x + this.dialogBox.titleBox.textOffset.x;
      this.dialogBox.titleBox.textPosition.y = this.dialogBox.titleBox.position.y + this.dialogBox.titleBox.textOffset.y;

      //calculate position of text string based on position of title box and text offset
      this.dialogBox.textBox.textPosition.x = this.dialogBox.textBox.position.x + this.dialogBox.textBox.textOffset.x;
      this.dialogBox.textBox.textPosition.y = this.dialogBox.textBox.position.y + this.dialogBox.textBox.textOffset.y;
      this.dialogBox.textBox.textPosition.x2 = this.dialogBox.textBox.position.x + this.dialogBox.textBox.textOffset.x2;
      this.dialogBox.textBox.textPosition.y2 = this.dialogBox.textBox.position.y + this.dialogBox.textBox.textOffset.y2;

      //display text box
      push()
      rectMode(this.dialogBox.textBox.rectMode);
      noStroke();
      fill(this.dialogBox.textBox.backgroundFill.r, this.dialogBox.textBox.backgroundFill.g, this.dialogBox.textBox.backgroundFill.b);
      rect(this.dialogBox.textBox.position.x, this.dialogBox.textBox.position.y, this.dialogBox.textBox.size.width, this.dialogBox.textBox.size.height, this.dialogBox.textBox.cornerRoundness)
      pop()

      //display title box
      push()
      rectMode(this.dialogBox.titleBox.rectMode);
      noStroke();
      fill(this.dialogBox.titleBox.backgroundFill.r, this.dialogBox.titleBox.backgroundFill.g, this.dialogBox.titleBox.backgroundFill.b);
      rect(this.dialogBox.titleBox.position.x, this.dialogBox.titleBox.position.y, this.dialogBox.titleBox.size.width, this.dialogBox.titleBox.size.height, this.dialogBox.titleBox.cornerRoundness)
      pop()

      //display title
      push()
      textAlign(LEFT, BOTTOM);
      textFont(this.dialogBox.titleBox.font);
      textSize(this.dialogBox.titleBox.textSize)
      fill(this.dialogBox.titleBox.textFill.r, this.dialogBox.titleBox.textFill.g, this.dialogBox.titleBox.textFill.b);
      text(this.dialogBox.titleBox.string, this.dialogBox.titleBox.textPosition.x, this.dialogBox.titleBox.textPosition.y);
      pop()

      //display dialog Text in a type-writer effet
      this.displayDialogText();
    }
  }


  displayDialogText() {
    //If the box is not on its landing position, don't show the text yet
    if (this.dialogBox.textBox.position.y <= this.dialogBox.textBox.landingPosition.y) {
      //typewriter effect to be added, when it will be add, the fullTextDisplayed will be turned off until typewriter is completed
      this.dialogBox.textBox.fullTextDisplayed = true;
      //display text
      push();
      textAlign(LEFT);
      textFont(this.dialogBox.textBox.font);
      textSize(this.dialogBox.textBox.textSize)
      fill(this.dialogBox.textBox.textFill.r, this.dialogBox.textBox.textFill.g, this.dialogBox.textBox.textFill.b);
      text(this.dialogBox.textBox.string, this.dialogBox.textBox.textPosition.x, this.dialogBox.textBox.textPosition.y, this.dialogBox.textBox.textPosition.x2, this.dialogBox.textBox.textPosition.y2);
      pop();
    }
  }

  displaySpeaker() {

    if (this.scene.speaker) {
      // will process if fade in dialog has been toggled in child class
      if (this.scene.fadeIn) {
        //will process if the y position of textBox is not as high as its landing position (smaller or equal to)
        if (this.dialogBox.textBox.position.y <= this.dialogBox.textBox.landingPosition.y)
          //position changes until landing position is obtained;
          if (this.dialogBox.speaker.position.x > this.dialogBox.speaker.landingPosition.x) {
            this.dialogBox.speaker.position.x += this.dialogBox.speaker.slideInSpeed
          }
      }
      //If fadeIn is not toggled and that dialogBox isn't fading out (closing), make the speaker position the same as landing Position.
      else if (!this.scene.fadeIn && !this.dialogBox.closing) {
        this.dialogBox.speaker.position.x = this.dialogBox.speaker.landingPosition.x;
        this.dialogBox.speaker.position.y = this.dialogBox.speaker.landingPosition.y;
      }

      //If fadeOut was toggled in child class, and that dialog Box should be closing (true), make the speaker img go right
      if (this.scene.fadeOut && this.dialogBox.closing) {
        this.dialogBox.speaker.position.x += this.dialogBox.speaker.slideOutSpeed;
      }

      //===Brokenness filters ===
      //Define, if game is brokenness, the values of filter (flickering of images) applied

      if (this.brokenness.lvl1.on) //Only process if brokenness lvl 1 is true (if microaggression 1 was played);
      {
        //set employee filter's values to the corresponding level of brokenness' values;
        this.brokenness.employeeFilter.triggerThreshold = this.brokenness.lvl1.employeeFilter.triggerThreshold;
        this.brokenness.employeeFilter.timeApplied = this.brokenness.lvl1.employeeFilter.timeApplied;
        this.brokenness.employeeFilter.filterChangeInterval = this.brokenness.lvl1.employeeFilter.filterChangeInterval;
      }
      if (this.brokenness.lvl2.on) //overwrite lvl1 brokenness value if brokenness lvl2 is true;
      {
        this.brokenness.employeeFilter.triggerThreshold = this.brokenness.lvl2.employeeFilter.triggerThreshold;
        this.brokenness.employeeFilter.timeApplied = this.brokenness.lvl2.employeeFilter.timeApplied;
        this.brokenness.employeeFilter.filterChangeInterval = this.brokenness.lvl2.employeeFilter.filterChangeInterval
      }
      if (this.brokenness.lvl3.on) //overwrite lvl2 brokenness value if brokenness lvl3 is true;
      {
        this.brokenness.employeeFilter.triggerThreshold = this.brokenness.lvl3.employeeFilter.triggerThreshold;
        this.brokenness.employeeFilter.timeApplied = this.brokenness.lvl3.employeeFilter.timeApplied;
        this.brokenness.employeeFilter.filterChangeInterval = this.brokenness.lvl3.employeeFilter.filterChangeInterval
      }
      if (this.brokenness.lvl4.on) //overwrite lvl3 brokenness value if brokenness lvl2 is true;
      {
        this.brokenness.employeeFilter.triggerThreshold = this.brokenness.lvl4.employeeFilter.triggerThreshold;
        this.brokenness.employeeFilter.timeApplied = this.brokenness.lvl4.employeeFilter.timeApplied;
        this.brokenness.employeeFilter.filterChangeInterval = this.brokenness.lvl4.employeeFilter.filterChangeInterval;
      }

      if (this.brokenness.lvl5.on) //overwrite lvl4 brokenness value if brokenness lvl2 is true;
      {
        this.brokenness.employeeFilter.triggerThreshold = this.brokenness.lvl5.employeeFilter.triggerThreshold;
        this.brokenness.employeeFilter.timeApplied = this.brokenness.lvl5.employeeFilter.timeApplied;
        this.brokenness.employeeFilter.filterChangeInterval = this.brokenness.lvl5.employeeFilter.filterChangeInterval
      }

      let changeEmployeeFilter = random(); // let changeEmployeeFilter be a random number between 0 and 1
      if (changeEmployeeFilter < this.brokenness.employeeFilter.triggerThreshold) { //Process only if the random changeFilter is smaller than the established threshold
        if (!this.brokenness.employeeFilter.on) {
          this.brokenness.employeeFilter.on = true //turn filter on and setTimeout to turn it off in timeApplied amount of milliseconds
          setTimeout(() => {
            this.brokenness.employeeFilter.on = false
          }, this.brokenness.employeeFilter.timeApplied)
        }
      }

      if (this.brokenness.employeeFilter.on) //only process if employee Filter is true (if it has been toggled by the above if statement)
      {
        //Every filterChangeInterval amount of seconds, change the speaker image for a random filter of those available in the array (original image, neon, inverted)
        setTimeout(() => {
          this.dialogBox.speaker.img = random(this.employeeImgFilters)
        }, this.brokenness.employeeFilter.filterChangeInterval)
      }
      //else, reset the speaker image to its default image
      else {
        this.dialogBox.speaker.img = employeeImg
      }

      // display the speaker img in the position defined above (with fade in or not);
      push();
      imageMode(this.dialogBox.speaker.imageMode);
      image(
        this.dialogBox.speaker.img,
        this.dialogBox.speaker.position.x,
        this.dialogBox.speaker.position.y,
        this.dialogBox.speaker.size.width,
        this.dialogBox.speaker.size.height
      );
      pop();
    }



  }


  displayAnswerButtons() {
    if (this.scene.answerButtons) {
      //check if text is displayed. If so, display answer buttons
      if (this.dialogBox.textBox.fullTextDisplayed === true) {
        //(Taken from my project 1)
        for (let i = 0; i < this.answerChoices.length; i++) {
          //button (color fill changes if hovering over with mouse)
          push();
          if (
            mouseX >
            this.answerChoices[i].x - this.dialogBox.answerButton.size.width / 2 &&
            mouseX <
            this.answerChoices[i].x + this.dialogBox.answerButton.size.width / 2 &&
            mouseY >
            this.dialogBox.answerButton.position.y - this.dialogBox.answerButton.size.height / 2 &&
            mouseY <
            this.dialogBox.answerButton.position.y + this.dialogBox.answerButton.size.height / 2
          ) {
            fill(
              this.dialogBox.answerButton.hoverFill.r,
              this.dialogBox.answerButton.hoverFill.g,
              this.dialogBox.answerButton.hoverFill.b
            );
          } else {
            fill(
              this.dialogBox.answerButton.fill.r,
              this.dialogBox.answerButton.fill.g,
              this.dialogBox.answerButton.fill.b
            );
          }
          rectMode(CENTER);
          strokeWeight(this.dialogBox.answerButton.strokeWeight);
          stroke(
            this.dialogBox.answerButton.strokeFill.r,
            this.dialogBox.answerButton.strokeFill.g,
            this.dialogBox.answerButton.strokeFill.b
          );
          rect(
            this.answerChoices[i].x,
            this.dialogBox.answerButton.position.y,
            this.dialogBox.answerButton.size.width,
            this.dialogBox.answerButton.size.height,
            this.dialogBox.answerButton.cornerRoundness
          );
          pop();
          //text
          push();
          fill(
            this.dialogBox.answerButton.textFill.r,
            this.dialogBox.answerButton.textFill.g,
            this.dialogBox.answerButton.textFill.b
          );
          textAlign(CENTER, CENTER);
          textSize(this.dialogBox.answerButton.textSize);
          textFont(this.dialogBox.answerButton.font);
          text(
            this.answerChoices[i].string,
            this.answerChoices[i].x,
            this.dialogBox.answerButton.position.y
          );
          pop();
        }
      }
    }
  }



  toggleButtonA() {}

  toggleButtonB() {}

  mousePressed() {
    //if pressed button a, give function to toggle to reaction (new scene)
    if (mouseX > this.dialogBox.answerButton.a.x - this.dialogBox.answerButton.size.width / 2 &&
      mouseX < this.dialogBox.answerButton.a.x + this.dialogBox.answerButton.size.width / 2 &&
      mouseY >
      this.dialogBox.answerButton.position.y - this.dialogBox.answerButton.size.height / 2 &&
      mouseY <
      this.dialogBox.answerButton.position.y + this.dialogBox.answerButton.size.height / 2) {
      this.dialogBox.answerButton.a.toggle = true; //toggles the reaction defined in child class's toggleButtonA method
      this.dialogBox.closing = true; //If fadeout was toggled for this scene, the fade out method will start processing
      //If fade out is not toggle for this scene, go straight to toggling button a's reaction in child's class
      if (!this.scene.fadeOut) {
        this.toggleButtonA();
      }

    }
    //Otherwise, if pressed button b, give function to toggle to new reaction (new scene)
    else if (mouseX > this.dialogBox.answerButton.b.x - this.dialogBox.answerButton.size.width / 2 &&
      mouseX < this.dialogBox.answerButton.b.x + this.dialogBox.answerButton.size.width / 2 &&
      mouseY >
      this.dialogBox.answerButton.position.y - this.dialogBox.answerButton.size.height / 2 &&
      mouseY <
      this.dialogBox.answerButton.position.y + this.dialogBox.answerButton.size.height / 2) {
      this.dialogBox.answerButton.b.toggle = true; //toggles the reaction defined in child class's toggleButtonB method
      this.dialogBox.closing = true; //If fadeout was toggled for this scene, the fade out method will start processing
      //If fade out is not toggle for this scene, go straight to toggling button b's reaction in child's class
      if (!this.scene.fadeOut) {
        this.toggleButtonB();
      }
    }
  }


}