//Largest palindrome product
//Problem 4
//
//A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91  99.
//
//Find the largest palindrome made from the product of two 3-digit numbers.

function main() {
  var truthTest = false;
  var current = 0;
  var max = 0;
  for (var i = 100; i <= 1000; i++) {
    for (var j = 100; j <= 1000; j++) {
      current = i * j;
      truthTest = current.toString() === current.toString().split('').reverse().join('');
      if (truthTest && current > max) {
        max = current;
      }
    }
  }
  return max;
}