// You are given an integer array arr[]. Your task is to find the smallest positive number missing from the array.

// Note: Positive number starts from 1. The array can have negative integers too.

// Examples:

// Input: arr[] = [2, -3, 4, 1, 1, 7]
// Output: 3


// Using set
function missingMinNum(arr){
    let res = 1;
    let newSet = new Set(arr);
    while(newSet.has(res)){
        res++;
    }
    return res;
}

// Brute force 
// function missingMinNum(arr){
//     let result = 1;
//     arr.sort((a,b) => (a-b));
//     for(let num of arr){
//         if(num === result){
//             result++;
//         }
//     }
//     return result;
// }

console.log(missingMinNum([1,2,3,4,6]));