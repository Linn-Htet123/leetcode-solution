"use strict";
function fib(n, memo = {}) {
    if (n in memo)
        return memo[n];
    if (n === 0)
        return 0;
    if (n <= 2)
        return 1;
    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
console.log(fib(90));
console.log(fib(6));
