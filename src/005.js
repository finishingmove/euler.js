//Smallest multiple
//Problem 5
//
//2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
//What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

function main() {
  var i = 2520;
  var j = 1;
  var found = false;
  for (i; ; i += 2520) {
    found = true;
    j = 1;
    for (j; j <= 20; j++) {
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