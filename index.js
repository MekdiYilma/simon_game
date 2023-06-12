$(document).keypress(function () {
  $("h1").text("Level 1");
});

function randomHighlight(level) {
  var randomList = [];
  for (var i = 0; i < level; i += 1) {
    var random = Math.floor(Math.random() * 4);
    randomList.push(random + 1);
    setTimeout(
      function (random) {
        highlightButton(random);
      },
      1000 * i,
      random
    );
  }
  return randomList;
}

function highlightButton(i) {
  document.querySelectorAll(".rounded-square")[i].style.visibility = "hidden";
  setTimeout(function () {
    document.querySelectorAll(".rounded-square")[i].style.visibility =
      "visible";
  }, 100);
}
