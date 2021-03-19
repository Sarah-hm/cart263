"use strict";

/*****************

Exercice 06 : Raving redactionist plus
Sarah Hontoy-Major

******************/
let scribbleSound = new Audio(`assets/sounds/zapsplat_office_pen_gel_scribble_color_in_paper_pad_005_40223.mp3`)

// function preload() {
//   scribbleSound = loadSound()
// }

$(`.top-secret`).on(`click`, redact);

setInterval(revelation, 500);


function redact(event) {
  playScribbleSound();
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);

}

function playScribbleSound() {
  scribbleSound.play();
}

function revelation() {
  $(`.redacted`).each(attemptReveal);
}

function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
}