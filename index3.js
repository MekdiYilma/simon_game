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

var soundDict = {
  0: "green",
  1: "yellow",
  2: "red",
  3: "blue",
};

function highlightButton(index) {
  document.querySelectorAll(".rounded-square")[index].style.visibility =
    "hidden";
  var audio = new Audio("./sounds/" + soundDict[index] + ".mp3");
  audio.play();
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
  for (var i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]) {
      return false;
    }
  }
  return true;
}

var gameList = [];
$(".rounded-square").click(function (event) {
  var color = event.target.classList[1];
  gameNum = colorDict[color];
  gameList.push(gameNum);
  console.log("randomlst = " + randomList);
  console.log("gamelst = " + gameList);
  for (var i = 0; i < gameList.length; i++) {
    if (randomList[i] !== gameList[i]) {
      $("h1").text("Game Over");
    }
  }

  console.log("comparison " + compareLists(randomList, gameList));

  if (compareLists(randomList, gameList) === true) {
    $("h1").text("Level " + randomList.length);
    randomNum = generateRandomNumber();
    highlightButton(randomNum);
    randomList.push(randomNum);
    gameList = [];
  }
});
