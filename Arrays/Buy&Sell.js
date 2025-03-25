// Given an array prices[] of length n, representing the prices of the stocks on different days. The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.

// Note: Stock must be bought before being sold.

// Examples:

// Input: prices[] = [7, 10, 1, 3, 6, 9, 2]
// Output: 8

function buyNSell(prices){
    const n = prices.length;
    let buy = prices[0]; 
    let sell = 0;
    let result = 0;
    for(let num of prices){
        if( buy > num){
           buy = num; // 7 -> 1 
        }
        else if( sell < num ){
            sell = num; //10 -> 3 -> 6 -> 9
        }
        result = Math.max(result, sell-buy); //(0,3) = 3 -> (3, 1) = 3 -> (3, 2) = 3 -> (3, 5) = 5 ->
        //(5, 8) = 8 
        sell = 0;
    }
    return result;
}
console.log(buyNSell([7, 10, 1, 3, 6, 9, 2]));
