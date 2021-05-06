class Dialog extends Scene {
  constructor() {
    super();

    this.dialogBox = {
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
          x: 25,
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
        backgroundColor: {
          r: 191,
          g: 225,
          b: 229
        },
        textColor: {
          r: 230,
          g: 36,
          b: 133
        },
        slideInSpeed: -5,
        easing: 0.5,
      },
      textBox: {
        string: undefined,
        font: alienEncounterFont,
        rectMode: CENTER,
        size: {
          width: width - 200,
          height: 150
        },
        cornerRoundness: 10,
        position: {
          x: width / 2,
          y: height + 150
        },
        landingPosition: {
          x: width / 2,
          y: height / 7 * 6
        },
        backgroundColor: {
          r: 143,
          g: 140,
          b: 243
        },
        textColor: {
          r: 230,
          g: 36,
          b: 133
        },
        slideInSpeed: -5,
        easing: 0.5,
      }
    }
  }

  update() {
    super.update();
  }

  animateAndDisplayDialogBox() {

    //animation text box

    if (this.dialogBox.textBox.position.y > this.dialogBox.textBox.landingPosition.y) {
      this.dialogBox.textBox.position.y += this.dialogBox.textBox.slideInSpeed
    }

    //display text box
    push()
    rectMode(this.dialogBox.textBox.rectMode);
    noStroke();
    fill(this.dialogBox.textBox.backgroundColor.r, this.dialogBox.textBox.backgroundColor.g, this.dialogBox.textBox.backgroundColor.b);
    rect(this.dialogBox.textBox.position.x, this.dialogBox.textBox.position.y, this.dialogBox.textBox.size.width, this.dialogBox.textBox.size.height, this.dialogBox.textBox.cornerRoundness)
    pop()

    //animate title Box and title string

    if (this.dialogBox.titleBox.position.y > this.dialogBox.titleBox.landingPosition.y) {
      this.dialogBox.titleBox.position.y += this.dialogBox.titleBox.slideInSpeed



    }

    //display title box
    push()
    rectMode(this.dialogBox.titleBox.rectMode);
    noStroke();
    fill(this.dialogBox.titleBox.backgroundColor.r, this.dialogBox.titleBox.backgroundColor.g, this.dialogBox.titleBox.backgroundColor.b);
    rect(this.dialogBox.titleBox.position.x, this.dialogBox.titleBox.position.y, this.dialogBox.titleBox.size.width, this.dialogBox.titleBox.size.height, this.dialogBox.titleBox.cornerRoundness)
    pop()

    //display title

    push()
    this.dialogBox.titleBox.textPosition.x = this.dialogBox.titleBox.position.x + this.dialogBox.titleBox.textOffset.x;
    this.dialogBox.titleBox.textPosition.y = this.dialogBox.titleBox.position.y + this.dialogBox.titleBox.textOffset.y;
    textAlign(LEFT, BOTTOM);
    textFont(this.dialogBox.titleBox.font);
    textSize(this.dialogBox.titleBox.textSize)
    fill(this.dialogBox.titleBox.textColor.r, this.dialogBox.titleBox.textColor.g, this.dialogBox.titleBox.textColor.b);
    text(this.dialogBox.titleBox.string, this.dialogBox.titleBox.textPosition.x, this.dialogBox.titleBox.textPosition.y);
    pop()




  }

}