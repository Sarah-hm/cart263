//This is an inbetween scene that doesn't do anything but wait for the user to not make the 'appropriate' choice of clothes.
//Everything is turned off including the background, supplied by the changing room class

class InTheChangingRoom extends Dialog {
  constructor() {
    super();
    //Define the string to be polite, but it's all empty strings anyway
    this.dialogBox.titleBox.string = dialogsData.dialogues.intermission.title
    this.dialogBox.textBox.string = dialogsData.dialogues.intermission.title
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.intermission.title
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.intermission.title


    //define what will be needed in the scene
    this.scene = {
      background: false,
      dialogBox: false,
      answerButtons: false,
      speaker: false,
      fadeIn: false,
      fadeOut: false
    }

    //Set changing room to opened because we are, in fact, in the changing room. (to allow draw() on ChangingRoom)
    this.changingRoomOpened = true;
  }

  //runs every frame
  update() {
    super.update(); //Runs the super class update() method
  }


}