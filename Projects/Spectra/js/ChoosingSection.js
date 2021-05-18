/**
This dialog asks you whether you would want to see the masculine or feminine section first.

IT'S A TRAP.

Sandra will then assume the player's biological sex, gender expression and gender identity and give them the avatar that corresponds to the
chosen section's gender.
*/
class ChoosingSection extends Dialog {
  constructor() {
    //Declare all super constructor variables
    super();
    //Declare background image variable
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

    //defines the title from JSON file
    this.dialogBox.titleBox.string = dialogsData.dialogues.choosingSection.title

    //Defines the text/question from JSON file
    this.dialogBox.textBox.string = dialogsData.dialogues.choosingSection.question

    //defines the answer choices from JSON file
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

  //runs every frame
  update() {
    super.update() //Runs the super class update() method
  }

  //Declare where button A should lead
  toggleButtonA() {
    super.toggleButtonA();
    currentState = new TransitionToFemaleChangingRoom();
  }

  //Declare where button B should lead
  toggleButtonB() {
    super.toggleButtonB();
    currentState = new TransitionToMaleChangingRoom();
  }
}