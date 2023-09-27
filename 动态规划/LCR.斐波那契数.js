/**
 * @param {number} n
 * @return {number}
 */

const f = []
var fib = function(n) {
    const MOD = 1000000007;
    if(n == 0) return 0
    if(n == 1) return 1
    if(f[n] === undefined) {
       f[n] = (fib(n-1) + fib(n-2))%MOD
    }
    return f[n]
}


//答案需要取模 1e9+7(1000000007) ，如计算初始结果为：1000000008，请返回 1。