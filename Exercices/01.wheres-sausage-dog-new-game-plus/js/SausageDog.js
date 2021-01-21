class SausageDog extends Animal {
  //construct a sausage dog based on Animal.js
  constructor(x, y, image) {
    super(x, y, image);
    this.found = false;
    this.rotationSpeed = 0.25;

    // make it bark
    this.barkSound = barkSFX;
    this.barkVolume = 0.5;
  }

  //Will update just like Animal.js as well as bark. If it's found, will rotat.e
  update() {
    super.update();
    this.bark();
    this.checkIfWin();
  }

  //The closer the mouse is, the louder the bark
  //Got helped from my own P2 coding because I AM RUSTY AS HECK.
  bark() {
    let d = int(dist(mouseX, mouseY, this.x, this.y))
    this.barkVolume = map(d, 800, 0, 0, 0.7);
    this.barkSound.setVolume(this.barkVolume);
    if (!this.barkSound.isPlaying()) {
      this.barkSound.play();

    }
  }

  mousePressed() {
    if (this.overlap(mouseX, mouseY)) {
      this.found = true;
      console.log(this.found)
    }
  }

  checkIfWin() {
    console.log(`pleaseWork`)
    if (this.found) {
      this.angle += this.rotationSpeed;
    }
  }
}