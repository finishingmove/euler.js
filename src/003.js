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
    // result space is 2 <= x <= sqrt(number)
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
    // won't be reached since we go only up to sqrt(number)
    // but if it's not 1, it's a prime number
    if (number !== 1) {
      factors.push(number);
    }
    return factors;
  };
  return Math.max.apply(null, getPrimeFactors(number));
})(600851475143);
