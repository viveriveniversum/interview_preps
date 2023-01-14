const zeroMatrix = (arr, n) => {
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (arr[r][c] === 0) {
        arr[r][c] = true;
      }
    }
  }
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (arr[r][c] === true) {
        for (let i = 0; i < n; i++) {
          arr[r][i] = 0;
        }
        for (let j = 0; j < n; j++) {
          arr[j][c] = 0;
        }
      }
    }
  }

  return arr;
};

console.log(
  zeroMatrix(
    [
      [4, 0, 6],
      [2, 8, 1],
      [5, 9, 2],
    ],
    3
  )
);
