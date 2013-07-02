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
  var result = 2;
  while (number > result) {
    if (number % result !== 0) {
      result++;
    }
    if (number % result === 0) {
      number = number / result;
    }
  }
  return result;
})(600851475143);