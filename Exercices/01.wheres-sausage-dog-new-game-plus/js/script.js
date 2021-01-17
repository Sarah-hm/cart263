"use strict";
/*****************
Activity 01 - Where's sausage dog?
Sarah Hm
******************/

//Declare variables
const NUM_ANIMAL_IMAGES = 10;
const NUM_ANIMALS = 100;

let animalImages = [];
let animals = [];

let sausageDogImage = undefined;
let sausageDog = undefined;

let barkSFX = undefined;
let loseSFX = undefined;
// preload()
// Description of preload
function preload() {
  for (let i = 0; i < NUM_ANIMAL_IMAGES; i++) {
    let animalImage = loadImage(`assets/images/animal${i}.png`);
    animalImages.push(animalImage);
  }

  sausageDogImage = loadImage(`assets/images/sausage-dog.png`);
  barkSFX = loadSound(`assets/sounds/bark.wav`);
  loseSFX = loadSound(`assets/sounds/sadTrombone.wav`);
}

// setup()
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  createAnimals()
  createSausageDog()
}

function createAnimals() {
  //create animals
  for (let i = 0; i < NUM_ANIMALS; i++) {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let angle = random(-90, 90)
    let animal = new Animal(x, y, animalImage, angle);
    animals.push(animal);
  }
}

function createSausageDog() {
  let x = random(0, width);
  let y = random(0, height);
  sausageDog = new SausageDog(x, y, sausageDogImage);
}

// draw()
function draw() {
  background(255, 255, 0);
  drawAnimals();
  drawSausageDog();
}

function drawAnimals() {
  for (let i = 0; i < animals.length; i++) {
    animals[i].update();
  }
}

function drawSausageDog() {
  sausageDog.update();
}

function mousePressed() {
  for (let i = 0; i < animals.length; i++) {
    animals[i].mousePressed();
  }
  sausageDog.mousePressed();

}