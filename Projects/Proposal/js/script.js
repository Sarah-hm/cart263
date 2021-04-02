/**
Proposal for Project 2
Sarah Hontoy-Major

This is my proposal for project 2.
*/
let canvas = undefined;

"use strict";

//From coding train sketch as background
function windowResize() {
  resiveCanvas(windowWidth, windowHeight);
}


function setup() {
  //Put p5 sketch as background of entire html body,
  // From coding train : https://www.youtube.com/watch?v=OIfEHD3KqCg&ab_channel=TheCodingTrain
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1')
  canvas.parent("#canvas")
}

function draw() {
  background(175);
}

$(`#intro-dialogue`).dialog({
  resizable: false,
  draggable: false,
  width: '100%',
  height: "auto",
  modal: true,
  position: {
    my: "left bottom",
    at: "left bottom",
    of: "body"
  },
  buttons: {
    "Tiguidou": function() {
      $(this).dialog("X");
    }
  }
});