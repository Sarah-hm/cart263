"use strict";

/*****************

Activity 02 : slamina mina eh eh waka waka eh eh
******************/
const animals = [
  "aardvark",
  "alligator",
  "alpaca",
  "antelope",
  "ape",
  "armadillo",
  "baboon",
  "badger",
  "bat",
  "bear",
  "beaver",
  "bison",
  "boar",
  "buffalo",
  "bull",
  "camel",
  "canary",
  "capybara",
  "cat",
  "chameleon",
  "cheetah",
  "chimpanzee",
  "chinchilla",
  "chipmunk",
  "cougar",
  "cow",
  "coyote",
  "crocodile",
  "crow",
  "deer",
  "dingo",
  "dog",
  "donkey",
  "dromedary",
  "elephant",
  "elk",
  "ewe",
  "ferret",
  "finch",
  "fish",
  "fox",
  "frog",
  "gazelle",
  "gila monster",
  "giraffe",
  "gnu",
  "goat",
  "gopher",
  "gorilla",
  "grizzly bear",
  "ground hog",
  "guinea pig",
  "hamster",
  "hedgehog",
  "hippopotamus",
  "hog",
  "horse",
  "hyena",
  "ibex",
  "iguana",
  "impala",
  "jackal",
  "jaguar",
  "kangaroo",
  "koala",
  "lamb",
  "lemur",
  "leopard",
  "lion",
  "lizard",
  "llama",
  "lynx",
  "mandrill",
  "marmoset",
  "mink",
  "mole",
  "mongoose",
  "monkey",
  "moose",
  "mountain goat",
  "mouse",
  "mule",
  "muskrat",
  "mustang",
  "mynah bird",
  "newt",
  "ocelot",
  "opossum",
  "orangutan",
  "oryx",
  "otter",
  "ox",
  "panda",
  "panther",
  "parakeet",
  "parrot",
  "pig",
  "platypus",
  "polar bear",
  "porcupine",
  "porpoise",
  "prairie dog",
  "puma",
  "rabbit",
  "raccoon",
  "ram",
  "rat",
  "reindeer",
  "reptile",
  "rhinoceros",
  "salamander",
  "seal",
  "sheep",
  "shrew",
  "silver fox",
  "skunk",
  "sloth",
  "snake",
  "squirrel",
  "tapir",
  "tiger",
  "toad",
  "turtle",
  "walrus",
  "warthog",
  "weasel",
  "whale",
  "wildcat",
  "wolf",
  "wolverine",
  "wombat",
  "woodchuck",
  "yak",
  "zebra"
];

const instructions = `Guess the animal pronounced backwards
by saying 'I think it is _'

Press any key to start`

const goodAnswerResponses = [`That is correct`, `You did good`, `Never thought you would get this one`, `wow! Good job!`]
const wrongAnswerResponses = [`Not even close`, `You really thought you were going to get it?`, `That is embarrassing`, `That is just sad`]

let currentAnimal = ``;
let currentAnswer = ``;

let state = `title` //Can be title or game

// setup()
// Description of setup
function setup() {
  createCanvas(500, 500);

  if (annyang) {
    let commands = {
      'I think it is *animal': guessAnimal
    };
    annyang.addCommands(commands);
    annyang.start();

    textSize(32);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
  }
}


// draw()
// Description of draw()
function draw() {
  checkState();
}


function checkState() {
  if (state === `title`) {
    titleScreen()
  } else if (state === `game`) {
    game()
  }
}


function titleScreen() {
  push()
  background(255, 255, 0);
  textSize(24);
  fill(0);
  text(instructions, width / 2, height / 2)
  pop()
}

function game() {
  background(0);
  checkCurrentAnswer();
}

function checkCurrentAnswer() {
  if (currentAnswer === currentAnimal) {
    fill(0, 255, 0)
    // let goodAnswerReaction = random(goodAnswerResponses);
    // responsiveVoice.speak(goodAnswerReaction);
  } else {
    fill(255, 0, 0);
  }
  text(currentAnswer, width / 2, height / 2);

}

function keyPressed() {
  if (state === `title`) {
    state = `game`
  }
}

function mousePressed() {
  if (state === `game`) {
    currentAnimal = random(animals);
    let reverseAnimal = reverseString(currentAnimal);
    responsiveVoice.speak(reverseAnimal);
  }
}

function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  console.log(currentAnswer);
}

/**
Reverses the provided string
*/
function reverseString(string) {
  // Split the string into an array of characters
  let characters = string.split('');
  // Reverse the array of characters
  let reverseCharacters = characters.reverse();
  // Join the array of characters back into a string
  let result = reverseCharacters.join('');
  // Return the result
  return result;
}