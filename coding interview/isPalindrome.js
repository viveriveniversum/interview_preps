const isPalindrome = (s) => {
  const reverse = s.split("").reverse().join("");
  console.log(reverse === s ? true : false);
};
isPalindrome("abtba");
