class Scene {
  constructor() {

    //Declare music variables
    this.backgroundMusic = {
      sound: backgroundMusic,
      volume: 0.8
    }

    //Declares if feminine or masculine section has been selected in the Choosing Section.js (extends from Dialog that extends from Scene), impacts which changing room player will use in transition to Changing Room.js (extends from Scene)
    this.feminineSectionChosen = false; //Turned true if player chosen feminine section
    this.masculineSectionChosen = false; //Turned true if player chosen masculine section
  }

  //update every frame
  update() {
    this.playMusic();
  }

  //Play music continuously throughout the scenes
  playMusic() {
    if (!this.backgroundMusic.sound.isPlaying()) {
      this.backgroundMusic.sound.setVolume(this.backgroundMusic.volume)
      this.backgroundMusic.sound.play()
    }
  }

  mousePressed() {
    //It's just there to be polite. It's not doing anything. Move on.
  }
}