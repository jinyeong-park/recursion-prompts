/* jshint esversion: 6 */

// Solve the following prompts using recursion.

// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
  // If the number is negative, it doesn't have a factorial. Return an
  // impossible value to indicate this.
  if (n < 0) {
    return null;
  }

  // If the number is zero, its factorial is one.
  if (n === 0) {
    return 1;
  }

  // If the number is neither illegal nor zero, call factorial again,
  // this time passing in a smaller number. Eventually we'll reach 0,
  // causing each call to return to its caller and the recursion terminates.
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
  var result = 0;
  //return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
  if (array.length === 0) {
    return 0;
  } else {
    return (result += array[0] + sum(array.slice(1)));
  }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
// var sum = function(array) {
//   return array.length === 0 ? 0 : array[0] + sum(array.slice(1));
// };

// var sum = function(array) {
//   var result = 0;
//   var newArr = array.slice(1);
//   result += array[0];
//   if (array.length === 0) {
//     return 0;
//   }
//   return result + sum(newArr);
// };

// 3. Sum all numbers in an array containing nested arrays.  ☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆☆
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  //array.join().split(",");
  return array.length === 0
    ? 0
    : parseInt(array.join().split(",")[0]) +
        arraySum(
          array
            .join()
            .split(",")
            .slice(1)
        );
};
//Number()/ parseInt()

// var arraySum = function(array) {
//     array = array.join().split(',');
//     var result = 0;
//     var newArr = array.slice(1);
//     result += Number(array[0]);
//     if (array.length === 1) {
//         return Number(array[0]);
//     }
//     return result + arraySum(newArr);
// };

// 4. Check if a number is even.  (cf. 8. power of Two)
var isEven = function(n) {
  // n < 0
  n = Math.abs(n);
  //n === 0
  if (n === 0) {
    return true;
  } else if (n === 1) {
    return false;
  }
  //var n = Number.isInteger(n / 2)
  return isEven(n - 2);
};
// without using recursion fn
// var isEven = function(n) {
//   // n < 0
//   //n = Math.abs(n)
//   //n === 0
//   if (n === 0) {
//     return true;
//   } else {
//     return Number.isInteger(n / 2) ? true : false;
//   }
// };

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//(-3) => -2 -1 => -3
//3 => 2 + 1 + 0 => 3
//5 => 4 + 3 + 2 + 1 => 10
var sumBelow = function(n) {
  //case1 => n = 0
  if (n === 0) {
    return 0;
  }
  // case2 => n > 0
  if (n > 0) {
    n = n - 1;
    // case 3 => n < 0
  } else {
    n = n + 1;
  }
  return n + sumBelow(n);
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
// range(9,2); // [8,7,6,5,4,3]
var range = function(x, y) {
  //if (x === y || )
  var result = [];
  //if (x === y || x + 1 === y) {
  if (x === y || x + 1 === y || x - 1 === y) {
    return result;
  }

  if (x < y) {
    result.push(x + 1);
    // range(x + 1, y);
    return result.concat(range(x + 1, y));
  } else {
    result.push(x - 1);
    return result.concat(range(x - 1, y));
  }
  return result;
};

// // 6. Get the integers within a range (x, y).
// // range(2,9); // [3,4,5,6,7,8]
// var range = function(x, y) {
//     var result = [];
//     if (x === y || x + 1 === y ||x - 1 === y) {
//         return result;
//     }
//     if (x < y ) {
//        x = x + 1;
//     } else {
//         x = x -1;
//     }
//     result.push(x);
//     return result.concat(range(x, y));
// };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// exponent(4,0); // 1
// 4 * 4 * 4
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number

var exponent = function(base, exp) {
  //   if (exp === 0) {
  //     return 1;
  //   } else if (exp > 0) {
  //     //toFixed(wanted digit) : format numbers in javascript to two decimal digits
  //     return base * exponent(base, exp - 1).toFixed(4);
  //   } else {
  //     return (1 / base) * exponent(base, exp + 1).toFixed(4);
  //   }
  // };
  if (exp === 0) {
    return 1;
  }
  // optimize for even numbers
  if (exp > 0) {
    if (exp - 2 >= 0) {
      return base * base * exponent(base, exp - 2);
    } else {
      return base * exponent(base, exp - 1);
    }
  } else {
    if (exp + 2 <= 0) {
      return (
        ((1 / base) * (1 / base)).toFixed(4) *
        exponent(base, exp + 2).toFixed(4)
      );
    } else {
      return (1 / base) * exponent(base, exp + 1).toFixed(4);
    }
  }
};
//parseFloat( num.toFixed(2) )
// var exponent = function(base, exp) {
//   var result = 1;
//   if (exp === 0) {
//     return result;
//   }
//   //unnecessary code
//   //   if (exp === 1) {
//   //     return base;
//   //   }
//   if (exp > 0) {
//     return base * exponent(base, exp - 1);
//   } else {
//     //modifedExp = -exp;
//     return (1 / base) * exponent(1 / base, exp - 1);
//   }
// };

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  if (n === 0) {
    return false;
  }
  // only this case, true
  if (n === 1) {
    return true;
  } else if (!Number.isInteger(n / 2)) {
    return false;
  } else {
    return powerOfTwo(n / 2);
  }
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string === "") {
    return "";
  }

  var result = "";
  arr = string.split("");
  result += arr.pop();
  return result + reverse(arr.join(""));
  //return result + reverse(arr);
};

