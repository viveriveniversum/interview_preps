const urlify = (string, n) => {
  let s = "";
  for (let i = 0; i < n; i++) {
    if (string[i] === " ") {
      s += "%20";
    } else {
      s += string[i];
    }
  }
  return s;
};

console.log(urlify("mr john smith", 13));
