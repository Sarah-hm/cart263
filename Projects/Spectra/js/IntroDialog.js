/**
This section was meant for the player to choose a 'chill' version of the game that does not have any microaggression and does not break by wearing
the 'wrong' clothes. This is still in progress, hence why both buttons lead to the same path of aggressivity and bug.

It should however be noted that all assets (all clothes), whether masculine or feminine (apart from the feminine bodysuit) were made to fit both avatar perfectly.
This was in prevision of the 'chill' version of the game that would allow fierce outfits with clothes taken from both sides of the gender spectrum.
*/
class IntroDialog extends Dialog {
  constructor() {
    //Declare all super constructor variables
    super();
    //Declare background image variable
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

    //defines the title as 'welcome' from JSON file
    this.dialogBox.titleBox.string = dialogsData.dialogues.introDialogue.title

    //Defines the text/question from JSON file
    this.dialogBox.textBox.string = dialogsData.dialogues.introDialogue.question

    //defines the answer choices from JSON file
    // answer 'a'
    this.dialogBox.answerButton.a.string = dialogsData.dialogues.introDialogue.answers[0]

    //answer 'b'
    this.dialogBox.answerButton.b.string = dialogsData.dialogues.introDialogue.answers[1]


    //define what will be needed in the scene
    this.scene = {
      background: true,
      dialogBox: true,
      answerButtons: true,
      speaker: false,
      fadeIn: true,
      fadeOut: true
    }
  }

  //Runs every frame
  update() {
    super.update(); //Runs the super class update() method
  }

  //Declare where button A should lead
  toggleButtonA() {
    super.toggleButtonA();
    currentState = new TransitionInsideStore();
  }

  //Declare where button B should lead
  toggleButtonB() {
    super.toggleButtonB();
    currentState = new TransitionInsideStore();
  }
}