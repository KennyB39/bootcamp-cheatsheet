const originalArray = [1, 3, 2, 5, 10];

//evenNumbers is equal to a new array of even numbers returned by filter(). filter() will use an anonymous function as a condition. 
const evenNumbers = originalArray.filter(function(data) {
  //The anonymous function uses a conditional to check if a number is divisible by 2. 
  if (data % 2 === 0) {
    //If a number is even (divisible by 2), the condition returns true.
    return true;
  }
});


// const myFilter = (arr, cb) => {
//   let result = [];
//   for (let index = 0; index < arr.length; index++) {
//     let currentElement = arr[index];
//     if (cb(currentElement)) {
//       result.push(currentElement);
//     }
//   }
//   return result;
// };

// const newEvenArr = myFilter(originalArray, function(data) {
//   //The anonymous function uses a conditional to check if a number is divisible by 2. 
//   if (data % 2 === 0) {
//     //If a number is even (divisible by 2), the condition returns true.
//     return true;
//   }
// })

// const newPrimeArr = myFilter(originalArray,isPrime)

console.log(evenNumbers);//[2, 10]
console.log(originalArray);//[1, 3, 2, 5, 10]

const isPrime = num => {
  // Set up a loop the starts with 2 and continues to increment i as long as i is less than 2
  for (let i = 2; i < num; i++) {
    // isPrime will return false if num is divisible by any number other than 1 or num.
    if (num % i === 0) return false;
  }
  // Otherwise, isPrime will return num, unless num == 1.
  return num !== 1;
};


// Describe how filter is working in this example. What will the value of primeArray be? 
// A filter runs through originalArray and uses the isPrime function to check if each number is prime. It creates and returns a new array that includes all prime numbers.
// [3,2,5]
const primeArray = originalArray.filter(isPrime);


// Describe how filter is working in this example. What will the value of moreThan5Array be? 
// A filter runs through originalArray and creates a new array containing only the numbers larger than 5.
// [10]
const moreThan5Array = originalArray.filter(num => num > 5);

// const moreThan5Array = originalArray.filter(num => true);//[1, 3, 2, 5, 10];
// const moreThan5Array = originalArray.filter(num => false);//[];


// Map vs. Filter

const array1 = [{name: "Farley", age: 5}, {name: "Asher", age: 4}, {name: "Sage", age: 2}, {name: "Jerome", age: 900}];

//Map
// pass a function to map
const map1 = array1.map(personObj => person.name);
// ["Farley","Asher", "Sage",  "Jerome" ];

const map2 = array1.map(personObj => person.age);
// [5,4, 2, 900];




//Filter
const filter1 = array1.filter(personObj => personObj.age <= 5);
// [{name: "Farley", age: 5}, {name: "Asher", age: 4}, {name: "Sage", age: 2}];


const filter2 = array1.filter(personObj => personObj.name === "Farley");
// [{name: "Farley", age: 5}];






