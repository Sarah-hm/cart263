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

let currentState = undefined // scenes can be: Intro, Intro Dialog, Intro Employee, Choosing Section
let currentChangingRoom = undefined // changing rooms can be femaleChangingRoom or maleChangingRoom, both child classes of ChangingRoom

//load dialog scripts via JSON
let dialogsData = undefined;

//All fonts
let alienEncounterFont = undefined;
let atkinsonBold = undefined;
let atkinsonBoldItalic = undefined;
let atkinsonItalic = undefined;
let atkinsonRegular = undefined;

// intro scene variables
let mallEscalatorsImg = undefined;
let mallMezzanineImg = undefined;
let mallStoreFrontImg = undefined;

//dialog scenes + inside store variables
let employeeImg = undefined;
let insideStoreImg = undefined;

//Changing room variables
let changingRoomOpened = false; //set to false until changing room are opened by customer (player) trying clothes on
let changingRoomBackgroundImg = undefined;
let femaleAvatarImg = undefined;
let maleAvatarImg = undefined;

//Declare all the clothes
//feminine wardrobe
let bodysuit = undefined;
let jeanSkirt = undefined;
let overallDress = undefined;
let overallDressWithBack = undefined;
let skirt = undefined;
let skirtWithBack = undefined;
let turtleNeck = undefined;
let turtleNeckWithBack = undefined;
let womanShirt = undefined;
let womanShirtWithBack = undefined;

//masculine wardrobe
let formalPants = undefined;
let manShirt = undefined;
let manShirtWithBack = undefined;
let manTshirt = undefined;
let manTshirtWithBack = undefined;
let parka = undefined;
let parkaWithBack = undefined;
let utilityPants = undefined;


/**
Description of preload
*/
function preload() {
  //JSON data
  dialogsData = loadJSON(`assets/data/dialogues.json`)

  //all fonts
  alienEncounterFont = loadFont(`assets/fonts/SFAlienEncounters.ttf`);
  atkinsonBold = loadFont(`assets/fonts/Atkinson-Hyperlegible-Bold-102.ttf`);
  atkinsonBoldItalic = loadFont(`assets/fonts/Atkinson-Hyperlegible-BoldItalic-102.ttf`);
  atkinsonItalic = loadFont(`assets/fonts/Atkinson-Hyperlegible-Italic-102.ttf`);
  atkinsonRegular = loadFont(`assets/fonts/Atkinson-Hyperlegible-Regular-102.ttf`);

  //intro imgs
  mallEscalatorsImg = loadImage(`assets/images/mallEscalators.png`);
  mallMezzanineImg = loadImage(`assets/images/mallMezzanineView.png`);
  mallStoreFrontImg = loadImage(`assets/images/mallStoreFront.png`);

  //dialog scenes +inside Store variables
  employeeImg = loadImage(`assets/images/employee.png`);
  insideStoreImg = loadImage(`assets/images/insideStoreImg.png`)

  //Changing room imgs
  changingRoomBackgroundImg = loadImage(`assets/images/changingRoomBackgroundImg.png`)
  femaleAvatarImg = loadImage(`assets/images/femaleAvatar.png`)
  maleAvatarImg = loadImage(`assets/images/maleAvatar.png`)

  //preload all clothes images
  bodysuit = loadImage(`assets/images/clothes/bodysuit.png`);
  jeanSkirt = loadImage(`assets/images/clothes/jeanSkirt.png`);
  overallDress = loadImage(`assets/images/clothes/overallDress.png`);
  overallDressWithBack = loadImage(`assets/images/clothes/overallDress_withBack.png`);
  skirt = loadImage(`assets/images/clothes/skirt.png`);
  skirtWithBack = loadImage(`assets/images/clothes/skirt_withBack.png`);
  turtleNeck = loadImage(`assets/images/clothes/turtleNeck.png`);
  turtleNeckWithBack = loadImage(`assets/images/clothes/turtleNeck_withBack.png`);
  womanShirt = loadImage(`assets/images/clothes/womanShirt.png`);
  womanShirtWithBack = loadImage(`assets/images/clothes/womanShirt_withBack.png`);

  formalPants = loadImage(`assets/images/clothes/manFormalPants.png`);
  manShirt = loadImage(`assets/images/clothes/manShirt.png`);
  manShirtWithBack = loadImage(`assets/images/clothes/manShirt_withBack.png`);
  manTshirt = loadImage(`assets/images/clothes/manTshirt.png`);
  manTshirtWithBack = loadImage(`assets/images/clothes/manTshirt_withBack.png`);
  parka = loadImage(`assets/images/clothes/parka.png`);
  parkaWithBack = loadImage(`assets/images/clothes/parka_withBack.png`);
  utilityPants = loadImage(`assets/images/clothes/utilityPants.png`)

}


/**
Description of setup
*/
function setup() {
  //create a canvas and set its default background color
  createCanvas(defaultParameters.canvasWidth, defaultParameters.canvasHeight);
  background(defaultParameters.bg.r, defaultParameters.bg.g, defaultParameters.bg.b)

  currentState = new Intro(); //can be Intro, IntroDialog, TransitionInsideStore, IntroEmployee
  currentChangingRoom = new ChangingRoom(); //Can be FemaleChangingRoom, MaleChangingRoom or ChangingRoom (with no avatar or appropriate clothes assigned)
}


/**
Description of draw()
*/
function draw() {
  currentState.update();
  if (currentState.changingRoomOpened === true) {
    currentChangingRoom.update();
  }
}

function mousePressed() {
  currentState.mousePressed();
  if (currentState.changingRoomOPened === true) {
    currentChangingRoom.mousePressed();
  }
}