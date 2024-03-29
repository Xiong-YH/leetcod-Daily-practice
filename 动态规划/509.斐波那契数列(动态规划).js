// 斐波那契数 （通常用 F(n) 表示）形成的序列称为 斐波那契数列 。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给定 n ，请计算 F(n) 。

//  

// 示例 1：

// 输入：n = 2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1
// 示例 2：

// 输入：n = 3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2
// 示例 3：

// 输入：n = 4
// 输出：3
// 解释：F(4) = F(3) + F(2) = 2 + 1 = 3
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if(n == 0) {
        return 0
    }else if (n == 1 ||n == 2) {
        return 1
    }else {
        return fib(n-1)+fib(n-2)
    }

};



/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {

    let f = []
    f[0] = 0
    f[1] = 1

    for(let i = 2;i<=n;i++) {
        f[i] = f[i-1] + f[i-2]
    }
    return f[n]
};
// 利用递归思想


/**
 * @param {number} n
 * @return {number}
 */

var fib = function(n) {
    if(n == 0 || n == 1) {
        return n
    }
    let fib_1 = 0,fib_2 = 1
    for(let i = 2;i<=n;i++) {
        let fib_3 = fib_1+fib_2
        fib_1 = fib_2
        fib_2 = fib_3
    }
    return fib_2
}

