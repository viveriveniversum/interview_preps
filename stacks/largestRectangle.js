/*
 * Complete the 'largestRectangle' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts INTEGER_ARRAY h as parameter.
 */
//1,2,3,4,5
function largestRectangle(h) {
  // Write your code here
  let n = h.length; //5
  //areaAt(2)
  const areaAt = (k) => {
    let height = h[k]; //3
    let area = height; //3
    let left = k - 1; //1
    let right = k + 1; //3--->4

    while (left > -1 && h[left] >= height) {
      area += height;
      left--;
    }
    while (right < n && h[right] >= height) {
      area += height; //6+3=9
      right++;
    }
    return area;
  };
  let maxArea = areaAt(0); //5
  for (let i = 1; i < n; i++) {
    maxArea = Math.max(maxArea, areaAt(i));
  }
  return maxArea;
}

let a = [4, 5, 4, 3, 10, 10];
console.log(largestRectangle(a));
