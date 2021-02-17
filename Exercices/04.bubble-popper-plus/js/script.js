"use strict";

/*****************
Exercice 04 : bubble popper plus
Sarah Hontoy-Major

Pop bubbles with you index with sound effect, score is displayes in the background.
Speed increases everytime you pop a bubble, but score decreases if the bubble gets to the height without being popped.
******************/

//Declare variables
let video = undefined;
let handpose = undefined;
let predictions = [];
let bubble = undefined;

let popSound = undefined;
let bubblePopped = 0

//Preload bubble popping sound effect
function preload() {
  popSound = loadSound(`assets/sounds/comedy_bubble_pop_001.mp3`)
}


//Setup a smol canvas; handpose with webcam input to create pin; create bubble object
function setup() {
  createCanvas(640, 480);

  //access user's webcame and then hides the new html element
  video = createCapture(VIDEO);
  video.hide();

  //Load handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    console.log(`model loaded`);
  });

  //Listen for predictions
  handpose.on(`predict`, function(results) {
    // console.log(results);
    predictions = results;
  });

  //the bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  }
}

//Set background,
function draw() {
  background(0);

  drawPin();
  checkImpact();
  drawBubble();
  displayScore();

}

function drawPin() {
  //set the tip and base of index as coordinates for pin position, draw pin and red base
  if (predictions.length > 0) {
    let hand = predictions[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    //draw pin
    push()
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    //draw the red base of pin
    push()
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    // If pin touches bubble, bubble reset at bottom of screem, score and speed increase and pop sound effect plays
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size / 2) {
      bubble.x = random(width);
      bubble.y = height;
      bubble.vy--;
      bubblePopped++;
      if (!popSound.isPlaying()) {
        popSound.play();
      }
    }
  }
}


function drawBubble() {
  //Move the bubble
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  //If bubble gets at the height, resets at random width at bottom of screen and decreases the score
  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
    bubblePopped--;
  }

  //Display the bubble
  push();
  fill(0, 255, 0);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();

}

//display Score
function displayScore() {
  push()
  textStyle(BOLD)
  textFont(`courier`)
  textSize(750)
  textAlign(CENTER)
  fill(0, 255, 0, 50)
  text(bubblePopped, width / 2, height)
  pop()
}