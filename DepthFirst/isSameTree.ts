function isSameTree(p: (number | null)[], q: (number | null)[]): boolean {
  if (p.length !== q.length) return false;

  for (let i = 0; i < p.length; i++) {
    if (p[i] !== q[i]) {
      return false;
    }
  }

  return true;
}

let p = [1, 2, 1];
let q = [1, 1, 2];
console.log(isSameTree(p, q));
