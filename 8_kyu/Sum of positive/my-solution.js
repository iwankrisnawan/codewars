function positiveSum(arr) {
  let result = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] > 0) {
      result = result + arr[i];
    }
  }
  return result;
}
