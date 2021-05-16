/**
Spectra
By Sarah Hontoy-Major

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
let bodysuitImg = undefined;
let jeanSkirtImg = undefined;
let overallDressImg = undefined;
let skirtImg = undefined;
let turtleNeckImg = undefined;
let womanShirtImg = undefined;

//masculine wardrobe
let formalPantsImg = undefined;
let manShirtImg = undefined;
let manTshirtImg = undefined;
let parkaImg = undefined;
let utilityPantsImg = undefined;


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
  bodysuitImg = loadImage(`assets/images/clothes/bodysuit.png`);
  jeanSkirtImg = loadImage(`assets/images/clothes/jeanSkirt.png`);
  overallDressImg = loadImage(`assets/images/clothes/overallDress.png`);
  skirtImg = loadImage(`assets/images/clothes/skirt.png`);
  turtleNeckImg = loadImage(`assets/images/clothes/turtleNeck.png`);
  womanShirtImg = loadImage(`assets/images/clothes/womanShirt.png`);

  formalPantsImg = loadImage(`assets/images/clothes/manFormalPants.png`);
  manShirtImg = loadImage(`assets/images/clothes/manShirt.png`);
  manTshirtImg = loadImage(`assets/images/clothes/manTshirt.png`);
  parkaImg = loadImage(`assets/images/clothes/parka.png`);
  utilityPantsImg = loadImage(`assets/images/clothes/UtilityPants.png`)

}


/**
Description of setup
*/
function setup() {
  //create a canvas and set its default background color
  createCanvas(defaultParameters.canvasWidth, defaultParameters.canvasHeight);
  background(defaultParameters.bg.r, defaultParameters.bg.g, defaultParameters.bg.b)

  currentState = new InTheChangingRoom(); //can be Intro, IntroDialog, TransitionInsideStore, IntroEmployee, ChoosingSection, InTheChangingRoom
  currentChangingRoom = new MaleChangingRoom(); //Can be FemaleChangingRoom, MaleChangingRoom or ChangingRoom (with no avatar or appropriate clothes assigned)
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