/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function twoStrings(s1, s2) {
  // Write your code here
  let set1 = new Set();
  for (let i of s1) {
    set1.add(i);
  }
  for (let i of s2) {
    if (set1.has(i)) {
      return "YES";
    }
  }
  return "NO";
}
