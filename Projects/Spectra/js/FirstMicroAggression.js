/**
1st microaggression :
Sandra tells the player they dont have the correct size, player can answer but it doesn't really do anything.
level of brokenness of the game increases, increasing the chances of bugs, filters, flickering and other effects
*/
class FirstMicroAggression extends Dialog {
  constructor() {
    //Declare all super constructor variables
    super();

    //defines the title from JSON file
    this.dialogBox.titleBox.string = dialogsData.dialogues.microaggression1.title

    //Defines the text/question from JSON file
    this.dialogBox.textBox.string = dialogsData.dialogues.microaggression1.question

    //defines the answer choices from JSON file
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

    //redefine text size because answers are too long for default size
    this.dialogBox.answerButton.textSize = 12;

    //redefine answer Button height to make the text stay inside the bounds of the button
    this.dialogBox.answerButton.size.height = height / 12.5;

    //Set changing room to opened to allow draw() on ChangingRoom in script.js
    this.changingRoomOpened = true;
  }

  //runs every frame
  update() {
    super.update(); //Runs the super class update() method
    this.updateBrokenness(); //update the level of brokenness of the game to how many microaggression the player has been through
  }

  updateBrokenness() {
    this.brokenness.lvl1.on = true; //Define brokenness level as the corresponding level of the current microaggression;
  }



  toggleButtonA() {
    super.toggleButtonA();
    currentChangingRoom.microaggressions.firstWasPlayed = true; //turn to true so it only plays once;
    currentState = new InTheChangingRoom();
  }

  //Declare where button B should lead
  toggleButtonB() {
    super.toggleButtonB();
    currentChangingRoom.microaggressions.firstWasPlayed = true; //turn to true so it only plays once;
    currentState = new InTheChangingRoom();
  }
}