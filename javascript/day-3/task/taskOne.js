//Do the program using anonymous function & IIFE

//a. Print odd nummbers in an array 
//Anonymous Functions 
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function findOdd(numbers){
    for(var i = 0 ; i< numbers.length ; i++){
          if(numbers[i]%2!=0){
             console.log(numbers[i])
          } 
     }
  }

findOdd(numbers);


//IIFE
(function (){
    var numbers = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    var oddArray = [];
    numbers.filter(function(element){
        if(element % 2 !== 0){
            oddArray.push(element)
        }
    })
    console.log('Odd numbers in the array:',oddArray);
})()
//----------------------------------------------------------------------------------------

//b.Convert all the strings to title caps in a string array

//Anonymous Functions 
let strings = ["hello", "world", "javascript", "example"];

let titleCaseStrings = strings.map(function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});

console.log("Strings in title case:", titleCaseStrings);

//IIFE
(function() {
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

function sumofnumbers(num){
    for (var i = 0; i < num.length; i++){
    sum += counts[i];
    }
console.log('Sum values:', sum)
}
sumofnumbers(counts);

//IIFE
(function(){
    var counts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sum1 = 0;
    for (var i = 0; i < counts.length; i++){
        sum1 += counts[i];
    }

console.log('Sum of array values:', sum1)
})();
//----------------------------------------------------------------------------------------

//d.Return all the prime numbers in an array

//Anonymous Functions 
let unknownNumbers = [2, 13, 44, 5, 8, 17, 22, 9,210];
function findPrimeNumbers(numArray){
    numArray = numArray.filter((number) => {
      for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
      }
      return true;
    });
    console.log('Prime numbers',numArray);
}
findPrimeNumbers(unknownNumbers);

//IIFE
(function(numArray){
    numArray = numArray.filter((number) => {
        for (var i = 2; i <= Math.sqrt(number); i++) {
          if (number % i === 0) return false;
        }
        return true;
      });
      console.log('Prime',numArray);
})( [2, 13, 44, 5, 8, 17, 22, 9,210])
