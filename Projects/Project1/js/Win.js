//WIN
// Last page, you won yay
class Win {
  constructor() {
    this.image = {
      file: winImage,
      x: width / 2,
      y: height / 3,
      scale: 1,
    }

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

  update() {
    this.setBackground();
    this.displayImage();
    this.displayText();
  }

  setBackground() {
    background(
      this.backgroundFill.r,
      this.backgroundFill.g,
      this.backgroundFill.b
    );
  }

  displayImage() {
    push();
    translate(this.image.x, this.image.y);
    imageMode(CENTER);
    // scale(0.9);
    image(this.image.file, 0, 0);
    pop();
  }

  displayText() {
    push();
    textAlign(CENTER, CENTER);
    textSize(this.text.size);
    fill(this.text.fill.r, this.text.fill.g, this.text.fill.b);
    text(this.text.string, this.text.x, this.text.y);
    pop();
  }

  mousePressed() {
    currentState = new Homepage
  }
}