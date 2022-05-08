function digitize(n) {
  let result = [];
  let string = `${n}`;
  for (let i = string.length - 1; i >= 0; i--) {
    result.push(parseInt(string[i]));
  }
  return result;
}
