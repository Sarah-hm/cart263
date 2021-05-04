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
    r: 255,
    g: 0,
    b: 0
  }
}

let currentState = undefined // can be : StoreFront, InsideStore...

// storeFront class variables


/**
Description of preload
*/
function preload() {

}


/**
Description of setup
*/
function setup() {
  //create a canvas and set its default background color
  createCanvas(defaultParameters.canvasWidth, defaultParameters.canvasHeight);
  background(defaultParameters.bg.r, defaultParameters.bg.g, defaultParameters.bg.b)

  currentState = new StoreFront();
}


/**
Description of draw()
*/
function draw() {

}