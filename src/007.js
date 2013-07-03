//10001st prime
//Problem 7
//
//By listing the first six prime numbers:
//2, 3, 5, 7, 11, and 13,
//we can see that the 6th prime is 13.
//
//What is the 10001st prime number?

(function nthPrimeNumber(n) {
  'use strict';
  var count = 1;
  var current = 2;
  var next;
  var limit;
  var isPrime;
  while (count <= n) {
    next = next || current;
    isPrime = true;
    limit = Math.floor(Math.sqrt(next)) + 1;
    for (var i = 2; i < limit; i++) {
      if (next % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      count += 1;
      current = next;
    }
    next % 2 ? next += 2 : next += 1;
  }
  return current;
})(10001);