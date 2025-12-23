// const letters = ['a', 'b', 'c', 'd'];

import { ca } from "zod/locales";

// const reversed = letters.reduce((acc, val) => acc + val, '');

// console.log(reversed); // Output: "dcba"

// Callback is function passed as an argument to another function
// function greet(value, callback) {
//   console.log("Hello " + value);
//   // call the passed function
//   callback();
// };


// function sayGoodbye() {
//   console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);

// ## Nested callbacks with arguments
// function add(a, b, callback) {
//   const sum = a + b;
//   callback(sum);
// }

// add(5, 10, function(result) {
//   console.log("The sum is: " + result);
// });

// // ## Using arrow functions as callbacks
// add(3, 7, (result) => {
//   console.log("The sum using arrow function is: " + result);
// });

// Callback in asynchronous operations

// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { id: 1, name: "Sample Data" };
//         callback(data);
//     }, 2000);
// }

// fetchData((data) => {
//     console.log("Data received:", data);
// });

// function fun(){
//   console.log("Hello world!");
// }

// function fun2(action){
//     console.log("fun2 function")
//   action();

//   return 1; 
//   action();
// } 

// fun2(fun)

//
// const a = [1, 2, 3, 4, 5];

// const double = a.map(function(n){
//     return n*2;
// })

// console.log("double ", double)

// Modularity and Reusability.
// By seperating the greeting
// and goodbye actions, the pattern flexibility and 
// reusability, enabling different callbacks to be passed as needed

//2 . Returning function from functions

// function multipleOf(factor){
//     return function(mult){
//         return mult*factor;
//     }
// }

// const mult5 = multipleOf(5);

// const mult3 = multipleOf(3);

// const mult2 = multipleOf(2);

// console.log("HOC ", mult5(6));

// 4. Array method filter() as a Higher-Order Function

// const a = [1, 2, 3, 4, 5];

// const even = a.filter(function(n){
//     return n%2===0;
// })

// console.log("even ", even)

/// 5. Array method reduce() as A high Order function

// The reduce() method is a powerful higher -order function
// used to reduce an array to single value

// const n = [1, 2, 3, 4, 5];

// const sum = n.reduce(function(acc,curr){
//     return acc+curr;
// }, 0);

// console.log("sum ", sum);
/*
Reduce() process each element of the array , accumalting a sinle
value (e.g sum, product)
based on the provided callback function.
*/

// function test() {
//     let n = 42;
//     debugger; // Execution pauses here
//     console.log(n);
// }
// test();


// try {
//     dadalert("Welcome Fellow Geek!");
// }
// catch (err) {

//     class DadAlertError extends Error {
//     constructor(message) {
//         super(message);
//         this.name = "DadAlertError";
//     }
// }
//     // If the error is ReferenceError for dadalert, throw custom error
//     if (err instanceof ReferenceError) {
//         throw new DadAlertError("dadalert is not defined. Please define the dadalert function.");
//     } else {
//         console.log(err);
//     }
// }

// Custom error using class
// class CheckCondition extends Error {
//     constructor(msg, code) {
//         super(msg);
//         this.name = "My ERROR";
//         this.code = code;
//     }
  
// }

// Custom error using function
function CheckCondition(msg = "Something went wrong"){
    this.msg = msg;
    this.name ="Checkcondition";
}
CheckCondition.prototype = Error.prototype;

try {
    if (10 != 20) 
        throw new CheckCondition("10 is not equal to 20","SOME_ERROR" );
}
catch (err) {
    console.error(err);
}