/*

Binary search in array

find = 40;


[10, 20, 30, 40, 50]
  l               r

  l = 0
  r = 4
  mid = 2

*/

function binarySearch(arr, elem) {
    let l = 0;
    let r = arr.length - 1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (arr[mid] === elem) {
            return mid; // ✅ stop immediately
        } 
        else if (arr[mid] < elem) {
            l = mid + 1; // ✅ correct variable
        } 
        else {
            r = mid - 1; // ✅ correct variable
        }
    }

    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 40)); // 3
