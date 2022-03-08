function minMax(arr) {
  let subData = 0;
  let min = 0;
  let max = 0;

  arr.map((data) => {
    subData = data;
    if (max == 0 && min == 0) {
      max = data;
      min = data;
    }
    if (data >= max) {
      max = data;
    }
    if (subData <= min) {
      min = subData;
    }
  });
  return [min, max];
}
