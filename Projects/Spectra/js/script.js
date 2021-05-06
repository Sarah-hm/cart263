/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

let defaultParameters = {
  canvasWidth: 800,
  canvasHeight: 600,
  bg: {
    r: 189,
    g: 183,
    b: 219
  }
}

let currentState = undefined // can be : StoreFront, InsideStore...

//All fonts
let alienEncounterFont = undefined;

// intro scene variables
let mallEscalatorsImg = undefined;
let mallMezzanineImg = undefined;
let mallStoreFrontImg = undefined;

//intro dialog variables


/**
Description of preload
*/
function preload() {
  //all fonts
  alienEncounterFont = loadFont(`assets/fonts/SFAlienEncounters.ttf`)

  //intro imgs
  mallEscalatorsImg = loadImage(`assets/images/mallEscalators.png`);
  mallMezzanineImg = loadImage(`assets/images/mallMezzanineView.png`);
  mallStoreFrontImg = loadImage(`assets/images/mallStoreFront.png`);


}


/**
Description of setup
*/
function setup() {
  //create a canvas and set its default background color
  createCanvas(defaultParameters.canvasWidth, defaultParameters.canvasHeight);
  background(defaultParameters.bg.r, defaultParameters.bg.g, defaultParameters.bg.b)

  currentState = new IntroDialog();
}


/**
Description of draw()
*/
function draw() {
  currentState.update();
}