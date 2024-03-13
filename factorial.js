"use strict";
const factorial = (n, memo = {}) => {
    if (n in memo)
        return memo[n];
    if (n <= 1)
        return n;
    memo[n] = n * factorial(n - 1, memo);
    return memo[n];
};
console.log(factorial(4)); //24
console.log(factorial(5)); //120
console.log(factorial(6)); //720
console.log(factorial(18)); //6402373705728000
