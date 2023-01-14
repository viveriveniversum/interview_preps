/*
 * Complete the 'caesarCipher' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. INTEGER k
 */

function caesarCipher(s, k) {
  // Write your code here
  let newString = "";
  for (let i = 0; i < s.length; i++) {
    let asciiNum = s[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 90) {
      let newAscii = ((asciiNum - 65 + k) % 26) + 65;
      newString += String.fromCharCode(newAscii);
    } else if (asciiNum >= 97 && asciiNum <= 122) {
      let newAscii = ((asciiNum - 97 + k) % 26) + 97;
      newString += String.fromCharCode(newAscii);
    } else {
      newString += s[i];
    }
  }
  return newString;
}
