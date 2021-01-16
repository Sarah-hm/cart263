class SausageDog extends Animal {
  constructor(x, y, image) {
    super(x, y, image);
    this.found = false;
    this.rotationSpeed = 0.25;

    //bark
    this.barkSound = barkSFX;
    this.barkVolume = 0.5;

  }

  update() {
    super.update();
    this.bark();
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }

  //The closer the mouse is, the louder the bark
  bark() {
    let d = int(dist(mouseX, mouseY, this.x, this.y))
    this.barkVolume = map(d, 600, 0, 0, 0.7);
    this.barkSound.setVolume(this.barkVolume);
    if (!this.barkSound.isPlaying()) {
      this.barkSound.play();

    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true
    }
  }
}