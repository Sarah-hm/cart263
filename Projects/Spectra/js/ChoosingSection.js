class ChoosingSection extends Dialog {
  constructor() {
    super();
    this.backgroundImg = {
      img: insideStoreImg,
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
    this.dialogBox.titleBox.string = dialogsData.dialogues.choosingSection.title

    //Defines the text/question
    this.dialogBox.textBox.string = dialogsData.dialogues.choosingSection.question

    //defines the answer choices
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.choosingSection.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.choosingSection.answers[1]

    //define what will be needed in the scene
    this.scene = {
        background: true,
        dialogBox: true,
        answerButtons: true,
        speaker: true,
        fadeIn: false,
        fadeOut: true
      },

      //redefine text size because answers are too long for default size
      this.dialogBox.answerButton.textSize = 12;
  }

  update() {
    super.update();
  }

  toggleButtonA() {
    super.toggleButtonA();
    //Go to the In the changing room scene, which does nothing but wait
    currentState = new InTheChangingRoom();

    //Toggle changing room to open and send the customer (player) to the female avatar changing room
    changingRoomOpened = true;
    currentChangingRoom = new FemaleChangingRoom();
  }

  toggleButtonB() {
    super.toggleButtonB();
    //Go to the In the changing room scene, which does nothing but wait
    currentState = new InTheChangingRoom();

    //Toggle changing room to open and send the customer (player) to the male avatar changing room
    changingRoomOpened = true;
    currentChangingRoom = new MaleChangingRoom();
  }
}