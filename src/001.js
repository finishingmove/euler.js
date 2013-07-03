//Multiples of 3 and 5
//Problem 1
//
//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
//Find the sum of all the multiples of 3 or 5 below 1000.

/**
 * @param {Number} limit
 * @param {Array} paramList
 * @returns {Number}
 */
(function sumOfMultiples(limit, paramList) {
  'use strict';
  var result = 0;
  for (var i = 1; i < limit; i++) {
    for (var j = 0, length = paramList.length; j < length; j++) {
      if (i % paramList[j] === 0) {
        result += i;
        break;
      }
    }
  }
  return result;
})(1000, [3, 5]);