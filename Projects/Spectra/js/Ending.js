class Ending extends Dialog {
  constructor() {
    super();
    this.backgroundImg = {
      img: changingRoomBackgroundImg,
      size: {
        width: 800,
        height: 600,
      },
      position: {
        x: width / 2,
        y: height / 2,
      },
    }

    //defines the title as 'welcome'
    this.dialogBox.titleBox.string = dialogsData.dialogues.ending.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.ending.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.ending.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.ending.answers[1]


    //define what will be needed in the scene
    this.scene = {
      background: true,
      dialogBox: true,
      answerButtons: true,
      speaker: true,
      fadeIn: true,
      fadeOut: true
    }

    //redefine text size because answers are too long for default size
    this.dialogBox.titleBox.textSize = 15
    this.dialogBox.answerButton.size.height = height / 12.5;
  }

  update() {
    super.update();
  }

  toggleButtonA() {
    super.toggleButtonA();
    currentState = new Intro();
  }

  toggleButtonB() {
    super.toggleButtonB();
    currentState = new Intro();
  }
}