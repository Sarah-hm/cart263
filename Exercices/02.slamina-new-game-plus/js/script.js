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

const instructions = `Guess the animal said backwards
by saying 'I think it is _'

Press any key to start
and then click your mouse`

const goodAnswerResponses = [`That is correct`, `You did good`, `Never thought you would get this one`, `wow! Good job!`]
const wrongAnswerResponses = [`Not even close`, `You really thought you were going to get it?`, `That is embarrassing`, `That is just sad`]

let currentAnimal = ``;
let currentAnswer = ``;

let state = `title` //Can be title or game
let gameState = `` //can be ``, ongoing, success, fail

// set a timer with 10 seconds
let timer = ``;

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
// check if states
function draw() {
  checkState();
}

//If state is title, show the instructions; if state is game, play the game.
function checkState() {
  if (state === `title`) {
    titleScreen()
  } else if (state === `game`) {
    game()
  }
}

//Sets background to yellow and instruction string in the middle of canvas
function titleScreen() {
  push()
  background(255, 255, 0);
  textSize(24);
  fill(0);
  text(instructions, width / 2, height / 2)
  pop()
}

//Set the bg to black, set timer (that is 0 before clicking), check currect voice input
function game() {
  background(0);
  setTimer();
}


//timer will go down by 1 every second, if you succeed it will stop, if it goes to 0 you will fail.
function setTimer() {
  if (gameState === `ongoing`) {
    if (frameCount % 60 === 0 && timer > 0) {
      timer--
    }
  }
  if (timer === 0) {
    fail()
  }
  push()
  fill(255)
  text(timer, width / 2, height / 10)
  pop()
}

//Changes state from title to game when any key is pressed
function keyPressed() {
  if (state === `title`) {
    state = `game`
  }
}

//if the we're in the game, current Animal will be randomly selected, told backwards and timer will be set to 10 seconds
function mousePressed() {
  if (state === `game`) {
    currentAnimal = random(animals);
    let reverseAnimal = reverseString(currentAnimal);
    responsiveVoice.speak(reverseAnimal);
    timer = 20;
    gameState = `ongoing`
  }
}

//Guess an animal
function guessAnimal(animal) {
  currentAnswer = animal.toLowerCase();
  checkCurrentAnswer();
  console.log(currentAnswer);
}


//If the answer is good, goes to success function. If it's wrong, goes to fail function.
function checkCurrentAnswer() {
  if (currentAnswer == currentAnimal) {
    gameState = `success`
  } else if (currentAnswer !== currentAnimal) {
    gameState = `fail`
  }
  showAnimalString();
}


//Show the animal whether you got it or not, but gives you appropriate color and feedback
function showAnimalString() {
  //You succeeded. Gives you nice voice feedback + showcases the answer in green
  if (gameState === `success`) {
    let goodAnswerReaction = random(goodAnswerResponses);
    responsiveVoice.speak(goodAnswerReaction);
    fill(0, 255, 0)
  }
  //You failed. Gives you not-so-nice voice feedback + showcases your answer in red
  else if (gameState === `fail`) {
    let wrongAnswerReaction = random(wrongAnswerResponses);
    responsiveVoice.speak(wrongAnswerReaction);
    fill(255, 0, 0)
  }
  text(currentAnimal, width / 2, height / 2)
  console.log(currentAnimal)
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
  f
}