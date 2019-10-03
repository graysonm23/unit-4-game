var crystal = {
  blue: {
    name: "Blue",
    value: 0
  },
  green: {
    name: "Green",
    value: 0
  },
  white: {
    name: "White",
    value: 0
  },
  purple: {
    name: "Purple",
    value: 0
  }
};
var currentScore = 0;
var targetScore = 0;

var winsCount = 0;
var lossCount = 0;
var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

var startGame = function() {
  currentScore = 0;
  targetScore = randomNumber(19, 120);

  $("#yourScore").html(currentScore);
  $("#targetScore").html(targetScore);

  crystal.blue.value = randomNumber(1, 12);
  crystal.purple.value = randomNumber(1, 12);
  crystal.white.value = randomNumber(1, 12);
  crystal.green.value = randomNumber(1, 12);
};

var addValues = function(crystal) {
  currentScore += crystal.value;

  $("#yourScore").html(currentScore);

  checkWin();

  console.log(currentScore);
};

var checkWin = function() {
  if (currentScore > targetScore) {
    alert("Sorry, You Lost!");

    lossCount++;
    $("#lossCount").html(lossCount);
    startGame();
  } else if (currentScore === targetScore) {
    alert("Congratulations, You Win!");

    winsCount++;
    $("#winCount").html(winsCount);
    startGame();
  }
};

startGame();
$("#blue").click(function() {
  addValues(crystal.blue);
});
$("#purple").click(function() {
  addValues(crystal.purple);
});
$("#white").click(function() {
  addValues(crystal.white);
});
$("#green").click(function() {
  addValues(crystal.green);
});
