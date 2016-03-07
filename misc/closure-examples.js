CLOSURES! Examples from Code School Javascript Roadtrip Part 3

function mystery() {
  var secret = 6;
  function mystery2(multiplier) {
    multiplier *= 3;
    return secret * multiplier;
  }
  return mystery2;
}

var hidden = mystery();
var result = hidden(3);
console.log(result)

console.log(mystery()(3))


// Another example

function warningMaker(obstacle) {
  return function(number, location) {
    alert("Beware! There have been " + obstacle +
          " sightings in the Cove today!\n" +
          number + " have been spotted at the " +
          location + "!");
  };
}

var killerPenguinAlert = warningMaker("killer penguin");
var polarBearAlert     = warningMaker("polar bear");
var icebergAlert       = warningMaker("iceberg");
var flashBlizzardAlert = warningMaker("flash blizzard");
var snowYetiAlert      = warningMaker("snow yeti");

// call the two functions here
killerPenguinAlert(6, "Ice Caves");
snowYetiAlert(1, "Blizzard Beach");



// Self Practice:


function mysterySum() {
  var secretNum = 8;
  var sum = function(num) {
    return sum = secretNum + num
  }
  return sum;
}


// console.log(mysterySum()(2))

function mysterySum2() {
  var secretNum = 2; 
  return function sum(num) {
    secretNum += 8;
    return secretNum + num;
  };
}

console.log(mysterySum2()(2))