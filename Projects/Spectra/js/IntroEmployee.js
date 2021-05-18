/**
This dialog introduces Sandra, the costumer service employee at the clothing store.

She is made to look superficially nice and give out very generic salutations and reactions.

She's the cumulation of all the insidious comments and ideologies I intereacted with since I have been working and studying in the fashion industry
*/
class IntroEmployee extends Dialog {
  constructor() {
    //Declare all super constructor variables
    super();

    //Declare background image variables
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
    this.dialogBox.titleBox.string = dialogsData.dialogues.introEmployee.title

    //Defines the text/question from JSON file
    this.dialogBox.textBox.string = dialogsData.dialogues.introEmployee.question

    //defines the answer choices from JSON file
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.introEmployee.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.introEmployee.answers[1]


    //define what will be needed in the scene
    this.scene = {
      background: true,
      dialogBox: true,
      answerButtons: true,
      speaker: true,
      fadeIn: true,
      fadeOut: false
    }
  }

  //Runs every frame
  update() {
    super.update(); //Runs the super class update() method
  }

  //Declare where button A should lead
  toggleButtonA() {
    super.toggleButtonA();
    currentState = new ChoosingSection();
  }

  //Declare where button B should lead
  toggleButtonB() {
    super.toggleButtonB();
    currentState = new ChoosingSection();
  }
}