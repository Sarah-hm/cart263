class FirstMicroAggression extends Dialog {
  constructor() {
    super();

    this.dialogBox.titleBox.string = dialogsData.dialogues.microaggression1.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.microaggression1.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.microaggression1.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.microaggression1.answers[1]


    //define what will be needed in the scene
    this.scene = {
      background: false,
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
    currentState = new intermission();
  }

  toggleButtonB() {
    super.toggleButtonB();
    currentState = new intermission();
  }
}