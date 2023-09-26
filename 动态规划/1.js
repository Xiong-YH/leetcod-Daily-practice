const f = []
var fib = function(n) {
    if(n == 0) return 0
    if(n == 1) return 1
    if(f[n] === undefined) {
       f[n] = fib(n-1) + fib(n-2)
    }
    return f[n]
};


console.log(fib(45));