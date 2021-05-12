class IntroDialog extends Dialog {
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
    this.dialogBox.titleBox.string = dialogsData.dialogues.introDialogue.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.introDialogue.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.introDialogue.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.introDialogue.answers[1]


    //define what will be needed in the scene
    this.dialog = {
      dialogBox: true,
      answerButtons: true,
      speaker: true,
      fadeIn: true,
      fadeOut: true
    }

  }

  update() {
    super.update();
  }

  toggleButtonA() {
    super.toggleButtonA();
    currentState = new TransitionInsideStore();
  }

  toggleButtonB() {
    super.toggleButtonB();
    currentState = new TransitionInsideStore();
  }
}