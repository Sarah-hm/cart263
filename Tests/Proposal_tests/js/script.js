/**
Activity 07: code taker
Sarah Hontoy-Major

This is a really effy exercice, but it is part of the start of my proposal for project 2.
I was interested in testing things out in order to create a 'dress up' game so I used
very basic assets just to get around to making a small prototype.
*/

"use strict";

$(`#introduction-dialog`).dialog({
  resizable: false,
  height: "auto",
  modal: true,
  buttons: {
    "Tiguidou": function() {
      $(this).dialog("close");
    }
  }
});

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know.": function() {
      $(this).dialog(`close`);
    }
  }
})

$(`.clothes`).on(`mouseover`, function(event) {
  $(this).addClass("found");
  $(this).draggable({
    // helper: `clone`
  });
});

$(`#mannequin`).droppable({
  drop: function(even, ui) {}
});