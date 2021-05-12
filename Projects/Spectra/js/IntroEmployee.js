class IntroEmployee extends Dialog {
  constructor() {
    super();
    this.backgroundImg = {
      img: mallStoreFrontImg,
      size: {
        width: 1100,
        height: 600
      },
      position: {
        x: 550,
        y: height / 2
      },
    }

    //defines the title as 'welcome'
    this.dialogBox.titleBox.string = dialogsData.dialogues.introEmployee.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.introEmployee.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.introEmployee.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.introEmployee.answers[1]


    //define what will be needed in the scene
    this.dialog = {
      dialogBox: true,
      answerButtons: true,
      speaker: true,
      fadeIn: true
    }
  }

  update() {
    super.update();
  }

  toggleButtonA() {
    super.toggleButtonA();
    currentState = new ChoosingSection();
  }

  toggleButtonB() {
    super.toggleButtonB();
    currentState = new ChoosingSection();
  }
}