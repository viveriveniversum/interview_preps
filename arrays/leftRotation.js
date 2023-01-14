/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */
//[1,2,3,4,5]
const rotateLeft = (d, arr) => {
  const arrR = arr.splice(0, d);
  arr = [...arr, ...arrR];
  return arr;
};

console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
