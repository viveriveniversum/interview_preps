function processData(input) {
  //Enter your code here
  let ops = input.split("\n");
  let str = "";
  let last = [];

  for (let i = 1; i < parseInt(ops[0]) + 1; i++) {
    let command = parseInt(ops[i].split(" ")[0]);
    let args = ops[i].split(" ")[1];

    switch (command) {
      case 1:
        last.push(str);
        str = str + args;
        break;
      case 2:
        last.push(str);
        str = str.substring(0, str.length - parseInt(args));
        break;
      case 3:
        console.log(str.charAt(parseInt(args) - 1));
        break;
      case 4:
        str = last.pop();
        break;
    }
  }
}
