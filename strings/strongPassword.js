function minimumNumber(n, password) {
  // Return the minimum number of characters to make the password strong
  let pass = password.split("");
  let numbers = "0123456789".split("");
  let lower_case = "abcdefghijklmnopqrstuvwxyz".split("");
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let special_characters = "!@#$%^&*()-+".split("");
  let counter = {
    n: false,
    l: false,
    u: false,
    s: false,
  };
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (!counter.n && numbers.includes(pass[i])) {
      count++;
      counter.n = true;
    }
    if (!counter.l && lower_case.includes(pass[i])) {
      count++;
      counter.l = true;
    }
    if (!counter.u && upper_case.includes(pass[i])) {
      count++;
      counter.u = true;
    }
    if (!counter.s && special_characters.includes(pass[i])) {
      count++;
      counter.s = true;
    }
  }
  count = 4 - count;

  if (n + count < 6) {
    count = 6 - n;
  }
  return count;
}

console.log(minimumNumber(11, "#HackerRank"));
