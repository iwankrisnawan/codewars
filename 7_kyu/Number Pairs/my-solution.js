function getLargerNumbers(a, b) {
  let result = [];
  for (let i = 0; i <= a.length - 1; i++) {
    if (a[i] > b[i]) {
      result.push(a[i]);
    } else {
      result.push(b[i]);
    }
  }
  return result;
}
