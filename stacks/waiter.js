function waiter(number, q) {
  // Write your code here
  let n = number.length;

  let aStacks = [...number];
  let bStacks = [];
  const isPrime = (x) => {
    for (let i = 2; i < x; i++) {
      if (x % i == 0) return false;
    }
    return true;
  };
  const getNPrimes = (x) => {
    let primes = [];
    let i = 2;
    while (primes.length < x) {
      if (isPrime(i)) primes.push(i);
      i++;
    }
    return primes;
  };
  let primes = getNPrimes(q);

  for (let i = 1; i <= q; i++) {
    let count = aStacks.length;
    for (let j = 0; j < count; j++) {
      let item = aStacks.pop();
      if (item % primes[i - 1] == 0) {
        bStacks.unshift(item);
      } else aStacks.unshift(item);
    }
  }

  let answers = [...bStacks, ...aStacks];
  return answers;
}
// [4,6,3,7,5]
let a = [3, 3, 4, 4, 9];
console.log(waiter(a, 2));
