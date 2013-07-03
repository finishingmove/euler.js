//Summation of primes
//Problem 10
//
//The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
//
//Find the sum of all the primes below two million.

/**
 *
 * @param {type} n
 * @returns {@exp;@call;getPrimeFactors@call;reduce}
 */
(function sumOfPrimesUpToN(n) {
  // TODO implement isPrime()
  'use strict';
  var result = 2;
  var current = 3;
  var isPrime = true;
  var limit;
  while (current < n) {
    isPrime = true;
    limit = Math.floor(Math.sqrt(current)) + 1;
    for (var i = 2; i < limit; i++) {
      if (current % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      result += current;
    }
    current > 2 ? current += 2 : current = 3;
  }
  return result;
})(2000000);