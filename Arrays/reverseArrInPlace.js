// You are given an array of integers arr[]. Your task is to reverse the given array.

// Note: Modify the array in place.

// Examples:

// Input: arr = [1, 4, 3, 2, 6, 5]
// Output: [5, 6, 2, 3, 4, 1]

function reverseArr(arr){
    if(arr.length === 0){
        return;
    }
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
// console.log(reverseArr([42,4,53,657,43,2,5,6]));