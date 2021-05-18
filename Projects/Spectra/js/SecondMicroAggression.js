class SecondMicroAggression extends Dialog {
  constructor() {
    super();

    this.dialogBox.titleBox.string = dialogsData.dialogues.microaggression2.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.microaggression2.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.microaggression2.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.microaggression2.answers[1]


    //define what will be needed in the scene
    this.scene = {
      background: false,
      dialogBox: true,
      answerButtons: true,
      speaker: true,
      fadeIn: true,
      fadeOut: true
    }

    //Set changing room to opened to allow draw() on ChangingRoom in script.js
    this.changingRoomOpened = true;
  }

  update() {
    super.update();
    this.updateBrokenness();
  }

  updateBrokenness() {
    this.brokenness.lvl2.on = true; //Define brokenness level as the corresponding level of the current microaggression;
  }

  toggleButtonA() {
    super.toggleButtonA();
    currentChangingRoom.microaggressions.secondWasPlayed = true; //turn to true so it only plays once;
    this.brokenness.lvl2.on = true; //Define brokenness level as the corresponding level of the current microaggression;
    currentState = new InTheChangingRoom();
  }

  toggleButtonB() {
    super.toggleButtonB();
    currentChangingRoom.microaggressions.secondWasPlayed = true; //turn to true so it only plays once;
    currentState = new InTheChangingRoom();
  }
}