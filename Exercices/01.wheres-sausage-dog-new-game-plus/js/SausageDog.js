class SausageDog extends Animal {
  //construct a sausage dog based on Animal.js (+rotation speed, barking sound and volume)
  constructor(x, y, image, angle) {
    super(x, y, image, angle);
    this.found = false;
    this.rotationSpeed = 2;

    // make it bark
    this.barkSound = barkSFX;
    this.barkVolume = 0.5;
  }

  //Will update just like Animal.js as well as bark. If it's found, will rotate
  update() {
    super.update();
    this.bark();
    this.checkIfWin();
  }

  //The closer the mouse is, the louder the bark
  //Got help from my own P2 coding because I AM RUSTY AS HECK.
  bark() {
    let d = int(dist(mouseX, mouseY, this.x, this.y))
    this.barkVolume = map(d, 800, 0, 0, 0.7);
    this.barkSound.setVolume(this.barkVolume);
    if (!this.barkSound.isPlaying()) {
      this.barkSound.play();
    }
  }

  //If mouse is pressed on the sausage dog, found will be returned 'true'
  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
    }
  }

  //If found is 'true', the sausage dog will start rotating from its center
  checkIfWin() {
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }
}