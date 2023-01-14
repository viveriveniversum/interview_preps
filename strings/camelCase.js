function camelcase(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
      count++;
    }
  }
  return count + 1;
}
