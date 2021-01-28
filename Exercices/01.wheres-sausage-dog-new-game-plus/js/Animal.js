class Animal {
  //Set the parameters (position, image, angle, sound)
  constructor(x, y, image, angle) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = angle;

    this.loseSound = loseSFX;
  }

  //Updates the transparency and displays the animal
  update() {
    this.setTransparency();
    this.display();
    // this.checkIfLose();
  }

  setTransparency() {
    if (this.overlap(mouseX, mouseY)) {
      tint(255, 255);
    } else tint(255, 10);
  }

  //Display the animal at a certain position, angle and with an image
  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0);
    pop();
  }

  //Check if the animal overlaps with mouse position, returns true or false
  overlap(x, y) {
    if (
      x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2
    ) {
      return true;
    } else {
      return false;
    }
  }

  //Plays sad trombone sound if mouse is pressed on an animal
  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      if (!this.loseSound.isPlaying()) {
        this.loseSound.play();
      }
    }
  }
}