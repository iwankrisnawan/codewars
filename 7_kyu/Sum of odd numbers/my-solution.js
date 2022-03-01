function rowSumOddNumbers(n) {
  let sum = 1;
  let i = 1;
  let lineSum = 0;
  while (i <= n) {
    let j = 1;
    lineSum = 0;
    while (j <= i) {
      lineSum = lineSum + sum;
      sum = sum + 2;
      j++;
    }
    i++;
  }
  return lineSum;
}
