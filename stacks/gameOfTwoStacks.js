function twoStacks(max, a, b) {
  //4 2 4 6 1
  //2 1 8 5

  let ai = 0,
    bi = 0;
  let ret = 0,
    total = 0;
  while (ai < a.length && total + a[ai] <= max) {
    total += a[ai++];
  }
  while (bi < b.length && total + b[bi] <= max) {
    total += b[bi++];
  }
  ret = ai + bi;
  while (true) {
    while (ai > 0 && total + b[bi] > max) {
      total -= a[ai - 1];
      ai--;
    }
    if (total + b[bi] > max || bi >= b.length) break;
    total += b[bi++];
    ret = Math.max(ret, ai + bi);
  }
  return ret;
}
