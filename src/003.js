//Largest prime factor
//Problem 3
//
//The prime factors of 13195 are 5, 7, 13 and 29.
//
//What is the largest prime factor of the number 600851475143 ?

function main() {
  var number = 600851475143;

  function findLargestPrimeFactor(number) {
    var largestPrimeFactor = 2;
    while (number > largestPrimeFactor) {
      if (number % largestPrimeFactor !== 0) {
        largestPrimeFactor++;
      }
      if (number % largestPrimeFactor === 0) {
        number = number / largestPrimeFactor;
      }
    }
    return largestPrimeFactor;
  }

  return findLargestPrimeFactor(number);
}