/*
first occurent and last occurence in array 
extension of binary search problem

*/

function firstOccurence(arr, search){
    
    let left=0, right = arr.length-1;

    let ans = -1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);


        if(arr[mid]==search){
            ans = mid;
            console.log("right ", right)
            right = mid - 1;
        }
        else if(arr[mid]<search){
            left = mid+1;
        }
        else{
            right = mid - 1;
        }
    }

    return ans;
}


function lastOccurence(arr, search){
    
    let left=0, right = arr.length-1;

    let ans = -1;

    while(left<=right){
        let mid = Math.floor((left+right)/2);


        if(arr[mid]==search){
            ans = mid;
           // console.log("right ", right)
            left = mid + 1;
        }
        else if(arr[mid]<search){
            left = mid+1;
        }
        else{
            right = mid - 1;
        }
    }

    return ans;
}


console.log("First occurence ", lastOccurence([1,2,2,2,3,4],2));