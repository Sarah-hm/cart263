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

//Lvl1 variables
let lvl1Image = undefined;

// preload()
// Description of preload
function preload() {
  lvl1Image = loadImage(`assets/images/Lvl1Image.png`)
}


// setup()
// Description of setup
function setup() {
  createCanvas(900, 600)

  currentState = new Lvl();

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


// draw()
// Description of draw()
function draw() {
  background(0);
  currentState.update();
}

function guessAnswer(guess) {
  currentAnswer = currentState.annyangCommand
  currentGuess = guess.toLowerCase();
  console.log(currentGuess);
  console.log(currentAnswer);

  if (currentGuess !== ``) {
    if (currentAnswer === currentGuess) {
      currentState.win()
    }
  }
}