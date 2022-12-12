function sumMix(x) {
  var result = 0;
  x.forEach((data) => {
    result += eval(data);
  });
  return result;
}
