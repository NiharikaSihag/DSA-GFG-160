// Given an integer array arr[]. You need to find the maximum sum of a subarray.

// Examples:

// Input: arr[] = [2, 3, -8, 7, -1, 2, 3]
// Output: 11

function maxSumFunc(arr){
    let currSum = arr[0];
    let maxSum = arr[0];

    for(let i = 1; i < arr.length; i++){
        currSum = Math.max(arr[i], currSum + arr[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}

// console.log(maxSumFunc([2, 3, -8, 7, -1, 2, 3]));