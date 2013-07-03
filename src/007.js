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
  var primes = [2, 3];
  var current;
  var next;
  var isPrime;
  while (primes.length < n) {
    current = primes[primes.length - 1];
    next = next || current + 1;
    isPrime = true;
    for (var i = 2; i < next; i++) {
      if (next % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(next);
    }
    next % 2 ? next += 2 : next += 1;
  }
  return primes[primes.length - 1];
})(10001);