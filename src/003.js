//Largest prime factor
//Problem 3
//
//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?

/**
 *
 * @param {Number} number
 * @returns {Number}
 */
(function largestPrimeFactor(number) {
  'use strict';
  var getPrimeFactors = function(number) {
    var factors = [];
    var result = 2;
    var limit = Math.ceil(Math.sqrt(number));
    while (result <= limit) {
      if (number % result) {
        result > 2 ? result += 2 : result = 3;
      } else {
        number /= result;
        limit = Math.ceil(Math.sqrt(number));
        factors.push(result);
      }
    }
    if (number !== 1) {
      factors.push(number);
    }
    return factors;
  };
  return getPrimeFactors(number).reduce(function(current, next) {
    return current > next ? current : next;
  }, 0);
})(600851475143);
