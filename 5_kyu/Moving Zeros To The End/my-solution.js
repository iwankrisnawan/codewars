function moveZeros(arr) {
  let count0 = 0;
  let result = [];
  arr.forEach((data) => {
    if (data === 0) {
      count0 = count0 + 1;
    } else {
      result.push(data);
    }
  });

  for (let index = 0; index < count0; index++) {
    result.push(0);
  }

  return result;
}
