// Alternate elements of an array

/*

let arr = [10, 20, 30, 40, 50]

ans = 10 30 50

*/

function alternate(arr){

    let n = arr.length;

    let ans=[];

    for(let i = 0 ;i < n; i++){
        if(i % 2 == 0){
           ans.push(arr[i]);
        }
    }
    return ans;
}

console.log(alternate([10, 20, 30, 40, 50]))