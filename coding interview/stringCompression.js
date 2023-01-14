const stringCompression = (str) => {
  n = str.length;
  let output = "";
  let count = 1;
  let uniqueCount = 0;
  for (let i = 0; i < n; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      output += str[i] + count;
      count = 1;
      uniqueCount++;
    }
  }
  if (uniqueCount === n) return str;
  else return output;
};
console.log(stringCompression("aqaba"));
