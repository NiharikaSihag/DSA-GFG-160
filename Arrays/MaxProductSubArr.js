// Given an array arr[] that contains positive and negative integers (may contain 0 as well). Find the maximum product that we can get in a subarray of arr[].

// Note: It is guaranteed that the output fits in a 32-bit integer.

// Examples

// Input: arr[] = [-2, 6, -3, -10, 0, 2]
// Output: 180
// Explanation: The subarray with maximum product is {6, -3, -10} with product = 6 * (-3) * (-10) = 180.

function maxProductSubArr(arr){
    let maxProduct = arr[0];
    let minProduct = arr[0];
    let result = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < 0){
            [maxProduct, minProduct] = [minProduct, maxProduct];
        }
        maxProduct = Math.max(arr[i], maxProduct*arr[i]);
        minProduct = Math.min(arr[i], minProduct*arr[i]);
        
        result = Math.max(result, maxProduct);
    }
    return result;
}

console.log(maxProductSubArr([-2, 6, -3, -10, 0, 2]));