"use strict";

/*****************
Activity 3 : spy profil generator
******************/

let spyProfile = {
  name: `REDACTED`,
  alias: `REDACTED`,
  secretWeapon: `REDACTED`,
  password: `REDACTED`
};

let tarotData = undefined;
let objectData = undefined;
let instrumentData = undefined;

// preload()
// Description of preload
function preload() {
  tarotData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/divination/tarot_interpretations.json`);
  objectData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/objects/objects.json`);
  instrumentData = loadJSON(`https://raw.githubusercontent.com/dariusk/corpora/master/data/music/instruments.json`);
}


// setup()
// Description of setup
function setup() {
  createCanvas(windowWidth, windowHeight);

  let data = JSON.parse(localStorage.getItem(`spy-profile-data`));
  if (data !== null) {
    let password = prompt(`Gimme the goddamn password`)
    if (password === data.password) {
      spyProfile.name = data.name;
      spyProfile.alias = data.alias;
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
  spyProfile.alias = `The ${random(instrumentData.instruments)}`;
  spyProfile.secretWeapon = random(objectData.objects);

  let card = random(tarotData.tarot_interpretations)
  spyProfile.password = random(card.keywords);

  localStorage.setItem(`spy-profile-data`, JSON.stringify(spyProfile));
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