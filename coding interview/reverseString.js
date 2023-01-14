const reverseString = (s) => {
  const array = s.split("");
  array.reverse();
  console.log(array.join(""));
};

reverseString("hello world");