// 9. Write a function that reverses a string.
// var reverse = function(string) {
//   if (string === "") {
//     return "";
//   }

//   string = string.split("");
//   return (
//     string.slice(string.length - 1).join("") +
//     reverse(string.join("").substring(0, string.length - 1))
//   );
// };

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  // string.length === 0   , string = ''
  if (string.length === 1 || string.length === 0) {
    return true;
  }
  var arr = string.toLowerCase().split("");
  //var arr = string.split("").toLowerCase(); //.toLowerCase() => string method

  //compare 0 index & last index
  if (arr[0] === arr[arr.length - 1]) {
    //result = arr.pop();
    arr.pop();
    //result = arr.shift();
    arr.shift();
    return palindrome(arr.join(""));
  } else {
    return false;
  }
};

// 11. difficult question!!!!
//Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
// modulo(-79 % 82) // -79
// modulo((-4 % 2) // -0
// var modulo = function(x, y) {
//   // fraction characters -
//   //denominator = 0 => NaN
//   if (y === 0) {
//     return NaN;
//   }
//   //numerator = 0  => 0
//   if (x === 0) {
//     return 0;
//   }
//   // Cases for positive & negative combinations
//   if (x > 0 && x < y) {
//     return x;
//   }
//   if ((x < 0 && y < 0 && x > y) || (x < 0 && y > 0 && x + y > 0)) {
//     return x;
//   } else if (x < 0 && y > 0) {
//     return modulo(x + y, y);
//   }
//   return modulo(x - y, y);
// };

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  if (y === 0) {
    return NaN;
  }
  if (x === 0) {
    return 0;
  }

  if (x > 0 && x < y) {
    return x;
  }

  if (x < 0 && y < 0 && x > y) {
    return x;
  } else if (x < 0 && y > 0 && x + y > 0) {
    return x;
  } else if (x < 0 && y > 0) {
    return modulo(x + y, y);
  }
  return modulo(x - y, y);
};

// var modulo = function(x, y) {
//   if (y === 0) {
//     return NaN;
//   } else if (
//     (x < y && x >= 0 && y >= 0) ||
//     (x < -y && y < 0 && x >= 0) ||
//     (-x < y && x < 0 && y >= 0) ||
//     (-x < -y && x < 0 && y < 0)
//   ) {
//     return x;
//   }
//   if ((x >= 0 && y >= 0) || (x <= 0 && y <= 0)) {
//     return modulo(x - y, y);
//   }
//   return modulo(x + y, y);
// };

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

