"use strict";

/*****************
Sarah Hontoy-Major
Exercice 3 : spy profil generator
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

// preload()
// Description of preload
function preload() {
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
  descriptionData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/humans/descriptions.json`);
  jobData = loadJSON(`data/occupations.json`)
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data-plus`));
  if (data !== null) {
    let password = prompt(`Gimme the goddamn password`)
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
      spyProfile.undercoverJob = data.undercoverJob
      spyProfile.secretWeapon = data.secretWeapon;
      spyProfile.password = data.password;
    }
    // else {
    //   angry reaction in responsiveVoice.
    // }
  } else {
    generateSpyProfile();
  }

}

function generateSpyProfile() {
  spyProfile.name = prompt(`OH NANA WHATS UR NAME?`)
  spyProfile.alias = `The ${random(descriptionData.descriptions)} ${random(instrumentData.instruments)}`;
  spyProfile.undercoverJob = random(jobData.occupations)
  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations)
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data-plus`, JSON.stringify(spyProfile));
}


// draw()
// Description of draw()
function draw() {
  background(140, 180, 0)
  displayProfile();
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