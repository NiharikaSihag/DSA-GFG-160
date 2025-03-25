// Given an array of positive integers arr[], return the second largest element from the array. If the second largest element doesn't exist then return -1.

// Note: The second largest element should not be equal to the largest element.

// Examples:

// Input: arr[] = [12, 35, 1, 10, 34, 1]
// Output: 34
// Explanation: The largest element of the array is 35 and the second largest element is 34.

function secondLargestEle(arr){
    const n = arr.length;
    if(n < 2){
        return -1;
    }
    let largest = -Infinity; // so that code works for negative integers also
    let secondLargest = -Infinity;
    for(let num of arr){
        if(num > largest){
            secondLargest = largest;
            largest = num;
        }
        else if( num > secondLargest && num < largest){
            secondLargest = num;
        }
    }
    return secondLargest === -Infinity? -1 : secondLargest;
}


// console.log(findSecondLargestReduce([-12, -35, -1, -10, -34, -1, -3]))
// console.log(secondLargestEle([-12, -35, -1, -10, -34, -1, -3]));
// console.log(secondLargestEle([10, 5, 10]));


// Some another ways could be: 
// 1: sort the array and find the distinct elements and return the 2nd largest -> find distinct elements by filter or set 
// 2: Use reduce 
// function findSecondLargestReduce(arr){
//     if(arr.length < 2) return null;
//     let result = arr.reduce((acc, current)=>{
//         if(current > acc.largest){
//             acc.secondLargest = acc.largest;
//             acc.largest = current;
//         }else if(current > acc.secondLargest && current < acc.largest){
//             acc.secondLargest = current;
//         }
//         return acc;
//     },{largest: -Infinity, secondLargest: -Infinity});

//     return result.secondLargest === -Infinity ? null : result.secondLargest;
// }