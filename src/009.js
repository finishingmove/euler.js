//Special Pythagorean triplet
//Problem 9
//
//A Pythagorean triplet is a set of three natural numbers, a  b  c, for which,
//a^2 + b^2 = c^2
//
//For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
//
//There exists exactly one Pythagorean triplet for which a + b + c = 1000.
//Find the product abc.

/**
 *
 * @param {Number} perimeter
 * @returns {Number}
 */
(function pythagoreanTripletProduct(perimeter) {
  'use strict';
  var c = 1;
  for (var a = 1; a < perimeter; a++) {
    for (var b = 1; b < perimeter; b++) {
      c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      if (a + b + c === perimeter) {
        return a * b * c;
      }
    }
  }
})(1000);