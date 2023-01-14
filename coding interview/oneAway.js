function getObj(str) {
  let obj = {};
  for (let i of str) {
    !obj[i] ? (obj[i] = 1) : obj[i]++;
  }
  return obj;
}
const oneAway = (str1, str2) => {
  if (str1 === str2) return false;

  let obj1 = getObj(str1);
  let obj2 = getObj(str2);
  console.log(obj1);
  console.log(obj2);
  let counter = 0;
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) {
      counter++;
    }
  }
  if (counter >= 2) {
    return false;
  }
  return true;
};

console.log(oneAway("awazz", "awa"));
