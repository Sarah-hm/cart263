class MaleChangingRoom extends ChangingRoom {
  constructor() {
    super();
    this.avatar.img = maleAvatarImg

    this.appropriateClothingChoice = "masculine"
  }
  update() {
    super.update();
  }


  mousePressed() {
    super.mousePressed();
  }
}