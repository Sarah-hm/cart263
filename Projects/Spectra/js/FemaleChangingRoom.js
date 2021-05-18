/**
Extends extensively from ChangingRoom class. The only thing this class does is set the avatar to female and appropriate clothes to
feminine so as to let the program know interaction with which clothes (the opposite gender) will cause game breakage.
 */
class FemaleChangingRoom extends ChangingRoom {
  constructor() {
    //Declare all super class constructor variables
    super();

    //Set the avatar img as the female avatar Image
    this.avatar.img = femaleAvatarImg

    //Set the appropriate clothing choice as feminine
    this.appropriateClothingChoice = "feminine"
  }

  //Runs every frame
  update() {
    super.update(); //Runs the super class update() method
  }

  //Runs every time player presses on mouse
  mousePressed() {
    super.mousePressed(); //Runs the super class mousePressed() method
  }
}