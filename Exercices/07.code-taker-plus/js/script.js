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

$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`#answer`).droppable({
  drop: function(even, ui) {
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);

    //Check if they got it
    if ($(this).text() === `Theremin`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});