//var result = 0;
// if (x > 0 && y < 0) {
//   result += x;
//   return -x + multiply(x, y + 1);
// } else if (x < 0 && y < 0) {
//   return -x + multiply(x, y + 1);
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
    return 0;
  }

  if (y > 0) {
    return x + multiply(x, y - 1);
  } else {
    return -x + multiply(x, y + 1);
  }
};

// var multiply = function(x, y) {
//   if (x === 0 || y === 0) {
//     return 0;
//   }
//   if (y > 0) {
//     return x + multiply(x, y - 1);
//   } else {
//     return -x + multiply(x, y + 1);
//   }
// };

// 13. Write a function that divides two numbers without using the / operator or
// Math methods to arrive at an approximate quotient (ignore decimal endings).
// var divide = function(x, y) {

var divide = function(x, y) {
  if (y === 0) return NaN;
  if (x === 0) return 0;
  if (y === 1) return x;
  var result = 0;

  if (x < y) {
    return 0;
  }
  if (x < 0 && y < 0 && x > y) {
    return 0;
  }
  result++;
  return result + divide(x - y, y);
};

// //
// var divide = function(x, y) {
//   if (y === 0) {
//     return NaN;
//   } else if (
//     (x < y && x >= 0 && y >= 0) ||
//     (x < -y && y < 0 && x >= 0) ||
//     (-x < y && x < 0 && y >= 0) ||
//     (-x < -y && x < 0 && y < 0)
//   ) {
//     return 0;
//   }
//   if ((x >= 0 && y >= 0) || (x <= 0 && y <= 0)) {
//     return 1 + divide(x - y, y);
//   }
//   return divide(x + y, y) - 1;
// };

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// https://www.cse.wustl.edu/~ychen/131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
  if (x < 0 || y < 0) {
    return null;
  }
  // both x > 0  && y > 0
  if (x > y) {
    if (x % y === 0) {
      return y;
    } else {
      return gcd(y, x % y);
    }
  } else {
    if (y % x === 0) {
      return x;
    } else {
      return gcd(x, y % x);
    }
  }
};

// 15. compare String (substring / slice )
//Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
//
var compareStr = function(str1, str2) {
  if (str1.length === 0 && str2.length === 0) return true;
  if (str1.length === 0 || str2.length === 0) return false;

  if (
    str1.substring(0, 1) === str2.substring(0, 1) &&
    str1.length === str2.length
  ) {
    return true;
  } else {
    return compareStr(str1.substring(1), str2.substring(1));
  }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.

// var createArray = function(str) {
//   if (str.length === 0) {
//     return [];
//   }
//   str = str.split("");
//   var result = [];
//   result.push(str[0]);
//   return createArray(str);
// };

var createArray = function(str) {
  if (str.length === 0) {
    return [];
  }
  return str[0].split("").concat(createArray(str.substring(1)));
};

// 17. Reverse the order of an array
var reverseArr = function(array) {
  if (array.length === 1) {
    return array;
  }
  // var result = [];
  // result.push(array.pop())
  //array.pop();
  return [array[array.length - 1]].concat(
    reverseArr(array.slice(0, array.length - 1))
  );
};

// var reverseArr = function(array) {
//   if (array.length === 0 || array.length === 1) {
//       return array;
//   }
//   return array.slice(array.length - 1).concat(reverseArr(array.slice(0,array.length - 1)));
// };

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // value and print length times
  if (length === 0) {
    return [];
  }
  var array = [];
  array.push(value);
  //buildList(value, length - 1);
  return array.concat(buildList(value, length - 1));
};

// var buildList = function(value, length) {
//   if (length === 0) {
//       return [];
//   }
//   return [value].concat(buildList(value, length - 1));
// };

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  // '1', '2', 'Fizz', 4, 'Buzz', 6, 7,.....14, 'FizzBuzz', 16
  var result = [];
  if (n === 0) {
    return result;
  }
  // 15 first otherwise it will show Fizz instead of FizzBuzz
  if (n % 15 === 0) {
    result.push("FizzBuzz");
  } else if (n % 3 === 0) {
    result.push("Fizz");
  } else if (n % 5 === 0) {
    result.push("Buzz");
  } else {
    result.push(n.toString());
  }
  return fizzBuzz(n - 1).concat(result);
};

