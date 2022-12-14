function getSum(a, b) {
  let result = a;
  let i = a;

  if (a < b) {
    while (i < b) {
      i++;
      result = result + i;
    }
  } else {
    while (i > b) {
      i--;
      result = result + i;
    }
  }
  return result;
}
