class Animal {
  constructor(x, y, image, angle) {
    this.x = x;
    this.y = y;
    this.image = image;

    this.angle = angle;

    this.clickSound = loseSFX;

  }

  update() {
    this.setTransparency();
    this.display();
    // this.checkIfLose();
  }

  setTransparency() {
    if (this.overlap(mouseX, mouseY)) {
      tint(255, 255);
    } else(tint(255, 10))
  }

  display() {
    push();
    imageMode(CENTER);
    translate(this.x, this.y);
    rotate(this.angle);
    image(this.image, 0, 0)
    pop()
  }

  overlap(x, y) {
    if (x > this.x - this.image.width / 2 &&
      x < this.x + this.image.width / 2 &&
      y > this.y - this.image.height / 2 &&
      y < this.y + this.image.height / 2) {
      return true;
    } else {
      return false;
    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY) && !sausageDog.overlap(mouseX, mouseY)) {
      if (!this.clickSound.isPlaying()) {
        this.clickSound.play();
      }
    }

  }
}