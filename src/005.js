//Smallest multiple
//Problem 5
//
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function main() {
  var i = 1;
  var j = 1;
  var found = false;
  while (i++) {
    found = true;
    j = 1;
    for (j; j <= 20; j++) {
      if (i % 19 !== 0) {
        found = false;
        break;
      }
      if (i % j !== 0) {
        found = false;
        break;
      }
    }
    if (found === true) {
      return i;
    }
  }
}