// inside empty array => push & unshift are the same.?
// var fizzBuzz = function(n) {
//   var result = [];

//   if (n === 0) return result;

//   if (n % 15 === 0) {
//     result.unshift("FizzBuzz");
//   } else if (n % 5 === 0) {
//     result.unshift("Buzz");
//   } else if (n % 3 === 0) {
//     result.unshift("Fizz");
//   } else {
//     result.unshift(n.toString());
//   }
//   return fizzBuzz(n - 1).concat(result);
// };

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2

// using for loop
//var countOccurrence = function(array, value) {
//input: array, value
//output: value - how many times in the array?
//   count = 0;
//   for (var i = 0; i < array.length; i++){
//     if (array[i] === value) {
//       count++
//     }
//   }
// return count;

var countOccurrence = function(array, value) {
  //using recursion
  var count = 0;
  if (array.length === 0) return 0;
  if (array[0] === value) count++;
  return count + countOccurrence(array.slice(1), value);
};

// var countOccurrence = function(array, value) {
//   if (array.indexOf(value) === -1) {
//       return 0;
//   } else {
//       for (var i = 0; i < array.length; i++) {
//           if (array[i] === value) {
//               array.splice(i,1);
//               return 1 + countOccurrence(array, value)
//           }
//       }
//   }
// };

// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
// var rMap = function(array, callback) {
//   if (array.length === 0) {
//     return [];
//   }
//   return rMap(array.slice(), callback);
// };
// // var timesTwo = function(array) {
// //   var result = [];
// //   result.push(array[0] * 2);
// //   return result.concat(timesTwoo(array.slice(1)));
// // };
var rMap = function(array, callback) {
  if (array.length === 0) {
    return [];
  }
  return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;

  for (var i in obj) {
    if (i === key) {
      count++;
    }
    if (typeof obj[i] === "object") {
      count += countKeysInObj(obj[i], key);
    }
  }
  return count;
};
// var countKeysInObj = function(obj, key) {
//   var count = 0;

//   //  if (obj.key === 'undefined') return;

//   for (var i in obj) {
//     if (i === key) {
//       count += 1;
//     }
//     // console.log(i);
//     if (typeof obj[i] === "object") {
//       // console.log(obj[i]);
//       // console.log(count);
//       count += countKeysInObj(obj[i], key);
//     }
//   }
//   return count;
// };

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

var countValuesInObj = function(obj, value) {
  var count = 0;

  for (var i in obj) {
    if (obj[i] === value) {
      count++;
    }
    if (typeof obj[i] === "object") {
      count += countValuesInObj(obj[i], value);
    }
  }
  return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// console.log(replaceKeysInObj(obj, 'e', 'y'));
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var i in obj) {
    if (i === oldKey) {
      //replace key (make new key prop and delete old prop)
      obj[newKey] = obj[oldKey];
      delete obj[oldKey];
    }
    if (typeof obj[i] === "object") {
      replaceKeysInObj(obj[i], oldKey, newKey);
    }
  }
  return obj;
};

var obj = { e: { x: "y" }, t: { r: { e: "r" }, p: { y: "r" } }, y: "e" };
console.log(replaceKeysInObj(obj, "e", "y"));

//concept : how to replace key a to key b =>  add new key:same oldkey value => delete oldkey:oldvalue
var obj = { a: 1 }; //{a : 1}
for (var key in obj) {
  //obj['b'] = obj[key]
  console.log(obj);
  obj["b"] = obj[key]; // {a : 1, b : 1}
  console.log(obj);
  //delete old key
  delete obj[key]; // {b : 1}
}
console.log(obj);

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]

// [0,1,1,2,3,5,8,13,21]

