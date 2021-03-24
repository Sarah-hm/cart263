/**
Activity 07: code taker
Sarah Hontoy-Major
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
      $(thiss).dialog(`close`);
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