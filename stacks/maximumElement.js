function getMax(operations) {
  // Write your code here
  let stack = [];
  for (let i = 0; i < operations.length; i++) {
    if (operations[i][0] === "1") {
      stack.unshift(parseInt(operations[i].substring(2)));
    }
    if (operations[i][0] === "2") {
      stack.shift();
    }
    if (operations[i][0] === "3") {
      console.log(Math.max(...stack));
    }
  }
  return stack;
}
op = ["1 97", "2", "1 20", "2", "1 26", "1 20", "2", "3", "1 91", "3"];

getMax(op);
//ERROR
