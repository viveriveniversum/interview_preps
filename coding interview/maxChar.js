// const maxChar = (s) => {
//   let obj = {};
//   for (let char of s) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//   let maxChar = "";
//   let maxCount = 0;
//   for (let i in obj) {
//     if (obj[i] >= maxCount) {
//       maxCount = obj[i];
//       maxChar = i;
//     }
//   }
//   console.log(
//     `The most repetitive char is in the string is ${maxChar}, repeated ${maxCount} times.`
//   );
// };
const maxChar = (s) => {
  let obj = {};
  for (let char of s) {
    !obj[char] ? (obj[char] = 1) : obj[char]++;
  }
  let max = "";
  let maxCount = 0;
  for (let i in obj) {
    if (obj[i] > maxCount) {
      max = i;
      maxCount = obj[i];
    }
  }
  console.log(max, maxCount);
};
maxChar("hellooooooooooooo11111111112s");
