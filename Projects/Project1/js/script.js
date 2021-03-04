"use strict";

/*****************
Who wants to be Raymond Holt? - Project 1
Sarah Hontoy-Major

This is my project 1, who wants to be Raymond Holt? the televised questionnaire show.
******************/

//Declare variables

let currentState = undefined;
let currentAnswer = ``;
let currentGuess = ``;

//homepahe variables
let titleImg0 = undefined;
let titleImg1 = undefined;
let titleImg2 = undefined;

let startImg0 = undefined;
let startImg1 = undefined;
let startImg2 = undefined;

let titleRHImg0 = undefined;
let titleRHImg1 = undefined;
let titleRHImg2 = undefined;

let adamGorryLights = undefined;

let themeSong = undefined;

let skipImg0 = undefined;
let skipImg1 = undefined;
let skipImg2 = undefined;

//Lvl1 variables
let lvl1Image = undefined;

let lvl2Image = undefined;

// preload()
// Description of preload
function preload() {
  //homepage
  titleImg0 = loadImage(`assets/images/homepage/titleImg0.png`);
  titleImg1 = loadImage(`assets/images/homepage/titleImg1.png`);
  titleImg2 = loadImage(`assets/images/homepage/titleImg2.png`);

  startImg0 = loadImage(`assets/images/homepage/startImg0.png`);
  startImg1 = loadImage(`assets/images/homepage/startImg1.png`);
  startImg2 = loadImage(`assets/images/homepage/startImg2.png`);

  titleRHImg0 = loadImage(`assets/images/homepage/RaymondHolt0.png`);
  titleRHImg1 = loadImage(`assets/images/homepage/RaymondHolt1.png`);
  titleRHImg2 = loadImage(`assets/images/homepage/RaymondHolt2.png`);

  themeSong = loadSound(`assets/sounds/brooklyn-nine-nine-theme-song.mp3`)

  skipImg0 = loadImage(`assets/images/skipImg0.png`);
  skipImg1 = loadImage(`assets/images/skipImg1.png`);
  skipImg2 = loadImage(`assets/images/skipImg2.png`)

  // adamGorryLights = loadFont(`assets/fonts/adam_gorry_lights.otf`);

  //lvl1
  lvl1Image = loadImage(`assets/images/Lvl1Image.png`)

  lvl2Image = loadImage(`assets/images/Lvl2Image.png`)
}


// setup()
// Description of setup
function setup() {
  createCanvas(900, 600)

  currentState = new Lvl1();

  if (annyang) {
    let command = {
      '*guess': guessAnswer
    };
    annyang.addCommands(command)
    annyang.start();
  } else {
    alert(`You should really use chrome and enable your mic, otherwise this is going to get boring real quick.`)
  }
}


function guessAnswer(guess) {
  currentAnswer = currentState.annyangCommand
  currentGuess = guess.toLowerCase();
  console.log(currentGuess);
  console.log(currentAnswer);

  if (currentGuess !== ``) {
    if (currentAnswer === currentGuess) {
      currentState.win();
    }
  }
}


// draw()
// Description of draw()
function draw() {
  background(0);
  currentState.update();
}

function mousePressed() {
  currentState.mousePressed();
}

function keyTyped() {
  currentState.keyTyped()
}

function keyPressed() {
  currentState.keyPressed()
}