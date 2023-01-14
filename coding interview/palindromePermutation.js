const getObj = (str) => {
  let obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  return obj;
};

const permutation = (str) => {
  str = str.replace(/ +/g, "");
  const obj = getObj(str);
  if (str.length % 2 == 1) {
    let counter = 0;
    for (let i of str) {
      if (obj[i] % 2 === 1 || obj[i] === 1) {
        counter++;
      }
      if (counter > 1) return false;
    }
  } else {
    for (let i of str) {
      if (!obj[i] % 2 === 0) {
        return false;
      }
    }
  }
  return true;
};

console.log(permutation("on 1ont"));
