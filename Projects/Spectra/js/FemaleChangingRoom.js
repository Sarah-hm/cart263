class FemaleChangingRoom extends ChangingRoom {
  constructor() {
    super();
    this.avatar.img = femaleAvatarImg

    this.appropriateClothingChoice = "feminine"
  }
  update() {
    super.update();
  }


  mousePressed() {
    super.mousePressed();
  }
}