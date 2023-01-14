/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
  // Write your code here
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] == s[i + 1]) {
      count++;
    }
  }
  return count;
}
