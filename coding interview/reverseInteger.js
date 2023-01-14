const reverseInteger = (int) => {
  const str = int.toString();
  let array = [];
  if (str[0] === "-") {
    array = str.split("");
    array.shift();
    array.reverse();
    while (array[0] === "0") {
      array.shift();
    }
  } else {
    array = str.split("");
    array.reverse();
    while (array[0] === "0") {
      array.shift();
    }
  }
  return parseInt(array.join(""));
};
console.log(reverseInteger(-1550));
