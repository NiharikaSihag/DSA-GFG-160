// Given an array arr[]. Rotate the array to the left (counter-clockwise direction) by d steps, where d is a positive integer. Do the mentioned change in the array in place.

// Note: Consider the array as circular.

// Input: arr[] = [1, 2, 3, 4, 5], d = 2
// Output: [3, 4, 5, 1, 2]
function reverse(arr, left, right){
    while(left < right){
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

function rotateArr(arr, d){
    const n = arr.length;
    if(n === 0){
        return;
    }
    d = d%n;

    // For clockWise:
    reverse(arr, 0, d-1);
    reverse(arr, d, n-1);
    reverse(arr, 0, n-1);

    // for AntiClockWise:
    // reverse(arr, 0, n-d-1);
    // reverse(arr, n-d, n-1);
    // reverse(arr, 0, n-1);
    return arr;
}

console.log( rotateArr([1,2,3,4,5], 2));