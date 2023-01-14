function equalStacks(h1, h2, h3) {
  // Write your code here

  const accumulate = (h) =>
    h.map(
      (
        (sum) => (value) =>
          (sum += value)
      )(0)
    );
  const t1 = accumulate(h1.reverse());
  const t2 = accumulate(h2.reverse());
  const t3 = accumulate(h3.reverse());

  const filteredArray1 = t1.filter((value) => t2.includes(value));
  const filteredArray2 = t3.filter((value) => filteredArray1.includes(value));
  return Math.max(filteredArray2); //[5]
}

h1 = [3, 2, 1, 1, 1];
h2 = [4, 3, 2];
h3 = [1, 1, 4, 1];
equalStacks(h1, h2, h3);
