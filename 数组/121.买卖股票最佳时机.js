/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    
    let minVal = prices[0]
    let maxProfit = 0
    for(let i = 1;i<prices.length;i++) {
        if(prices[i] < minVal) {
            minVal = prices[i]
        }else {
             maxProfit = Math.max(maxProfit,prices[i]-minVal)
        }

    }
    return maxProfit
};

//一次遍历：固定一个最小值，遍历数组，每次循环进行比对，若遍历时有更小值，将最小值重新赋值，若没有最小值，则相减得到最大利润

//反正永远都是最小在前，最大在后