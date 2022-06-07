function fakeBin(x) {
  let result = "";
  for (let index = 0; index <= x.length - 1; index++) {
    if (parseInt(x[index]) < 5) {
      result = result + "0";
    } else {
      result = result + "1";
    }
  }
  return result;
}
