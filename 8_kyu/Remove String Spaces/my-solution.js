function noSpace(x) {
  let result = "";
  for (let i = 0; i <= x.length - 1; i++) {
    if (x[i] != " ") {
      result = result + x[i];
    }
  }
  return result;
}
