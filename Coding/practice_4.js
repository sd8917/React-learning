/*
Reverse array

*/

// function reverseArr(nums){

//      // Initialize left to the beginning 
//     // and right to the end
//     let left = 0, right = nums.length - 1;
  
//     // Iterate till left is less than right
//     while (left < right) {
        
//         // Swap the elements at left 
//         // and right position
//         [nums[left], nums[right]] = [nums[right], nums[left]];
      
//         // Increment the left pointer
//         left++;
      
//         // Decrement the right pointer
//         right--;
//     }
// }

const arr = [1, 4, 3, 2, 6, 5];

const copy = [...arr]; // shallow copy
// reverseArr(arr);
// console.log(arr.join(" "));


console.log(copy.reverse())
console.log(arr)