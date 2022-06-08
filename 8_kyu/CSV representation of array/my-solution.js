function toCsvText(array) {
  let result = "";
  for (let i = 0; i <= array.length - 1; i++) {
    for (let k = 0; k <= array[i].length - 1; k++) {
      result += array[i][k];
      if (k != array[i].length - 1) {
        result += ",";
      }
    }
    if (i != array.length - 1) {
      result += "\n";
    }
  }
  return result;
}
