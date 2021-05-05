class Scene {
  constructor() {
    this.defaultSettings = {
      background: {
        r: 255,
        b: 255,
        g: 255
      }
    }
  }

  updated() {
    this.setBackground();
    this.playMusic();
  }

  setBackground() {
    background(
      this.defaultSettings.background.r,
      this.defaultSettings.background.b,
      this.defaultSettings.background.g
    );
  }

  playMusic() {
    //Music to be added
  }
}