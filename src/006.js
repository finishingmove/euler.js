//Sum square difference
//Problem 6
//
//The sum of the squares of the first ten natural numbers is,
//1^2 + 2^2 + ... + 10^2 = 385
//The square of the sum of the first ten natural numbers is,
//(1 + 2 + ... + 10)^2 = 552 = 3025
//Hence the difference between the sum of the squares of the first ten natural
//numbers and the square of the sum is 3025  385 = 2640.
//Find the difference between the sum of the squares of the first one hundred
//natural numbers and the square of the sum.

function main() {
  var numbers = [];
  var sumOfSquares = 0;
  var squareOfSums = 0;
  var i = 0;
  while (i <= 100) {
    numbers.push(i);
    sumOfSquares += Math.pow(i, 2);
    i += 1;
  }
  squareOfSums = Math.pow(numbers.reduce(function(current, next) {
    return current + next;
  }), 2);
  return  squareOfSums - sumOfSquares;
}