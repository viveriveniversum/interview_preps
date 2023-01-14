function isBalanced(s) {
  //'{[()]}
  //YES:NO
  if (s.length % 2 != 0) {
    return "NO";
  }
  while (s.includes("()") || s.includes("[]") || s.includes("{}")) {
    s = s.replace("()", "").replace("[]", "").replace("{}", "");
  }
  return s === "" ? "YES" : "NO";
}
console.log(isBalanced("{{[[(())]]}}"));