// fibonacci(1) :  [0, 1]
// 2 [0, 1, 1]
// 3 [0, 1, 1] + [1+1] -> [0, 1, 1, 2]
// 4 [0, 1, 1, 2] + [1+2] -> [0, 1, 1, 2, 3]
// 5 [0, 1, 1, 2, 3] + [2+3] -> [0, 1, 1, 2, 3, 5]

// Note: The 0 is not counted.
var fibonacci = function(n) {
  // fibonacci number doesn exist if n is 0 or less than 0

  if (n < 0) return null;
  if (n === 0) return null;
  if (n === 1) return [0, 1];
  if (n === 2) return [0, 1, 1];
  // var result = [];
  // result.push(n);
  return fibonacci(n - 1).concat(
    fibonacci(n - 1)[fibonacci(n - 1).length - 1] +
      fibonacci(n - 2)[fibonacci(n - 2).length - 1]
  );
};

// var fibonacci = function(n) {
//   if (n <= 0) {
//     return null;
//   }
//   if (n === 1) {
//     return [0, 1];
//   }
//   return fibonacci(n - 1).concat(
//     fibonacci(n - 1)[fibonacci(n - 1).length - 2] +
//       fibonacci(n - 1)[fibonacci(n - 1).length - 1]
//   );
// };
// console.log(fibonacci(5));

// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// // nthFibo(3); // 2
var nthFibo = function(n) {
  if (n < 0) return null;
  if (n === 0) return 0;
  if (n <= 1) return 1;
  return nthFibo(n - 1) + nthFibo(n - 2);
};

//console.log(fibonacci(8))

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  // var result = [];
  if (array.length === 0) {
    return array;
    //return [];
  }
  // array[0].toUpperCase();
  // var newArr = array.slice();
  return [array[0].toUpperCase()].concat(capitalizeWords(array.slice(1)));
};

// var capitalizeWords = function(array) {
//   var newArray = [];
//   if (array.length === 0) return array;
//   var str = array.shift();
//   newArray.push(str.toUpperCase());
//   return newArray.concat(capitalizeWords(array));
// };

// var words = ["i", "am", "learning", "recursion"];
// capitalizeWords(words);

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) {
    return array;
  }
  // + string.substring(1) : index 1~
  // + string.slice(1) : index 1~
  return [array[0][0].toUpperCase() + array[0].substring(1)].concat(
    capitalizeFirst(array.slice(1))
  );
};

// var capitalizeFirst = function(array) {
//   var newArray = [];
//   if (array.length === 0) return array;
//   var str = array.shift()
//   newArray.push(str[0].toUpperCase() + str.substring(1).toLowerCase());
//   return newArray.concat(capitalizeFirst(array));
// };

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;

  for (var i in obj) {
    if (obj[i] % 2 === 0) {
      sum += obj[i];
    }
    if (typeof obj[i] === "object") {
      sum += nestedEvenSum(obj[i]);
    }
  }
  return sum;
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
//array.join() ==> remove all square bracket
//array.join().split(",")  ==> make array
// Number(array.join().split(",")[0]) ==> make string ele to number element

var flatten = function(array) {
  if (array.length === 0) {
    return;
  }
  var result = [];
  for (var i of array) {
    if (Array.isArray(i) && i.length > 0) {
      result = result.concat(flatten(i));
    } else if (i.length !== 0) {
      result.push(i);
    }
  }
  return result;
};

//var a = ([1,[2],[3,[[4]]],5]);

// var flatten = function(array) {
//   if (array.length === 0) {
//     return [];
//   }
//   // how to remove 0 => if (array.join().split(",")[0] !== "")
//   if (array.join().split(",")[0] !== "") {
//     return [Number(array.join().split(",")[0])].concat(
//       flatten(
//         array
//           .join()
//           .split(",")
//           .slice(1)
//       )
//     );
//   } else {
//     return [Number(array.join().split(",")[1])].concat(
//       flatten(
//         array
//           .join()
//           .split(",")
//           .slice(2)
//       )
//     );
//   }
// };

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {};

// 33. Augment every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {};

// *** EXTRA CREDIT ***

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {};
