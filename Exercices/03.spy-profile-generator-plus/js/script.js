"use strict";

/*****************
Sarah Hontoy-Major
Exercice 3 : spy profil generator

password : advocacy
******************/

let spyProfile = {
  name: `REDACTED`,
  alias: `REDACTED`,
  undercoverJob: `REDACTED`,
  secretWeapon: `REDACTED`,
  password: `REDACTED`
};

let tarotData = undefined;
let objectData = undefined;
let instrumentData = undefined;
let descriptionData = undefined;
let jobData = undefined;

let state = `homepage` // can be homepage or profile

let generateProfileString = `Generate a profile`
let button1X = undefined;
let button1Y = undefined;
let buttonSizeX = 400;
let buttonSizeY = 100;

let existingProfileString = `I have a password`
let button2X = undefined;
let button2Y = undefined;

// preload()
// Description of preload
function preload() {
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  descriptionData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`);
  jobData = loadJSON(`data/occupations.json`) // excerpts taken from https://github.com/dariusk/corpora/blob/master/data/humans/occupations.json
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);
  //set x and y position of homepage button based on canvas
  button1X = width / 2;
  button1Y = height / 3
  button2X = width / 2
  button2Y = height / 3 * 2



}


// draw()
// Description of draw()
function draw() {
  background(140, 180, 0)
  checkState();
  // displayProfile();
}

function checkState() {
  if (state === `homepage`) {
    homepage();
  } else if (state === `profile`) {
    displayProfile()
  }
}

function homepage() {
  background(0)

  //generate profile button
  push()
  rectMode(CENTER);
  noStroke();
  fill(0, 255, 0);
  rect(button1X, button1Y, buttonSizeX, buttonSizeY);
  rect(button2X, button2Y, buttonSizeX, buttonSizeY);


  textAlign(CENTER)
  textSize(20);
  textFont(`courier`);
  textStyle(BOLD);
  fill(0);
  text(generateProfileString, button1X, button1Y);
  text(existingProfileString, button2X, button2Y);
  pop();
}

function mousePressed() {
  if (mouseX < button1X + buttonSizeX &&
    mouseX > button1X - buttonSizeX &&
    mouseY < button1Y + buttonSizeY &&
    mouseY > button1Y - buttonSizeY) {
    generateSpyProfile()
  } else if (mouseX < button2X + buttonSizeX &&
    mouseX > button2X - buttonSizeX &&
    mouseY < button2Y + buttonSizeY &&
    mouseY > button2Y - buttonSizeY) {
    promptPassword()
  }
}

function generateSpyProfile() {
  spyProfile.name = prompt(`Ay agent. What is your name?`)
  spyProfile.alias = `The ${random(descriptionData.descriptions)} ${random(instrumentData.instruments)}`;
  spyProfile.undercoverJob = random(jobData.occupations)
  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations)
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data-plus`, JSON.stringify(spyProfile));
}

function promptPassword() {
  let data = JSON.parse(localStorage.getItem(`spy-profile-data-plus`));
  if (data !== null) {
    let password = prompt(`Gimme the goddamn password`)
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.undercoverJob = data.undercoverJob
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
      state = `profile`
    }
    // else {
    //   angry reaction in responsiveVoice.
    // }
  } else {
    generateSpyProfile();
  }
}



function displayProfile() {
  let profile = `** SPY PROFILE **
Name: ${spyProfile.name}
Alias: ${spyProfile.alias}
undercover Occupation : ${spyProfile.undercoverJob}
Secret Weapon: ${spyProfile.secretWeapon}
Password: ${spyProfile.password}`;

  push()
  textSize(32);
  textFont(`Courier, monospace`)
  textAlign(LEFT, TOP)
  fill(0);
  text(profile, 200, 200)
  pop()
}