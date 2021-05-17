class Scene {
  constructor() {
    this.backgroundMusic = {
      sound: backgroundMusic,
      volume: 0.8
    }

  }

  update() {
    this.playMusic();
  }


  playMusic() {
    if (!this.backgroundMusic.sound.isPlaying()) {
      this.backgroundMusic.sound.setVolume(this.backgroundMusic.volume)
      this.backgroundMusic.sound.play()
    }
  }

  mousePressed() {

  }
}