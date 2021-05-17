class FourthMicroAggression extends Dialog {
  constructor() {
    super();

    this.dialogBox.titleBox.string = dialogsData.dialogues.microaggression4.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.microaggression4.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.microaggression4.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.microaggression4.answers[1]


    //define what will be needed in the scene
    this.scene = {
      background: false,
      dialogBox: true,
      answerButtons: true,
      speaker: true,
      fadeIn: true,
      fadeOut: true
    }

    //redefine text size because answers are too long for default size
    this.dialogBox.titleBox.textSize = 25
    this.dialogBox.answerButton.textSize = 10.5;
    this.dialogBox.answerButton.size.height = height / 12.5;

    //Set changing room to opened to allow draw() on ChangingRoom in script.js
    this.changingRoomOpened = true;
  }

  update() {
    super.update();
    this.updateBrokenness();
  }


  updateBrokenness() {
    this.brokenness.lvl4.on = true; //Define brokenness level as the corresponding level of the current microaggression;
  }

  toggleButtonA() {
    super.toggleButtonA();
    currentChangingRoom.microaggressions.fourthWasPlayed = true; //turn to true so it only plays once;
    currentState = new InTheChangingRoom();
  }

  toggleButtonB() {
    super.toggleButtonB();
    currentChangingRoom.microaggressions.fourthWasPlayed = true; //turn to true so it only plays once;
    currentState = new InTheChangingRoom();
  }
}