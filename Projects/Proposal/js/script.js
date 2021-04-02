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
  insideStoreImg = loadImage(`assets/images/insideStore.png`);
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

  $(`#intro-dialogue`).dialog({
    resizable: false,
    draggable: false,
    width: "100%",
    height: "auto",
    modal: true,
    position: {
      my: "left bottom",
      at: "left bottom",
      of: "body",
    },
    buttons: {
      "Tiguidou": function() {
        $(this).dialog(`close`);
        state = `insideStore`
      }
    }
  });
}

function insideStore() {
  background(0)
}