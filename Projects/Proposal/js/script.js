/**
Proposal for Project 2
Sarah Hontoy-Major

This is my proposal for project 2.
*/

let state = `storeFront`; //Can be Store Front, inside store, changing room
let canvas = undefined;
let storeFrontImg = undefined;
let insideStoreImg = undefined;

("use strict");

function preload() {
  storeFrontImg = loadImage(`assets/images/storeFront.png`);
  // insideStoreImg = loadImage(`assets/images/insideStoreImg.png`);
}

//From coding train sketch as background
function windowResize() {
  resiveCanvas(windowWidth, windowHeight);
}

function setup() {
  //Put p5 sketch as background of entire html body,
  // From coding train : https://www.youtube.com/watch?v=OIfEHD3KqCg&ab_channel=TheCodingTrain
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  canvas.parent("#canvas");
}


//Changes state when appropriate button is clicked
$(`#enter-store-button`).on(`click`, function(event) {
  state = `insideStore`
})


//Remove dialog inside the store box when prompted
$(`#answerButton`).on(`click`, function(event) {
  $(`#changing-room-dialog`).remove();
})


$(`.appropriate-choice`).on(`mouseover`, function(event) {
  $(this).draggable({
    // helper: `clone`
  }); //
});

$(`.clothes`).on(`mouseover`, function(event) {
  $(this).draggable({
    revert: "valid",
    drag: function(event, ui) {
      console.log(event)
      //Make only a certain class revert:"valid"
    }
  }); //
});

$(`#mannequin`).droppable({
  classes: {
    "ui-droppable-active": "ui-state-active",
    "ui-droppable-hover": "ui-state-hover"
  },
  drop: function(event, ui) {

  }

});



function checkDroppedGarment() {

  //How to check if something has a specific class (`innapropriate-choice`) and react with something?
}

function draw() {
  checkState();
}

function checkState() {
  if (state === `storeFront`) {
    storeFront();
  } else if (state === `insideStore`) {
    insideStore();
  }
}

function storeFront() {
  background(storeFrontImg);
}

function insideStore() {
  background(0);
  // $(`#changing-room`).show();
}