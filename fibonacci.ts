function fib(n: number, memo: { [key: number]: number } = {}): number {
  if (n in memo) return memo[n];
  if (n === 0) return 0;
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
}

console.log(fib(90)); //2880067194370816000
console.log(fib(6)); //8
