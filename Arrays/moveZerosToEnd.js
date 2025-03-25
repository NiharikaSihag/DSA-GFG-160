// You are given an array arr[] of non-negative integers. Your task is to move all the zeros in the array to the right end while maintaining the relative order of the non-zero elements. The operation must be performed in place, meaning you should not use extra space for another array.

// Input: arr[] = [1, 2, 0, 4, 3, 0, 5, 0]
// Output: [1, 2, 4, 3, 5, 0, 0, 0]


function MoveZeros(arr){
    const n = arr.length;
    if(n === 0){
        return;
    }
    let nonZeroInd = 0;
    for(let num of arr){
        if(num !== 0){
            arr[nonZeroInd] = num;
            nonZeroInd++;
        }
    }
    for(let i = nonZeroInd; i < n; i++){
        arr[i] = 0;
    }
    return arr;
}
// console.log(MoveZeros([90,0,0,42,342,0,42,0]));