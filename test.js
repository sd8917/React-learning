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

function fetchData(callback) {
    setTimeout(() => {
        const data = { id: 1, name: "Sample Data" };
        callback(data);
    }, 2000);
}

fetchData((data) => {
    console.log("Data received:", data);
});