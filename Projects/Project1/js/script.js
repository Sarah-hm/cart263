"use strict";

/*****************
Who wants to be Raymond Holt? - Project 1
Sarah Hontoy-Major

This is my project 1, who wants to be Raymond Holt? the televised questionnaire show.
******************/

//===Declare variables===

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

let answerChoicesImg = undefined;

let themeSong = undefined;

//=== General lvl variables ===

let skipImg0 = undefined;
let skipImg1 = undefined;
let skipImg2 = undefined;

//=== lvl specific variables ===
let lvl1Image = undefined;
let lvl2Image = undefined;
let lvl3Image = undefined;
let lvl4Image = undefined;
let lvl5Image = undefined;
let lvl6Image = undefined;
let winImage = undefined;

// preload()
// Description of preload
function preload() {
  //homepage file preload
  titleImg0 = loadImage(`assets/images/homepage/titleImg0.png`);
  titleImg1 = loadImage(`assets/images/homepage/titleImg1.png`);
  titleImg2 = loadImage(`assets/images/homepage/titleImg2.png`);

  startImg0 = loadImage(`assets/images/homepage/startImg0.png`);
  startImg1 = loadImage(`assets/images/homepage/startImg1.png`);
  startImg2 = loadImage(`assets/images/homepage/startImg2.png`);

  titleRHImg0 = loadImage(`assets/images/homepage/RaymondHolt0.png`);
  titleRHImg1 = loadImage(`assets/images/homepage/RaymondHolt1.png`);
  titleRHImg2 = loadImage(`assets/images/homepage/RaymondHolt2.png`);

  answerChoicesImg = loadImage(`assets/images/answerChoicesImg.JPG`)

  themeSong = loadSound(`assets/sounds/brooklyn-nine-nine-theme-song.mp3`)

  //general lvl file preload
  skipImg0 = loadImage(`assets/images/skipImg0.png`);
  skipImg1 = loadImage(`assets/images/skipImg1.png`);
  skipImg2 = loadImage(`assets/images/skipImg2.png`)

  //lvl specficic file preload
  lvl1Image = loadImage(`assets/images/Lvl1Image.png`)
  lvl2Image = loadImage(`assets/images/Lvl2Image.png`)
  lvl3Image = loadImage(`assets/images/Lvl3Image.png`)
  lvl4Image = loadImage(`assets/images/Lvl4Image.png`)
  lvl5Image = loadImage(`assets/images/Lvl5Image.png`)
  lvl6Image = loadImage(`assets/images/Lvl6Image.png`)
  winImage = loadImage(`assets/images/winImage.gif`)
}


// setup()
// Description of setup
function setup() {
  createCanvas(900, 600)

  //Starting current State is homepage. Can be homepage, Lvl1 through Lvl6 and Win
  currentState = new Homepage();


  //Start annyang or alerts the player that they should enable mic and/or switch to google chrome
  //Annyang listens for everything as a guessAnswer
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

//If the annyang input the player guessed is the same as the current Answer (of the current State), player wins. If it's wrong, player loses and can skip to next level.
function guessAnswer(guess) {
  currentAnswer = currentState.annyangCommand
  currentGuess = guess.toLowerCase();

  //Intentionally left these 2 console.log because I am guessing it will be easier to go through the game/evaluate it if quick access to currentAnswer and currentGuess are available. 
  console.log(currentGuess);
  console.log(currentAnswer);

  if (currentGuess !== ``) {
    if (currentAnswer === currentGuess) {
      currentState.win();
    } else {
      if (currentState.cashButton.on) {
        currentState.lost = true
      }
    }
  }
}


// draw()
//updates the currentState every frame.
function draw() {
  currentState.update();
}

//Updates the appropriate event in currentState's class
function mousePressed() {
  currentState.mousePressed();
}

//Keytyped and keyPressed only used in instance of 'cash' answer
function keyTyped() {
  currentState.keyTyped()
}

function keyPressed() {
  currentState.keyPressed()
}