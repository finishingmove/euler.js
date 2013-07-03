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
  var result = 2;
  while (number > result) {
    number % result ? result > 2 ? result += 2 : result += 1 : number /= result;
  }
  return result > number ? result : number;
})(600851475143);
