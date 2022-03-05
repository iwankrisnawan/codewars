function sum() {
  let total = arguments.length - 1;
  let result = 0;
  for (let i = 0; i <= total; i++) {
    result = result + arguments[i];
  }
  return result;
}
