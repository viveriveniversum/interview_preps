/*
 *pangram contains all the letters in the alphabet.
 * Complete the 'pangrams' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function pangrams(s) {
  // Write your code here
  let alphabet = new Set();
  function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
  }
  for (let i = 0; i < s.length; i++) {
    if (isCharacterALetter(s[i])) {
      alphabet.add(s[i]);
    }
  }
  return alphabet.size === 26 ? "pangram" : "not pangram";
}

console.log(pangrams("the quick brown fox jumps over the lazy dog"));
