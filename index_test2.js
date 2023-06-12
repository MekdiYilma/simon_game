var randomList = [];

$(document).keypress(function () {
  $("h1").text("Level 1");
  randomNum = generateRandomNumber();
  highlightButton(randomNum);
  randomList.push(randomNum);
});

function generateRandomNumber() {
  randomNum = Math.floor(Math.random() * 4);
  return randomNum;
}

function highlightButton(index) {
  document.querySelectorAll(".rounded-square")[index].style.visibility =
    "hidden";
  setTimeout(function () {
    document.querySelectorAll(".rounded-square")[index].style.visibility =
      "visible";
  }, 100);
}

var colorDict = {
  green: 0,
  yellow: 1,
  red: 2,
  blue: 3,
};

function compareLists(list1, list2) {
  for (i = 0; i < list2.length; i++) {
    if (list1[i] === list2[i]) {
      return true;
    } else {
      return false;
    }
  }
}

var gameList = [];

$(".rounded-square").click(function (event) {
  var color = event.target.classList[1];
  gameNum = colorDict[color];
  gameList.push(gameNum);

  if (compareLists(randomList, gameList) === true) {
    console.log("randomList.length is " + randomList.length);
    $("h1").text("Level " + randomList.length);
    console.log("random " + randomList);
    console.log("game " + gameList);
  } else {
    $("h1").text("Game Over");
  }
});

// randomNum = generateRandomNumber();
// highlightButton(randomNum);
// randomList.push(randomNum);
