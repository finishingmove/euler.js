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

//(function largestPrimeFactor(n) {
//  'use strict';
//  var gcd = function(x, y) {
//    var a = x > y ? x : y;
//    var b = x > y ? y : x;
//    var t;
//    while (b !== 0) {
//      t = b;
//      b = (a % t);
//      a = t;
//    }
//    return a;
//  };
//  var i = 1;
//  var x = Math.ceil(Math.random() * (n - 1));
//  var y = x;
//  var k = 2;
//  var d = 0;
//  while (true) {
//    i = i + 1;
//    x = (Math.pow(x, 2) - 1) % n;
//    d = gcd(y - x, n);
//    if (d > 0 && d !== 1 && d !== n) {
//      return d;
//    }
//    if (i === k) {
//      y = x;
//      k = k * 2;
//    }
//  }
//})(600851475143);

//(function largestPrimeFactor(n) {
//  'use strict';
//  var gcd = function(x, y) {
//    var a = x > y ? x : y;
//    var b = x > y ? y : x;
//    var t;
//    while (b !== 0) {
//      t = b;
//      b = (a % t);
//      a = t;
//    }
//    return a;
//  };
//  var i = 1;
//  var x = Math.ceil(Math.random() * (n - 1));
//  var y = x;
//  var k = 2;
//  var factor = 0;
//  while (factor < Math.sqrt(n)) {
//    i = i + 1;
//    x = (Math.pow(x, 2) - 1) % n;
//    factor = gcd(y - x, n);
//    if (factor > 0 && factor !== 1 && factor !== n) {
//      return factor;
//    }
//    if (i === k) {
//      y = x;
//      k = k * 2;
//    }
//  }
//})(600851475143);

//(function largestPrimeFactor(n) {
//  'use strict';
//  var result;
//  var multOfSix = 6;
//
//  if (n % 2 === 0) {
//    result = 2;
//    while (n % 2 === 0) {
//      n = n / 2;
//    }
//  }
//  if (n % 3 === 0) {
//    result = 3;
//    while (n % 3 === 0) {
//      n = n / 3;
//    }
//  }
//  while (multOfSix - 1 < n) {
//    if (n % (multOfSix - 1) === 0) {
//      result = multOfSix - 1;
//      while (n % result === 0) {
//        n = n / result;
//      }
//    }
//
//    if (n % (multOfSix + 1) === 0) {
//      result = multOfSix - 1;
//      while (n % result === 0) {
//        n = n / result;
//      }
//    }
//    multOfSix += 6;
//  }
//  return result;
//})(600851475143);
