function invert(array) {
  let result = [];
  if (array.length == 0) {
    return [];
  }
  array.forEach((data) => {
    data = data * -1;
    result.push(data);
  });
  return result;
}
