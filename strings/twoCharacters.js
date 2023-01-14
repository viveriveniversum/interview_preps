function alternate(s) {
  // Write your code here
  let len = s.length;
  let chars = {};
  let total = 0;
  for (let i = 0; i < len; i++) {
    chars[s[i]] ? chars[s[i]]++ : (chars[s[i]] = 1);
  }
  const sorted = Object.values(chars).sort((a, b) => chars[a] > chars[b]);
  console.log(sorted);
  for (let i = 0; i < 2; i++) {
    total += parseInt(sorted[i]);
  }
  return total;
}

console.log(alternate("beabeefeab"));
