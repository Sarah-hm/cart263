//WIN
// Last page, you won yay
class Win {
  constructor() {

    //===Image parameters===
    this.image = {
      file: winImage,
      x: width / 2,
      y: height / 3,
      scale: 1,
    }

    //===text paramters===
    this.text = {
      string: `So you really are Raymond Holt after all.

I will have to admit I am mildly impressed.
Have a good day. Dismissed.`,
      size: 34,
      x: width / 2,
      y: (height / 5) * 3.5,
      fill: {
        r: 248,
        g: 232,
        b: 21
      },
    }

    //===Background color===
    this.backgroundFill = {
      r: 59,
      g: 61,
      b: 126,
    };

  }
  // ========== update runs every frame when this is currentState ===========
  update() {
    this.setBackground();
    this.displayImage();
    this.displayText();
  }

  //set colored background
  setBackground() {
    background(
      this.backgroundFill.r,
      this.backgroundFill.g,
      this.backgroundFill.b
    );
  }

  //display a gif of Raymond Holt saying 'yas queen'
  displayImage() {
    push();
    translate(this.image.x, this.image.y);
    imageMode(CENTER);
    // scale(0.9);
    image(this.image.file, 0, 0);
    pop();
  }

  //display winning text
  displayText() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.text.size);
    fill(this.text.fill.r, this.text.fill.g, this.text.fill.b);
    text(this.text.string, this.text.x, this.text.y);
    pop();
  }

  //if mouse is pressed, player returns to homepage
  mousePressed() {
    this.themeSongHasPlayed = false;
    currentState = new Homepage
  }
}