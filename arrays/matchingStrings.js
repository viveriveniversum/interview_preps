//Sparse Arrays
function matchingStrings(strings, queries) {
  // Write your code here
  const memory = {};
  for (const string of strings) memory[string] = (memory[string] || 0) + 1;
  console.log(memory);

  return queries.map((query) => memory[query] || 0);
}
