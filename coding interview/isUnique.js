const isUnique = (string) => {
  const arr = string.split("");
  const set = new Set(arr);
  return arr.length === set.size ? true : false;
};
console.log(isUnique("hello"));
