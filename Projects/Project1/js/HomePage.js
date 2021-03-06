class Homepage {

  constructor() {
    // ==== title image ====
    //title image that is displayed;
    this.titleImg = titleImg0;

    //title Images to randomly choose from
    this.titleImg0 = titleImg0;
    this.titleImg1 = titleImg1;
    this.titleImg2 = titleImg2;

    //Position and Size of title img
    this.titleImgX = width / 2
    this.titleImgY = height / 2
    this.titleWidth = 900;
    this.titleHeight = 600;

    // ==== Start button ====
    this.startImg = startImg0;

    //start Images to randomly choose from
    this.startImg0 = startImg0;
    this.startImg1 = startImg1;
    this.startImg2 = startImg2;

    //Position and Size of start button/image
    this.startButtonWidth = 170;
    this.startButtonHeight = 250;
    this.startButtonX = width - this.startButtonWidth
    this.startButtonY = height - this.startButtonHeight

    //Timing appearance of start button
    this.startButtonCurrentTimer = 0;
    this.startButtonAppearanceTime = 1;

    //Flickering speed between imgs (title + start button)
    this.titleFlickerSpeed = 10;

    //==== Theme Song ====
    this.themeSong = themeSong
    this.themeSongHasPlayed = false;

    //==== Raymond Holt pictures ====
    //Pointing Raymond Holt = RHImg0;
    this.RHImg0 = titleRHImg0;
    this.RHImg0Width = 214;
    this.RHImg0Height = 403;
    this.RHImg0PositionX = width / 5 * 2.6;
    this.RHImg0PositionY = height + this.RHImg0Height;
    //RHImg0 movement
    this.RHImg0FinalPositionX = width / 5 * 2.6;
    this.RHImg0FinalPositionY = height - this.RHImg0Height / 2 + 10;
    this.RHImg0velocity = 4;

    //Two left pictures = RHImg1;
    this.RHImg1 = titleRHImg1;
    this.RHImg1Width = 442;
    this.RHImg1Height = 351;
    this.RHImg1PositionX = 0 - this.RHImg1Width / 2;
    this.RHImg1PositionY = height - this.RHImg1Height / 2 + 30;
    //RHImg1 movement
    this.RHImg1FinalPositionX = width / 5 * 1.5;
    this.RHImg1FinalPositionY = height - this.RHImg1Height / 2 + 30;
    this.RHImg1velocity = 5;

    //t-shirt wearing Raymond = RHImg2;
    this.RHImg2 = titleRHImg2;
    this.RHImg2Width = 310;
    this.RHImg2Height = 376;
    this.RHImg2PositionX = width + this.RHImg2Width / 2;
    this.RHImg2PositionY = height - this.RHImg2Height / 2 + 20;
    //RHImg2 movement
    this.RHImg2FinalPositionX = width / 5 * 3.3;
    this.RHImg2FinalPositionY = height - this.RHImg2Height / 2 + 20;
    this.RHImg2velocity = -5;

    //==== Instructions =====
    //Timed appearance
    this.instructionsCurrentTimer = 0;
    this.instructionsAppearanceTime = 2;

    //Instruction BUTTON
    this.instructionsString = `Instructions`;
    this.instructionsPositionX = width / 7 * 6;
    this.instructionsPositionY = height / 12;
    this.instructionsTextSize = 32;
    this.instructionsFill = {
      r: 248,
      g: 232,
      b: 21
    }


    //instructions button paraments (width, height, corner position when closed, fill color)
    this.instructionsButtonWidth = 200;
    this.instructionsButtonHeight = 50;
    this.instructionsButtonUpperCornerX = this.instructionsPositionX + this.instructionsButtonWidth / 2;
    this.instructionsButtonUpperCornerY = this.instructionsPositionY - this.instructionsButtonHeight / 2;
    this.instructionsButtonBottomCornerX = this.instructionsPositionX - this.instructionsButtonWidth / 2;
    this.instructionsButtonBottomCornerY = this.instructionsPositionY + this.instructionsButtonHeight / 2;
    this.instructionsButtonRoundedCorner = 20;
    this.instructionsButtonColor = {
      r: 191,
      g: 88,
      b: 156,
      a: 0
    }
    this.buttonModifiedAlphaValue = 50;
    this.buttonMaximumAlpha = 255;
    this.buttonMinimumAlpha = 0;


    //Opening instructions parameters
    this.instructionsButtonOpened = false;
    this.instructionsButtonResizingValue = 50;
    this.instructionsButtonMaximumBottomCornerX = 50;
    this.instructionsButtonMaximumBottomCornerY = height - 50;
    this.instructionsButtonMinimumBottomCornerX = this.instructionsPositionX - this.instructionsButtonWidth / 2;
    this.instructionsButtonMinimumBottomCornerY = this.instructionsPositionY + this.instructionsButtonHeight / 2;

    //============Full instructions (when 'instructions' button is open)=========
    this.fullInstructions = {
      //upper string parameters :
      upperString: {
        string: `Can you prove you are Raymond Holt?
  Fill in these iconic Raymond Holt quotes either by selecting, writing, or saying the
  answers out loud.
  Careful, it might not recognize your voice if you are being too expressive.
  After all, you're Raymond Holt.
  Right?`,
        x: width / 2,
        y: height / 5
      },

      //lower string parameters:
      lowerString: {
        string: `Select whether you would like two, four or no possible answers to choose from on each level.
  'double' gives you 2 possibilities to click or say out loud;
  'square' gives you 4 possibilities to click or say out loud;
  'cash' gives you the possibility of writing the answer down or saying it out loud

  Lose once, and you will be able to skip the level.
  There is no point system because we don't need to bring that kind of negativity in 2021.`,
        x: width / 2,
        y: height / 5 * 4
      },

      //general parameters for either strings
      textSize: 20,
      textFill: {
        r: 193,
        g: 225,
        b: 210,
      },
      //parameters to display possible answer set ups in full instructions
      answerChoices: {
        image: {
          file: answerChoicesImg,
          scale: 0.3
        },
        x: width / 2,
        y: height / 2,
        rect: {
          width: 600,
          height: 150,
          roundCorner: 20,
          fill: {
            r: 59,
            g: 61,
            b: 126
          }
        }
      }
    }

    //===== unmute button =====
    this.unmuteButtonOn = true;
    this.unmuteButtonX = width / 15;
    this.unmuteButtonY = height / 15;
    this.unmuteButtonWidth = 100;
    this.unmuteButtonHeight = 50;
    this.unmuteButtonString = `unmute`;
    this.unmuteTextSize = 20;
    this.unmuteStringFill = {
      r: 59,
      g: 61,
      b: 126
    }
    this.unmuteButtonFill = {
      r: 248,
      g: 232,
      b: 21
    }


    ////==== Generalbackground color ====
    this.background = {
      r: 59,
      g: 61,
      b: 126
    }
  }

  // ========== update runs every frame when this is currentState ===========
  update() {
    this.setBackground();
    this.displayUnmuteButton();
    this.displayBackRaymondHolt();
    this.displayTitle();
    this.displayRaymondHolt();
    this.displayStartButton();
    this.displayInstructions();
    this.instructionsButtonResize()
  }

  //set simple colored background
  setBackground() {
    background(this.background.r, this.background.g, this.background.b);
  }

  //Display Unmute button on the top left corner
  displayUnmuteButton() {
    //displays only if unmute button if on (turns off once you mousePressed on it)
    if (this.unmuteButtonOn) {
      //display unmute  button
      push()
      rectMode(CENTER);
      noStroke();
      fill(this.unmuteButtonFill.r, this.unmuteButtonFill.g, this.unmuteButtonFill.b)
      //make the round corner exactly like the instructions one for ease of (possible)modification
      rect(this.unmuteButtonX, this.unmuteButtonY, this.unmuteButtonWidth, this.unmuteButtonHeight, this.instructionsButtonRoundedCorner)
      pop()

      //displays unmute string
      push()
      textAlign(CENTER, CENTER);
      textSize(this.unmuteTextSize);
      fill(this.unmuteStringFill.r, this.unmuteStringFill.g, this.unmuteStringFill.b);
      text(this.unmuteButtonString, this.unmuteButtonX, this.unmuteButtonY);
      pop()
    }
  }

  //Displays only the image on Raymond Holt that is behind the main title (t-shirt Raymond)
  displayBackRaymondHolt() {
    ////RHImg2 (t-shirt Raymond, right)
    //move RHImg2 to the left until it hits its final position X
    if (this.RHImg2PositionX > this.RHImg2FinalPositionX) {
      this.RHImg2PositionX += this.RHImg2velocity
    }
    //Display RHImg2
    push()
    imageMode(CENTER);
    image(this.RHImg2, this.RHImg2PositionX, this.RHImg2PositionY, this.RHImg2Width, this.RHImg2Height)
    pop()

  }

  //Displays flickering title between backgroud and foreground images of Raymond Holt
  displayTitle() {
    //Changes between three images of title every FlickerSpeed
    if (frameCount % this.titleFlickerSpeed === 0) {
      let titleImages = [this.titleImg0, this.titleImg1, this.titleImg2]
      this.titleImg = random(titleImages);
    }
    //display title image
    push()
    imageMode(CENTER);
    image(this.titleImg, this.titleImgX, this.titleImgY, this.titleImgWidth, this.titleImgHeight);
    pop()
  }

  //Display foreground Raymond Holt images
  displayRaymondHolt() {
    ////RHImg1 (two left pictures)
    //move RHImg1 to the right until it hits its final position X
    if (this.RHImg1PositionX < this.RHImg1FinalPositionX) {
      this.RHImg1PositionX += this.RHImg1velocity
    }
    //Display RHImg1
    push()
    imageMode(CENTER);
    image(this.RHImg1, this.RHImg1PositionX, this.RHImg1PositionY, this.RHImg1Width, this.RHImg1Height)
    pop()

    ////RHImg0 (pointing Raymond)
    //move RHImg0 to the top until it hits its final position Y
    if (this.RHImg0PositionY > this.RHImg0FinalPositionY) {
      this.RHImg0PositionY -= this.RHImg0velocity
    }
    //Display RHImg0
    push()
    imageMode(CENTER);
    image(this.RHImg0, this.RHImg0PositionX, this.RHImg0PositionY, this.RHImg0Width, this.RHImg0Height)
    pop()
  }

  //Display flickering start button
  displayStartButton() {
    //Start button appears after the timer is completed
    if (this.startButtonCurrentTimer < this.startButtonAppearanceTime && frameCount % 60 === 0) {
      this.startButtonCurrentTimer++
    }
    //changes between thre possible images everything FlickerSpeed
    if (this.startButtonCurrentTimer >= this.startButtonAppearanceTime) {
      if (frameCount % this.titleFlickerSpeed === 0) {
        let startImages = [this.startImg0, this.startImg1, this.startImg2]
        this.startImg = random(startImages);
      }
      push()
      imageMode(CORNER);
      image(this.startImg, this.startButtonX, this.startButtonY, this.startButtonWidth, this.startButtonHeight);
      pop()
    }
  }

  //display instructions button after the timer is up.
  displayInstructions() {
    //wait a few seconds for the instruction button to appear
    if (this.instructionsCurrentTimer < this.instructionsAppearanceTime && frameCount % 60 === 0) {
      this.instructionsCurrentTimer++
    }

    //when the timer has passed, instructions button will appear
    if (this.instructionsCurrentTimer >= this.instructionsAppearanceTime) {

      ////button
      //If you hover over the instructions, the background button will appear gradually, otherwise it will disappear gradually (max alpha of 255, minimum of 0)
      if (mouseX > this.instructionsPositionX - this.instructionsButtonWidth / 2 &&
        mouseX < this.instructionsPositionX + this.instructionsButtonWidth / 2 &&
        mouseY > this.instructionsPositionY - this.instructionsButtonHeight / 2 &&
        mouseY < this.instructionsPositionY + this.instructionsButtonHeight / 2) {
        if (this.instructionsButtonColor.a < this.buttonMaximumAlpha) {
          this.instructionsButtonColor.a += this.buttonModifiedAlphaValue
        }
      } else {
        if (!this.instructionsButtonOpened) {
          if (this.instructionsButtonColor.a > this.buttonMinimumAlpha) {
            this.instructionsButtonColor.a -= this.buttonModifiedAlphaValue
          }
        }
      }
      //Display button
      push();
      rectMode(CORNERS);
      noStroke();
      fill(this.instructionsButtonColor.r, this.instructionsButtonColor.g, this.instructionsButtonColor.b, this.instructionsButtonColor.a);
      rect(this.instructionsButtonUpperCornerX, this.instructionsButtonUpperCornerY, this.instructionsButtonBottomCornerX, this.instructionsButtonBottomCornerY, this.instructionsButtonRoundedCorner)
      pop();

      ////string
      //display the string
      push();
      // textFont(this.instructionsFont);
      fill(this.instructionsFill.r, this.instructionsFill.g, this.instructionsFill.b);
      textAlign(CENTER, CENTER);
      textSize(this.instructionsTextSize);
      text(this.instructionsString, this.instructionsPositionX, this.instructionsPositionY)
      pop();
    }
  }

  //Instruction button will resize upon clicking on it until it hits in maximum/minimum Bottom Corner (x,y),
  instructionsButtonResize() {
    if (this.instructionsButtonOpened) {
      //If instructions Button is opened, it will resize until it reaches the Maximum value chosen
      if (this.instructionsButtonBottomCornerX > this.instructionsButtonMaximumBottomCornerX)
        this.instructionsButtonBottomCornerX -= this.instructionsButtonResizingValue;
      if (this.instructionsButtonBottomCornerY < this.instructionsButtonMaximumBottomCornerY) {
        this.instructionsButtonBottomCornerY += this.instructionsButtonResizingValue;
      }

      //Make instructions appear when the instruction box gets to its maximum size
      if (this.instructionsButtonBottomCornerX <= this.instructionsButtonMaximumBottomCornerX && this.instructionsButtonBottomCornerY >= this.instructionsButtonMaximumBottomCornerY) {
        this.displayFullInstructions()
      }
      //Change 'instructions' for a X to close
      this.instructionsString = `              X`;
    }
    //if instructions Button is not opened, and will resize until it hits its minimum resize value
    else if (!this.instructionsButtonOpened) {
      if (this.instructionsButtonBottomCornerX < this.instructionsButtonMinimumBottomCornerX) {
        this.instructionsButtonBottomCornerX += this.instructionsButtonResizingValue;
      }
      if (this.instructionsButtonBottomCornerY > this.instructionsButtonMinimumBottomCornerY) {
        this.instructionsButtonBottomCornerY -= this.instructionsButtonResizingValue
      }
      this.instructionsString = `Instructions`
    }
  }

  //Is only displayed if the instructions' button has reached its maximum size
  displayFullInstructions() {
    //strings
    push()
    textAlign(CENTER, CENTER);
    fill(this.fullInstructions.textFill.r, this.fullInstructions.textFill.g, this.fullInstructions.textFill.b);
    textSize(this.fullInstructions.textSize)
    text(this.fullInstructions.upperString.string, this.fullInstructions.upperString.x, this.fullInstructions.upperString.y);
    text(this.fullInstructions.lowerString.string, this.fullInstructions.lowerString.x, this.fullInstructions.lowerString.y)
    pop()

    //answer choices example
    push()
    //background rectangle
    noStroke();
    rectMode(CENTER);
    imageMode(CENTER);
    fill(this.fullInstructions.answerChoices.rect.fill.r, this.fullInstructions.answerChoices.rect.fill.g, this.fullInstructions.answerChoices.rect.fill.b)
    rect(this.fullInstructions.answerChoices.x,
      this.fullInstructions.answerChoices.y,
      this.fullInstructions.answerChoices.rect.width,
      this.fullInstructions.answerChoices.rect.height,
      this.fullInstructions.answerChoices.rect.roundCorner);

    //picture of answer choices buttons
    translate(this.fullInstructions.answerChoices.x, this.fullInstructions.answerChoices.y)
    scale(this.fullInstructions.answerChoices.image.scale)
    image(this.fullInstructions.answerChoices.image.file, 0, 0)
    pop()
  }

  // ========= all events created by pressing mouse ===========
  mousePressed() {
    //Clicking on instructions will make the instructions' button expand to show all instructions
    if (
      mouseX > this.instructionsPositionX - this.instructionsButtonWidth / 2 &&
      mouseX < this.instructionsPositionX + this.instructionsButtonWidth / 2 &&
      mouseY > this.instructionsPositionY - this.instructionsButtonHeight / 2 &&
      mouseY < this.instructionsPositionY + this.instructionsButtonHeight / 2) {
      if (!this.instructionsButtonOpened) {
        this.instructionsButtonOpened = true
      } else if (this.instructionsButtonOpened) {
        this.instructionsButtonOpened = false
      }
    }
    //Clicking the unmute button will remove the unmute button + make the theme song play once
    if (
      mouseX > this.unmuteButtonX - this.unmuteButtonWidth / 2 &&
      mouseX < this.unmuteButtonX + this.unmuteButtonWidth / 2 &&
      mouseY > this.unmuteButtonY - this.unmuteButtonHeight / 2 &&
      mouseY < this.unmuteButtonY + this.unmuteButtonHeight / 2) {
      this.unmuteButtonOn = false
      if (!themeSong.isPlaying() && !this.themeSongHasPlayed) {
        this.themeSong.play();
        this.themeSongHasPlayed = true;
      };
    }
    //Clicking 'start' button will lead you to Lvl 1 if instructions are closed. Theme song will fade to 0 if still playing
    if (!this.instructionsButtonOpened) {
      if (mouseX > this.startButtonX - this.startButtonWidth &&
        mouseX < this.startButtonX + this.startButtonWidth &&
        mouseY > this.startButtonY - this.startButtonHeight &&
        mouseY < this.startButtonY + this.startButtonHeight) {
        currentState = new Lvl1;
        this.themeSong.fade(0, 2)
      }
    }

  }
}