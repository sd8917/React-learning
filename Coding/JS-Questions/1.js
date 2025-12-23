
// // customer build in sort;


// function simpleSort(result) {
// //   const result = [...arr];

//   for (let i = 0; i < result.length; i++) {
//     for (let j = i + 1; j < result.length; j++) {
//       if (result[i] > result[j]) {
//         [result[i], result[j]] = [result[j], result[i]];
//       }
//     }
//   }
//   return result;
// }



// const nums = [1, 4, 7,3, 2]
// console.log(simpleSort(nums))




// ===== QUESTION: 1 Seperate even and odD===

// const nums= [1, 2,3 ,4 ,5, 6, 7,7 ,8,9];

// const result = {odd: [], even:[]};


// nums.forEach((num)=>{
//     if(num%2==0){
//         result.even.push(num);
//     }
//     else{
//         result.odd.push(num);
//     }
// })

// console.log("nums ", result);


// ===== QUESTION2 : Freq count===== 
// const arr = ['a', 'a', 'v', 'c', 'c','d','c','d','a','c','b'];


// const frq = arr.reduce((acc, item)=>{
//     acc[item] = (acc[item] || 0)+1;
//     console.log("acc ", acc[item], typeof acc);
//     console.log("item ", item);
//     return acc;
// },{})
// alternate we can use
// for(let n of arr)


//== Extended question could find most occured elemnt or key.

// function sortComperator([charA, freqA], [charB, freqB]){
//     return freqB-freqA;// Higher freq first.
// }
// console.log("Freq ",Object.fromEntries(Object.entries(frq).sort(sortComperator)))


//==== Questions 3. First non repeating element====


// const arr = [1, 2, 2, 3 ,3 ,4];

// let n = arr.length;

// let count={};
// let ans = -1;

// for(let i of arr){
//     count[i] = (count[i] || 0) + 1;

//     if(count[i]>1){
//         ans = count[i];
//     }
// }

// console.log("count ", count); //  { '1': 1, '2': 2, '3': 2, '4': 1 }
// // now iterate over array chck object count for it

// for(let k of arr){
//     if(count[`${k}`]==1){
//         console.log("ans ", k);
//         return;
//     }
// }

// 2 approach using the xor property.


// QUESTION 4 Find 2nd lowest number
// const nums = [5, 1 ,3, 4, 2];

// let min = Infinity;

// let sec = Infinity;

// for(let n of nums){
//     if(n < min){
//         sec = min;
//         min = n;
//     }
//     else if (n < sec && n !== min){
//         sec  = n;
//     }
// }

// console.log("sec ", sec);


// Question 5  convert number to binary
// const nums = [5, 1 ,3, 4, 2];

// const output = nums.map((num)=>{
//     return num.toString(2);
// })

// console.log("output ", output);//  [ '101', '1', '11', '100', '10' ]

/// ===== Question 6 Find the truthy false ============  

// const nums = [1, 0, null, 2, "", 3, undefined];

// console.log("truthy ", nums.filter(Boolean));


// === Question 7 memoization fuction === 

// function memoize(fn){
//     const cache = {} // 

//     return function(n){
//         if(cache[n]) return cache[n];

//         cache[n] = fn(n);
//         return cache[n];
//     }
    
// };

// const square  = memoize(n=>n*n);

/// === Question 8: Prevent object mutation ===== 

// const user = {name: "Mohit"};

// // Object.seal(user);// only update , no add or delete

// Object.freeze(user); // no update, no add ,no delete

// user.name = "Amit";

// user.age = 25;

// delete user.name;

// console.log(user);


/// ==== Question 9 Hoc function ===== 
// When one function take another function and ehance the feature of function
// example : map(callbackfunction), filter etc.

/// === Question 10 Pure function === 
// When the function value does not change for same for same input
// No side effect on input changes.


// when function value change on changing the parameter.

// function pureFunction(a, b){
//     return {a,b};
// }

/// ==== Question 11 Group array item by property ====== 
// const users = [
//     {name: "Mohit", city: 'Delhi'},

//      {name: "Amit", city: 'Noida'},
//     //   {name: "Arun", city: 'Noida'},
//       {name: "Rohit", city: 'Gurgram'},
// ]


// const grouped = users.reduce((acc,user)=>{
//     (acc[user.city] = acc[user.city] || []).push(user)

//     return acc;
// }, {})



// console.log('grouped ', grouped);

/// 12. Question 12 ===== 
// let num = 12345;

// console.log([...num]+"");

// 13 Question 14== check immutability

// const user = {name: "Mohit", age: 30};


// Object.freeze(user);

// user.name = "Sudhanshu";

// console.log('user ', user);

// 14 . react
// react is flexible and supprt mode component based structure.
// === Question 15 MERGE two object =====

// const user = {name: "Mohit"};

// const details = {name: "Nitin", age: 25};


// const finalUser = {...user, ...details};


// console.log("final user ", finalUser);

// Question 16.==== Optional chaining ?.


