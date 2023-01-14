// const chunkArray = (arr, n) => {
//   let chunkedArray = [];
//   let subArray = [];
//   let lengthLast = arr.length % n;
//   let last = [];
//   for (let i = lengthLast; i > 0; i--) {
//     last.push(arr[arr.length - i]);
//   }

//   for (let el of arr) {
//     if (subArray.length < n) {
//       subArray.push(el);
//     } else {
//       chunkedArray.push(subArray);
//       subArray = [];
//       subArray.push(el);
//     }
//   }
//   chunkedArray.push(last);
//   return chunkedArray;
// };

const chunkArray = (arr, n) => {
  let chunkedArray = [];
  let subArray = [];
  let lastArray = [];
  let lastNumber = arr.length % n;
  for (let i = lastNumber; i > 0; i--) {
    lastArray.push(arr[arr.length - i]);
  }
  for (let el of arr) {
    if (subArray.length < n) {
      subArray.push(el);
    } else {
      chunkedArray.push(subArray);
      subArray = [];
      subArray.push(el);
    }
  }
  chunkedArray.push(lastArray);
  return chunkedArray;
};

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
