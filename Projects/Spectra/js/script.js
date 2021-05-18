/**
Spectra
By Sarah Hontoy-Major

This is a dress up game with several dialog boxes. It brings the player through different scenes of a mall and inside a clothing store where they will
be faced with microaggressions and assumptions of gender based on unrelated questions from the customer service employee (Sandra's character is based on an actual person,
and I did in fact use her real name. Here's to hoping she didn't learn how to code and is not seeing this now).

When in the changing room, the player will have an assumed gendered avatar and will be forced to dress it with appropriate clothings, so as to not break the game.
The more the player continues to choose the 'wrong' pieces of clothings to dress their avatar with, to more broken the game will become, until it will eventually
break completely and the player will not be able to play anymore(will be forced to restart).

This is meant to portray and critique the binary dichotomy that the fashion industry is trying to impose on its customers. A lot of people are being imposed gendered clothings to
dress with based on their body type, biological sex and/or gender assigned at birth. It can make it unbearable for some to choose how to dress everyday.

Dressing up should be as fun as a game; exactly like the ones I used to play and that I inspired myself with for this project. Instead, for some, it's just another piece of
the challenge that is going through life trying to be your most authentic self.
*/

"use strict";

//Declare default variables for canvas size and base background
let defaultParameters = {
  canvasWidth: 800,
  canvasHeight: 600,
  bg: {
    r: 189,
    g: 183,
    b: 219
  }
}

//Declare variable for the two different state objects that will be found in the game.

let currentState = undefined // Runs all the time, states or scenes can be: Intro, Intro Dialog, Intro Employee, Choosing Section
let currentChangingRoom = undefined // Runs from the state of 'InTransitionToChangingRoom'. changing rooms can be femaleChangingRoom or maleChangingRoom, both child classes of ChangingRoom

//Declare JSON files
let dialogsData = undefined; //dialogs for all communication with the game

//Declare fonts
let alienEncounterFont = undefined; //Title of dialogs
let lcdFont = undefined; //text and buttons of dialogs

//declare basic scene variables;
let backgroundMusic = undefined; //L'imperatrice - Sonate Pacifique (Instrumental)

//Declare start page variables
let startMallImg = undefined; //background of startPage scene
let startLogoImg0 = undefined; //flickering start Logo on startPage
let startLogoImg1 = undefined;
let startLogoImg2 = undefined;

//Mall images variables
let mallEscalatorsImg = undefined; //first frame of transition in the game
let mallMezzanineImg = undefined; //second frame of transition in the game
let mallStoreFrontImg = undefined; //third frame of transition in the game
let insideStoreImg = undefined; //background of scenes inside the store

//Employee (speaker) related variables
let employeeImg = undefined; //image of employee
let employeeFilterOriginalImg = undefined; //first filter of image of employee
let employeeFilterNeonImg = undefined; //second filter of image of employee
let employeeFilterInvertedImg = undefined; //third filter of image of employee

//Changing room variables
let changingRoomOpened = false; //set to false until changing room are opened by customer (player) trying clothes on
let changingRoomBackgroundImg = undefined; //background in the changing room scenes
let femaleAvatarImg = undefined; //female avatar image
let maleAvatarImg = undefined //male avatar image

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
  lcdFont = loadFont(`assets/fonts/LCD-U___.TTF`)

  //basic scene (background music)
  backgroundMusic = loadSound(`assets/sounds/sonatePacifique_Limperatrice.mp3`)

  //Start Page images;
  startMallImg = loadImage(`assets/images/startMallImg.png`);
  startLogoImg0 = loadImage(`assets/images/StartLogoImgs/0.png`);
  startLogoImg1 = loadImage(`assets/images/StartLogoImgs/1.png`);
  startLogoImg2 = loadImage(`assets/images/StartLogoImgs/2.png`);

  //mall imgs
  mallEscalatorsImg = loadImage(`assets/images/mallEscalators.png`);
  mallMezzanineImg = loadImage(`assets/images/mallMezzanineView.png`);
  mallStoreFrontImg = loadImage(`assets/images/mallStoreFront.png`);
  insideStoreImg = loadImage(`assets/images/insideStoreImg.png`)

  //Employee(speaker) images
  employeeImg = loadImage(`assets/images/employee.png`);
  employeeFilterOriginalImg = loadImage(`assets/images/employee_filterOriginal.png`);
  employeeFilterNeonImg = loadImage(`assets/images/employee_filterNeon.png`);
  employeeFilterInvertedImg = loadImage(`assets/images/employee_filterInverted.png`);

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
  manTshirtImg = loadImage(`assets/images/clothes/tShirt.png`);
  parkaImg = loadImage(`assets/images/clothes/parka.png`);
  utilityPantsImg = loadImage(`assets/images/clothes/UtilityPants.png`)

}


/**
Creates a canvas of 800,600 and fill it with a base pink background just to be safe.
Sets currentChangingRoom as 'Changing room', which means no designated avatar or appropriate clothings to choose from yet.
Sets currentState as StartPage to start from the beginning of the game (1st scene)
*/
function setup() {
  //create a canvas and set its default background color
  createCanvas(defaultParameters.canvasWidth, defaultParameters.canvasHeight);
  background(defaultParameters.bg.r, defaultParameters.bg.g, defaultParameters.bg.b)

  //set current changing room as a 'skeleton' changing room with nothing assigned
  currentChangingRoom = new ChangingRoom(); //Can be FemaleChangingRoom (with female avatar and feminine appropriate clothes), MaleChangingRoom (with male avatar and masculine apporpriate clothes) or ChangingRoom (with no avatar or appropriate clothes assigned yet)

  //set CurrentState as StartPage to start at the beginning of the narrative
  currentState = new StartPage(); //can be Intro, IntroDialog, TransitionInsideStore, IntroEmployee, ChoosingSection, TransitionToChangingRoom, InTheChangingRoom(intermission)

}


/**
Run both current changing room and current state' update() method every frame
*/
function draw() {
  if (currentState.changingRoomOpened === true) //Process only if changing room has been set to true in the current scene player is in
  {
    currentChangingRoom.update(); //run the current changing room update() method every frame
  }
  currentState.update(); //run the current state update() method every frame
}


//Run currentChangingRoom or currentState's mousePressed() method when mousePressed() is triggered
function mousePressed() {
  if (currentState.changingRoomOPened === true) { //Process only if changing room has been set to true in the current scene player is in
    currentChangingRoom.mousePressed(); //run the current changing room mousePressed() method every time mousePressed()
  }
  currentState.mousePressed(); //run the current state's mousePressed() method every time mousePressed()
}