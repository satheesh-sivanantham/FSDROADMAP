//Do the program using anonymous function & IIFE

//a. Print odd nummbers in an array 
//Anonymous Functions 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findOdd(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      console.log(numbers[i])
    }
  }
}

findOdd(numbers);


//IIFE
(function () {
  var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  var oddArray = [];
  numbers.filter(function (element) {
    if (element % 2 !== 0) {
      oddArray.push(element)
    }
  })
  console.log('Odd numbers in the array:', oddArray);
})()
//----------------------------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array

//Anonymous Functions 
let strings = ["hello", "world", "javascript", "example"];

let titleCaseStrings = strings.map(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log("Strings in title case:", titleCaseStrings);

//IIFE
(function () {
  var stringArray = ["hello", "world", "javascript", "example"];

  for (var i = 0; i < stringArray.length; i++) {
    stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }

  console.log(stringArray);
})();
//----------------------------------------------------------------------------------------

//c. Sum of all numbers in an array

//Anonymous Functions 
var counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

function sumofnumbers(num) {
  for (var i = 0; i < num.length; i++) {
    sum += counts[i];
  }
  console.log('Sum values:', sum)
}
sumofnumbers(counts);

//IIFE
(function () {
  var counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let sum1 = 0;
  for (var i = 0; i < counts.length; i++) {
    sum1 += counts[i];
  }

  console.log('Sum of array values:', sum1)
})();
//----------------------------------------------------------------------------------------

//d.Return all the prime numbers in an array

//Anonymous Functions 
let unknownNumbers = [2, 13, 44, 5, 8, 17, 22, 9, 210];
function findPrimeNumbers(numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log('Prime numbers', numArray);
}
findPrimeNumbers(unknownNumbers);

//IIFE
(function (numArray) {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log('Prime', numArray);
})([2, 13, 44, 5, 8, 17, 22, 9, 210])

//----------------------------------------------------------------------------------------

//g.Remove duplicates from an array
//Anonymous Functions 
function findDup(array) {
  let dup = [...new Set(array)];
  console.log('Remove Dup:', dup);
}

findDup([1, 1, 2, 3, 3, 4]);

//IIFE
(function (array) {
  let dup = [...new Set(array)];
  console.log(dup);
})([1, 1, 2, 2, 3, 4])

//----------------------------------------------------------------------------------------

//h.Rotate an array by k times

//Anonymous Functions 
function rotateArray(arr, k) {
  k = k % arr.length;

  // Rotate the array using slice and concatenation
  let rotated = arr.slice(k).concat(arr.slice(0, k));

  console.log("Rotated array:", rotated);
}

rotateArray([1, 2, 3, 4, 5], 10);

//IIFE
(function (arr, k) {
  k = k % arr.length;

  // Rotate the array using slice and concatenation
  let rotated = arr.slice(k).concat(arr.slice(0, k));

  console.log("Rotated array:", rotated);
})([1, 2, 3, 4, 5, 6, 8], 20)
//----------------------------------------------------------------------------------------
//f. Return median of two sorted arrays of the same size.

//Anonymous Functions 
function findMedian(arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort(function (a, b) {
    return a - b;
  });

  let length = merged.length;
  let mid = Math.floor(length / 2);
  let median;
  if (length % 2 === 0) {
    // If the length is even, return the average of the two middle elements
    median = (merged[mid - 1] + merged[mid]) / 2;
    // return median
  } else {
    // If the length is odd, return the middle element
    median = merged[mid];
    // return median
  }
  console.log(median)

};

findMedian([1, 3, 5], [2, 4, 6]);

//IIFE
(function (arr1, arr2) {
  let merged = arr1.concat(arr2);
  merged.sort(function (a, b) {
    return a - b;
  });

  let length = merged.length;
  let mid = Math.floor(length / 2);
  let median;
  if (length % 2 === 0) {
    // If the length is even, return the average of the two middle elements
    median = (merged[mid - 1] + merged[mid]) / 2;
    // return median
  } else {
    // If the length is odd, return the middle element
    median = merged[mid];
    // return median
  }
  console.log(median)
})([1, 3, 5], [2, 4, 6])
//----------------------------------------------------------------------------------------
//Anonymous Functions 
let words = ["level", "hello", "radar", "world", "civic"];

let isPalindrome = function (word) {
  return word === word.split("").reverse().join("");
};

let palindromes = words.filter(function (word) {
  return isPalindrome(word);
});

console.log("Palindromes in the array:", palindromes);

//IIFE
(function () {
  var words = ["level", "radar", "hello", "noon", "world"];

  function isPalindrome(word) {
    // Convert the word to lowercase to handle case-insensitive comparisons
    var lowerWord = word.toLowerCase();
    // Reverse the word
    var reversedWord = lowerWord.split('').reverse().join('');
    // Check if the word is equal to its reversed form
    return lowerWord === reversedWord;
  }

  var palindromes = [];
  for (var i = 0; i < words.length; i++) {
    if (isPalindrome(words[i])) {
      palindromes.push(words[i]);
    }
  }

  console.log("Palindromes in the array:", palindromes);
})();

//Arrow Functions 
//a.Print odd numbers in an array
oddNumbers = (array) => {
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      console.log(array[i])
    }
  }
}
oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//----------------------------------------------------------------------------------------

//b. Convert all the strings to title caps in a string array
titleCase = (str) => {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}

console.log(titleCase("MUDRA IS MY NAME"));
//----------------------------------------------------------------------------------------
//c.Sum of all numbers in an array
let array = [1, 2, 3, 4];
sum = (array) => {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sum(array));
//----------------------------------------------------------------------------------------
//d.Return all the prime numbers in an array
let numArray = [1, 2, 3, 4, 5, 6]
primeNumber = (numArray) => {
  numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) return false;
    }
    return true;
  });
  console.log(numArray);
}
primeNumber(numArray);
//----------------------------------------------------------------------------------------
//e.Return all the palindromes in an array
const words1 = ["level", "radar", "hello", "noon", "world"];

const isPalindrome1 = word => {
  const lowerWord = word.toLowerCase();
  const reversedWord = lowerWord.split('').reverse().join('');
  return lowerWord === reversedWord;
};

const palindromes1 = words.filter(word => isPalindrome1(word));

console.log("Palindromes in the array:", palindromes);
//----------------------------------------------------------------------------------------
