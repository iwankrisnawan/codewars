function oddCount(n) {
  let result = 0;
  if (n % 2 == 1) {
    n = n - 1;
  }
  result = n / 2;
  return result;
}
